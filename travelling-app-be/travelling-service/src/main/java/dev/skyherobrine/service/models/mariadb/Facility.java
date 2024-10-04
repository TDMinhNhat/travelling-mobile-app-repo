package dev.skyherobrine.service.models.mariadb;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "facilities")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class Facility {
    @Id @Column(name = "faculity_id", nullable = false) @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "faculty_name", length = 150, nullable = false) @NonNull
    private String name;
    @Column(name = "image_id", length = 200, nullable = false) @NonNull
    private String imageId;
}
