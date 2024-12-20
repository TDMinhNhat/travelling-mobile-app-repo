package dev.skyherobrine.service.models.mariadb;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "services")
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class Service {
    @Id @Column(name = "service_id", nullable = false) @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "service_name", length = 150, nullable = false) @NonNull
    private String name;
    @Column(name = "service_type", length = 100, nullable = false) @NonNull
    private String type;
    @Column(name = "image_url", length = 200)
    private String imageURL;
}
