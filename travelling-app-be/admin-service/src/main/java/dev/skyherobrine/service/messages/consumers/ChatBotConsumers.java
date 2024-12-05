package dev.skyherobrine.service.messages.consumers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.skyherobrine.service.models.mongodb.MessageChatBot;
import dev.skyherobrine.service.repositories.mongodb.MessageChatBotRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.time.LocalDateTime;

@Component
public class ChatBotConsumers {

    @Autowired
    private MessageChatBotRepository repository;
    @Autowired
    private ObjectMapper mapper;

    @KafkaListener(id = "admin-insert-chat-bot", topics = "insert-chat-bot")
    public void insertMessageChatBot(String message) throws Exception {
        Object result = mapper.readValue(message, new TypeReference<Object>() {
            @Override
            public Type getType() {
                return super.getType();
            }
        });
        System.out.println(result.toString());
        JsonNode node = mapper.readTree(result.toString());
        String[] getDateCreated = node.get("dateCreated").asText().split("-");
        Long getUserId = node.get("userId").asLong();
        String getRequest = node.get("request").asText();
        String getResponse = node.get("response").asText();

        LocalDateTime dateCreated = LocalDateTime.of(
                Integer.parseInt(getDateCreated[0]),
                Integer.parseInt(getDateCreated[1]),
                Integer.parseInt(getDateCreated[2]),
                Integer.parseInt(getDateCreated[3]),
                Integer.parseInt(getDateCreated[4]),
                Integer.parseInt(getDateCreated[5])
        );
        MessageChatBot chatBot = new MessageChatBot(dateCreated, getUserId, getRequest, getResponse);
        repository.save(chatBot);
    }
}
