package dev.skyherobrine.service.dtos;

import dev.skyherobrine.service.models.mongodb.TravellingReview;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor @AllArgsConstructor
public class TravellingReviewDTO {
    private String travellingId;
    private String userId;
    private Integer star;
    private String comment;

    public TravellingReview toObject() {
        return new TravellingReview(LocalDateTime.now(), travellingId, userId, star, comment);
    }
}
