package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.exceptions.EntityNotFoundException;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.User;
import dev.skyherobrine.service.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("authenticate/api/v1/login")
@Slf4j
public class LoginController {

    @Autowired
    public UserRepository ur;

    @PostMapping("{email}/{password}")
    public ResponseEntity<Response> login(@PathVariable("email") String email, @PathVariable("password") String password) {
        try {
            log.info("Calling the method login account");
            User target = ur.findByEmailAndPassword(email, password).orElseThrow(() -> new EntityNotFoundException("Email or password isn't correctly"));
            log.info("Login successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Login successfully",
                    target
            ));
        } catch (EntityNotFoundException e) {
            log.warn("Login failed for being not correct username or password");
            return ResponseEntity.ok(new Response(
                    HttpStatus.UNAUTHORIZED.value(),
                    "The username or password isn't correctly",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when check the username and password");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when check the username and password",
                    e.getCause()
            ));
        }
    }
}
