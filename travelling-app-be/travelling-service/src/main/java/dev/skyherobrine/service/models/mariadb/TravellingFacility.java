package dev.skyherobrine.service.models.mariadb;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity @Table(name = "travelling_facility")
@Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
public class TravellingFacility {

    @EmbeddedId @NonNull
    private TravellingFacilityID id;
    @Column(nullable = false) @NonNull
    private Integer quantity;
    @Column(name = "date_created", nullable = false)
    private LocalDate dateCreated;
    @Column(name = "date_modified", nullable = false)
    private LocalDate dateModified;

    @Embeddable
    @Getter @Setter
    @NoArgsConstructor @RequiredArgsConstructor
    public static class TravellingFacilityID implements Serializable {
        @ManyToOne @JoinColumn(name = "faculity_id", nullable = false) @NonNull
        private Facility facility;
        @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
        private Travelling travelling;
    }

    @PrePersist
    public void onPersist() {
        dateCreated = dateModified = LocalDate.now();
    }

    @PreUpdate
    public void onUpdate() {
        dateModified = LocalDate.now();
    }
}
