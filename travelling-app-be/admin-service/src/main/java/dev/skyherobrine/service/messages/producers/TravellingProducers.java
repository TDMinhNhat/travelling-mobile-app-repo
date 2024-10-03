package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;

public class TravellingProducers {

    @Bean
    public NewTopic insertTravelling() {
        return TopicBuilder.name("insert-travelling").build();
    }
}
