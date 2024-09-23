package dev.skyherobrine.service.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity @Table(name = "favorite_travels")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class FavoriteTravel {
    @EmbeddedId @NonNull
    private FavoriteTravelID id;
    @Column(name = "date_created", nullable = false)
    private LocalDate dateCreated;

    @Embeddable
    @Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
    public static class FavoriteTravelID implements Serializable {
        @Column(name = "user_id", length = 15, nullable = false) @NonNull
        private String userId;
        @Column(name = "travel_id", length = 15, nullable = false) @NonNull
        private String travelId;
    }

    @PrePersist
    public void onPersist() {
        dateCreated = LocalDate.now();
    }
}
