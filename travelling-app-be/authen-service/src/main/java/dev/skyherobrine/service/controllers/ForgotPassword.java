package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.exceptions.EntityNotFoundException;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.User;
import dev.skyherobrine.service.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("authenticate/api/v1/forgot")
@Slf4j
public class ForgotPassword {

    @Autowired
    private UserRepository ur;

    @GetMapping("{email}")
    public ResponseEntity<Response> recoveryByEmail(@PathVariable("email") String email) {
        try {
            log.info("Calling the method recovery account by email");
            User target = ur.findByEmail(email).orElseThrow(() -> new EntityNotFoundException("The email was not found!"));
            log.info("Find the user successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Find the user",
                    true
            ));
        } catch (EntityNotFoundException e) {
            log.warn("The user's email was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.BAD_REQUEST.value(),
                    "The user email was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when recovery account by email");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when recovery account by email",
                    e.getCause()
            ));
        }
    }
}
