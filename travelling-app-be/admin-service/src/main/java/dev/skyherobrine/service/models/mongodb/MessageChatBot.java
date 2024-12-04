package dev.skyherobrine.service.models.mongodb;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "message_chat_bot")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class MessageChatBot {
    @Id @NonNull
    @JsonFormat(pattern = "yyyy-MM-dd-HH-mm-ss")
    private LocalDateTime dateCreated;
    @NonNull
    private Long userId;
    @NonNull
    private String request;
    @NonNull
    private String response;
}
