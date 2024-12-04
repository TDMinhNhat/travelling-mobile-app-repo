package dev.skyherobrine.service.messages.consumers;

import dev.skyherobrine.service.models.mongodb.MessageChatBot;
import dev.skyherobrine.service.repositories.mongodb.MessageChatBotRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class ChatBotConsumers {

    @Autowired
    private MessageChatBotRepository repository;

    @KafkaListener(id = "admin-insert-chat-bot", topics = "insert-chat-bot")
    public void insertMessageChatBot(String message) {
        MessageChatBot target = (MessageChatBot) ObjectParser.jsonToObject(message, MessageChatBot.class);
        repository.save(target);
    }
}
