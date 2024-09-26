package dev.skyherobrine.service.models.mariadb;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateCreated;

    @Embeddable
    @Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
    public static class FavoriteTravelID implements Serializable {
        @ManyToOne @JoinColumn(name = "user_id", nullable = false) @NonNull
        private User userId;
        @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
        private Travelling travelId;
    }

    @PrePersist
    public void onPersist() {
        dateCreated = LocalDate.now();
    }
}
