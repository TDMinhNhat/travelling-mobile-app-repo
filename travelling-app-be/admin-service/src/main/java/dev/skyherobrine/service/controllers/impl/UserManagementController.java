package dev.skyherobrine.service.controllers.impl;

import dev.skyherobrine.service.controllers.IManagement;
import dev.skyherobrine.service.exceptions.EntityNotFound;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mariadb.User;
import dev.skyherobrine.service.repositories.mariadb.UserRepository;
import dev.skyherobrine.service.services.ApiNotSupported;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/api/v1/user")
@Slf4j
public class UserManagementController implements IManagement<User, String> {

    @Autowired
    private UserRepository ur;

    @PostMapping
    @Override
    public ResponseEntity<Response> add(User user) {
        return new ApiNotSupported().getMessage();
    }

    @PutMapping
    @Override
    public ResponseEntity<Response> update(User user) {
        return new ApiNotSupported().getMessage();
    }

    @DeleteMapping("{id}")
    @Override
    public ResponseEntity<Response> delete(@PathVariable("id") String s) {
        try {
            log.info("Calling the method delete user");
            User target = ur.findById(s).orElseThrow(() -> new EntityNotFound("The entity with the id = " + s + " was not found"));
            target.setStatus(false);
            ur.save(target);
            log.info("Deleted user successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Deleted user successfully",
                    true
            ));
        } catch (EntityNotFound e) {
            log.warn("The entity with the id = " + s + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_NOT_FOUND,
                    "The entity with the id = " + s + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete user");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when delete user",
                    e.getCause()
            ));
        }
    }

    @GetMapping
    @Override
    public ResponseEntity<Response> getAll() {
        log.info("Call the method get all user");
        return ResponseEntity.ok(new Response(
                HttpStatus.SC_OK,
                "Get all user successfully",
                ur.findAll()
        ));
    }

    @GetMapping("{id}")
    @Override
    public ResponseEntity<Response> getById(@PathVariable("id") String s) {
        try {
            log.info("Calling the method delete user");
            User target = ur.findById(s).orElseThrow(() -> new EntityNotFound("The entity with the id = " + s + " was not found"));
            log.info("Find user successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Find user with the id = " + s,
                    target
            ));
        } catch (EntityNotFound e) {
            log.warn("The entity with the id = " + s + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_NOT_FOUND,
                    "The entity with the id = " + s + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete user");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when delete user",
                    e.getCause()
            ));
        }
    }
}
