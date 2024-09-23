package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.services.TravellingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("travelling/api/v1/travelling")
@Slf4j
public class TravellingController {

    @Autowired
    private TravellingService services;

    @GetMapping
    public ResponseEntity<Response> getAll() {
        log.info("Calling method get all travelling");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get all travelling",
                services.getFullInfoAllTravel()
        ));
    }

    @GetMapping("{id}")
    public ResponseEntity<Response> getTravellingById(String travelId) {
        log.info("Calling method get travelling by id");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get travelling by id",
                services.getInfoTravelId(travelId)
        ));
    }
}
