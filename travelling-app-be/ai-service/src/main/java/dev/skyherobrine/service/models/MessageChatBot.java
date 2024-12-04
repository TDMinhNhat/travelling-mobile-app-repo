package dev.skyherobrine.service.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "message_chat_bot")
@Getter @Setter
@NoArgsConstructor
public class MessageChatBot {
    @Id @NonNull
    @JsonFormat(pattern = "yyyy-MM-dd-HH-mm-ss")
    private LocalDateTime dateCreated;
    @JsonProperty("userId")
    @NonNull
    private Long userId;
    @JsonProperty("request")
    @NonNull
    private String request;
    @JsonProperty("response")
    @NonNull
    private String response;

    public MessageChatBot(@NonNull LocalDateTime dateCreated, @NonNull Long userId, @NonNull String request, @NonNull String response) {
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.request = request;
        this.response = response;
    }
}
