package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.mariadb.FacilityRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("travelling/api/v1/facility")
@Slf4j
public class FacilityController {
    @Autowired
    private FacilityRepository fr;

    @GetMapping
    public ResponseEntity<Response> getAll() {
        log.info("Calling the method getAll facilities");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get all facilities",
                fr.findAll()
        ));
    }
}
