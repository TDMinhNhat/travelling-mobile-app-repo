package dev.skyherobrine.service.models.mongodb;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "travelling_review")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class TravellingReview {
    @Id
    private ObjectId id;
    private LocalDateTime dateCreated;
    private String travellingId;
    private String userId;
    private Integer star;
    private String comment;
}
