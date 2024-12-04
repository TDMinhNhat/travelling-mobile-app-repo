package dev.skyherobrine.service.repositories;

import dev.skyherobrine.service.models.MessageChatBot;
import lombok.NonNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MessageChatBotRepository extends MongoRepository<MessageChatBot, LocalDateTime> {

    List<MessageChatBot> findAllByUserIdOrderByDateCreated(@NonNull Long userId);
}
