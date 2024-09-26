package dev.skyherobrine.service.controllers.impl;

import dev.skyherobrine.service.controllers.IManagement;
import dev.skyherobrine.service.dtos.ServiceDTO;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mariadb.Service;
import dev.skyherobrine.service.repositories.mariadb.ServiceRepository;
import dev.skyherobrine.service.services.ApiNotSupported;
import dev.skyherobrine.service.utils.ObjectParser;
import jakarta.ws.rs.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/api/v1/service")
@Slf4j
public class ServiceManagementController implements IManagement<ServiceDTO, Long> {

    @Autowired
    private KafkaTemplate<String,Object> template;
    @Autowired
    private ServiceRepository sr;

    @PostMapping(produces = "application/json")
    @Override
    public ResponseEntity add(@RequestBody ServiceDTO serviceDTO) {
        try {
            log.info("Call the method add service");
            Service target = sr.save(serviceDTO.toObject());
            template.send("insert-service", ObjectParser.objectToJson(target));
            log.info("Add service successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Add service successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Error when add service");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when add service",
                    e.getCause()
            ));
        }
    }

    @PutMapping
    @Override
    public ResponseEntity<Response> update(@RequestBody ServiceDTO serviceDTO) {
        return new ApiNotSupported().getMessage();
    }

    @DeleteMapping("{id}")
    @Override
    public ResponseEntity<Response> delete(@PathVariable("id") Long id) {
        try {
            log.info("Call the mthod delete service");
            Service target = sr.findById(id).orElseThrow(() -> new NotFoundException("Not found the entity with the id = " + id));
            sr.delete(target);
            log.info("Delete the service successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Delete the service successfully",
                    true
            ));
        } catch (NotFoundException e) {
            log.warn("The service id = " + id + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.BAD_REQUEST.value(),
                    "The service id = " + id + " was not found",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete service");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when delete service",
                    e.getCause()
            ));
        }
    }

    @GetMapping
    @Override
    public ResponseEntity<Response> getAll() {
        log.info("Call the method get all services");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get all services",
                sr.findAll()
        ));
    }

    @GetMapping("{id}")
    @Override
    public ResponseEntity<Response> getById(@PathVariable("id") Long id) {
        try {
            log.info("Call the method get service by id");
            Service target = sr.findById(id).orElseThrow(() -> new NotFoundException("The service id = " + id + " was not found!"));
            log.info("Found the service id = " + id);
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Found the service",
                    target
            ));
        } catch (NotFoundException e) {
            log.warn("The service with the id = " + id + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.BAD_REQUEST.value(),
                    "The service with the id = " + id + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("");
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when get service by id",
                    e.getCause()
            ));
        }
    }
}
