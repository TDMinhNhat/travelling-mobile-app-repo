package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.dtos.TravellingReviewDTO;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mongodb.TravellingReview;
import dev.skyherobrine.service.repositories.mongodb.TravellingReviewRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("travelling/api/v1/review")
@Slf4j
public class TravellingCommentController {

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
}
