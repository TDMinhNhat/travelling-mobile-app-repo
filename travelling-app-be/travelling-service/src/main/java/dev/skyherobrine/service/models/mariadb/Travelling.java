package dev.skyherobrine.service.models.mariadb;

import com.fasterxml.jackson.annotation.JsonFormat;
import dev.skyherobrine.service.enums.TravellingType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity @Table(name = "travelling")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class Travelling {
    @Id @Column(name = "travel_id", length = 15, nullable = false) @NonNull
    private String id;
    @Column(name = "travel_name", length = 100, nullable = false) @NonNull
    private String name;
    @Enumerated(EnumType.STRING) @Column(name = "travel_type", nullable = false) @NonNull
    private TravellingType type;
    @Column(name = "guests", nullable = false) @NonNull
    private Integer guest;
    @Column(name = "bedrooms", nullable = false) @NonNull
    private Integer bedroom;
    @Column(name = "beds", nullable = false) @NonNull
    private Integer bed;
    @Column(name = "bathrooms", nullable = false) @NonNull
    private Integer bathroom;
    @Column(name = "price_per_night", nullable = false) @NonNull
    private Double pricePerNight;
    @Column(length = 100, nullable = false) @NonNull
    private String address;
    @Column(nullable = false)
    private boolean status;
    @Column(name = "date_created", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateCreated;
    @Column(name = "date_modified", nullable = false)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateModified;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = TravellingService.class)
    private List<TravellingService> services;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = TravellingFacility.class)
    private List<TravellingFacility> facilities;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = TravellingImage.class)
    private List<TravellingImage> images;

    @PrePersist
    public void onPersist() {
        dateCreated = dateModified = LocalDate.now();
        status = true;
    }

    @PreUpdate
    public void onUpdate() {
        dateModified = LocalDate.now();
    }
}
