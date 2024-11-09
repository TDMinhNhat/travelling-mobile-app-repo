package dev.skyherobrine.service.models.mongodb;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "dd-MM-yyyy:HH:mm:ss")
    private LocalDateTime dateCreated;
    private String travellingId;
    private String userId;
    private Integer star;
    private String comment;
}
