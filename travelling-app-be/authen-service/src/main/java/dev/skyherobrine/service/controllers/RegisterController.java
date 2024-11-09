package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.dtos.AccountRegisterDTO;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.User;
import dev.skyherobrine.service.repositories.UserRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("authenticate/api/v1/register")
@Slf4j
public class RegisterController {

    @Autowired
    private UserRepository ur;
    @Autowired
    private KafkaTemplate template;

    @PostMapping
    public ResponseEntity<Response> registerAccount(@RequestBody AccountRegisterDTO account) {
        log.info("Calling register account");
        try {
            User user = account.toUserObject();
            ur.save(user);
            template.send("insert-user", ObjectParser.objectToJson(user));
            log.info("Add user successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Register account successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Something wrong when add user");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when add user",
                    e.getCause()
            ));
        }
    }

}