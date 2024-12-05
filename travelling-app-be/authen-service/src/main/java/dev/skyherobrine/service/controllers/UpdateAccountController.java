package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.exceptions.EntityNotFoundException;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.User;
import dev.skyherobrine.service.repositories.UserRepository;
import dev.skyherobrine.service.services.impl.UserAvatarImageFileService;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("authenticate/api/v1/update-account")
@Slf4j
public class UpdateAccountController {

    private UserRepository ur;
    private KafkaTemplate template;
    private UserAvatarImageFileService uaifs;

    public UpdateAccountController(UserRepository ur, KafkaTemplate template, UserAvatarImageFileService uaifs) {
        this.ur = ur;
        this.template = template;
        this.uaifs = uaifs;
    }

    @PostMapping
    public ResponseEntity updateAccountInfo() {
        return null;
    }

    @PostMapping("avatar")
    public ResponseEntity updateAvatar(@RequestParam("id") String userId, @RequestParam("file") MultipartFile image) {
        log.info("Calling the method update avatar user");
        try {
            User target = ur.findById(userId).orElseThrow(() -> new EntityNotFoundException("The user id = " + userId + " was not found!"));
            String getKeyFileName = uaifs.uploadFile(userId, image);
            String getURL = uaifs.getURLFile(getKeyFileName).toExternalForm();
            target.setAvatar(getURL);
            template.send("update-avatar-user", ObjectParser.objectToJson(getURL + "@USERID@" + userId));
            ur.save(target);
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Update avatar user successfully",
                    true
            ));
        } catch (EntityNotFoundException e) {
            log.error("The user id = " + userId + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.BAD_REQUEST.value(),
                    "The user id = " + userId + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when update avatar user");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when update avatar user",
                    e.getCause()
            ));
        }
    }
}
