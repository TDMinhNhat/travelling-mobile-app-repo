package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;

public class ServiceProducers {

    @Bean
    public NewTopic insertService() {
        return TopicBuilder.name("insert-service").build();
    }

    @Bean
    public NewTopic insertServiceImage() {
        return TopicBuilder.name("insert-service-image").build();
    }
}
