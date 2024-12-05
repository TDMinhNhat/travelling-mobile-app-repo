package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;

public class FavoriteProducers {

    @Bean
    public NewTopic insertFavorite() {
        return TopicBuilder.name("insert-favorite").build();
    }

    @Bean
    public NewTopic deleteFavorite() {
        return TopicBuilder.name("delete-favorite").build();
    }
}
