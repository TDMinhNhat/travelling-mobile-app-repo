package dev.skyherobrine.service.models.mariadb;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity @Table(name = "travelling_service")
@Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
public class TravellingService {

    @EmbeddedId @NonNull
    private TravellingServiceID id;
    @Column(nullable = false) @NonNull
    private Integer quantity;
    @Column(name = "date_created", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateCreated;
    @Column(name = "date_modified", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateModified;

    @Embeddable @Getter @Setter @NoArgsConstructor @RequiredArgsConstructor
    public static class TravellingServiceID implements Serializable {
        @ManyToOne @JoinColumn(name = "service_id", nullable = false) @NonNull
        private Service service;
        @ManyToOne @JoinColumn(name = "travel_id", nullable = false) @NonNull
        private Travelling travelling;
    }
}
