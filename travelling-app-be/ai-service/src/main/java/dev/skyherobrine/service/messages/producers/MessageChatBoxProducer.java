package dev.skyherobrine.service.messages.producers;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.context.annotation.Bean;

public class MessageChatBoxProducer {

    @Bean
    public NewTopic insertMessageChatBox() {
        return TopicBuilder.name("insert-chat-bot").build();
    }
}
