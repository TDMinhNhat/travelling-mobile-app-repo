package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;

public class BookingProducers {

    @Bean
    public NewTopic insertBooking() {
        return TopicBuilder.name("insert-booking").build();
    }
}
