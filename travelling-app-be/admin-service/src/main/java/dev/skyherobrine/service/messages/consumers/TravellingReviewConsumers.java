package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mongodb.TravellingReview;
import dev.skyherobrine.service.repositories.mongodb.TravellingReviewRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class TravellingReviewConsumers {

    @Autowired
    private TravellingReviewRepository trr;

    @KafkaListener(topics = "travelling-review", groupId = "admin-insert-travelling-review")
    public void addTravellingReview(String message) {
        log.info("Get message insert-travelling-review from Kafka");
        TravellingReview target = (TravellingReview) ObjectParser.jsonToObject(message, TravellingReview.class);
        trr.save(target);
    }
}
