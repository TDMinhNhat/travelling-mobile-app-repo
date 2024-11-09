package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.stereotype.Service;

@Service
public class TravellingReviewProducer {

    @Bean
    public NewTopic travellingReviewTopic() {
        return TopicBuilder.name("travelling-review").build();
    }
}
