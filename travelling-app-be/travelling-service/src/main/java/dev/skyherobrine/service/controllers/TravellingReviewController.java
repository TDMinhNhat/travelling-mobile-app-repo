package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.dtos.TravellingReviewDTO;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mongodb.TravellingReview;
import dev.skyherobrine.service.repositories.mongodb.TravellingReviewRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("travelling/api/v1/review")
@Slf4j
public class TravellingReviewController {

    @Autowired
    private TravellingReviewRepository trr;
    @Autowired
    private KafkaTemplate template;

    @PostMapping
    public ResponseEntity<Response> addReview(@RequestBody TravellingReviewDTO dto) {
        log.info("Add travelling review");
        try {
            TravellingReview tr = dto.toObject();
            TravellingReview output = trr.save(tr);
            log.info("Add review successfully");
            template.send("travelling-review", ObjectParser.objectToJson(tr));
            log.info("Send review to Kafka successfully");
            return ResponseEntity.ok(new Response(
                    200,
                    "Add review successfully",
                    output
            ));
        } catch (Exception e) {
            log.error("Something wrong when add review");
            return ResponseEntity.ok(new Response(
                    500,
                    "Something wrong when add review",
                    e.getCause()
            ));
        }
    }

    @GetMapping("/{travellingId}")
    public ResponseEntity<Response> getAllReviewsByTravellingId(@PathVariable("travellingId") String travellingId) {
        log.info("Calling get all reviews by travelling id");
        try {
            List<TravellingReview> trs = trr.findByTravellingId(travellingId);
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Get all reviews by travelling id successfully",
                    trs
            ));
        } catch (Exception e) {
            log.error("Something wrong when get all reviews by travelling id");
            log.error("Error: {}", String.valueOf(e));
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when get all reviews by travelling id",
                    e.getCause()
            ));
        }
    }
}
