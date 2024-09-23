package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.FavoriteTravelRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("favorite/api/v1/favorite")
@Slf4j
public class FavoriteTravellingController {

    @Autowired
    private FavoriteTravelRepository ftr;

    @GetMapping("{id}")
    public ResponseEntity<Response> getAllFavorites(@PathVariable("id") String userId) {
        log.info("Calling them method get all travelling favorite");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get all favorite travelling by user id",
                ftr.findById_UserId(userId)
        ));
    }
}
