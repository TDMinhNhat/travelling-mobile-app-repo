package dev.skyherobrine.service.models.mariadb;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "travelling_image")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class TravellingImage {
    @Id @Column(name = "image_id", nullable = false) @NonNull
    private String imageId;
    @Column(name = "image_url", nullable = false) @NonNull
    private String imageUrl;
    @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
    private Travelling travelling;
    @Column(nullable = false)
    private boolean status;

    @PrePersist
    public void onPersist() {
        status = true;
    }
}
