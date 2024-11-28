package dev.skyherobrine.service.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.FavoriteTravel;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.FavoriteTravelRepository;
import dev.skyherobrine.service.services.FavoriteTravellingService;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("favorite/api/v1/favorite")
@Slf4j
public class FavoriteTravellingController {

    @Autowired
    private FavoriteTravelRepository ftr;
    @Autowired
    private FavoriteTravellingService fts;
    @Autowired
    private KafkaTemplate template;

    @GetMapping("{id}")
    public ResponseEntity<Response> getAllFavorites(@PathVariable("id") String userId) {
        log.info("Calling them method get all travelling favorite");
        return ResponseEntity.ok(new Response(
                HttpStatus.OK.value(),
                "Get all favorite travelling by user id",
                fts.getAllFavoriteTravelling(userId)
        ));
    }

    @PostMapping
    public ResponseEntity<Response> addFavorite(
            @RequestParam("userId") String userId,
            @RequestParam("travelId") String travelId
    ) {
        log.info("Calling add favorite");
        try {
            FavoriteTravel ft = new FavoriteTravel(new FavoriteTravel.FavoriteTravelID(userId, travelId));
            ftr.save(ft);
            log.info("Add favorite successfully");
            template.send("insert-favorite", ObjectParser.objectToJson(ft));
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Add favorite successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Something wrong when add favorite");
            log.error("Error: ", e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when add favorite",
                    e.getMessage()
            ));
        }
    }

    @DeleteMapping
    public ResponseEntity<Response> deleteFavorite(
            @RequestParam("userId") String userId,
            @RequestParam("travelId") String travelId
    ) {
        log.info("Deleting favorite");
        try {
            ftr.deleteById(new FavoriteTravel.FavoriteTravelID(userId, travelId));
            log.info("Delete favorite successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Delete favorite successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete favorite");
            log.error("Error: ", e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when delete favorite",
                    e.getMessage()
            ));
        }
    }
}
