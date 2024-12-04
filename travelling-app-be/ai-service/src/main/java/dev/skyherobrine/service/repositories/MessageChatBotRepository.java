package dev.skyherobrine.service.repositories;

import dev.skyherobrine.service.models.MessageChatBot;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface MessageChatBotRepository extends MongoRepository<MessageChatBot, LocalDateTime> {
}
