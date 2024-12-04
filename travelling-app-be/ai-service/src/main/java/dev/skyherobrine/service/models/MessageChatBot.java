package dev.skyherobrine.service.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class MessageChatBot {
    @Id
    private LocalDateTime dateCreated;
    @NonNull
    private Long userId;
    @NonNull
    private String request;
    @NonNull
    private String response;
}
