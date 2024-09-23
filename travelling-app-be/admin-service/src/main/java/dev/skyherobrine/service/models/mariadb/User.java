package dev.skyherobrine.service.models.mariadb;

import dev.skyherobrine.service.enums.LoginProvider;
import dev.skyherobrine.service.enums.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity @Table(name = "users")
@NoArgsConstructor @RequiredArgsConstructor
@Getter @Setter
public class User {
    @Id @Column(name = "user_id", nullable = false, length = 15) @NonNull
    private String userId;
    @Column(name = "full_name", length = 200, nullable = false) @NonNull
    private String fullName;
    @Column(nullable = false) @NonNull
    private Boolean sex;
    @Column(nullable = false) @NonNull
    private LocalDate birthDate;
    @Column(unique = true, nullable = true) @NonNull
    private String username;
    @Column(nullable = false) @NonNull
    private String password;
    @Column(length = 150, unique = true, nullable = false) @NonNull
    private String email;
    @Column(length = 20, unique = true, nullable = false) @NonNull
    private String phone;
    @Column(length = 400)
    private String avatar;
    @Column(length = 300)
    private String address;
    @Enumerated(EnumType.STRING) @Column(nullable = false) @NonNull
    private LoginProvider provider;
    @Enumerated(EnumType.STRING) @Column(nullable = false) @NonNull
    private UserRole role;
    @Column(nullable = false)
    private boolean status;
    @Column(name = "date_created", nullable = false)
    private LocalDate dateCreated;
    @Column(name = "date_modified", nullable = false)
    private LocalDate dateModified;

    @PrePersist
    public void onCreate() {
        dateCreated = dateModified = LocalDate.now();
    }

    @PreUpdate
    public void onUpdate() {
        dateModified = LocalDate.now();
    }
}
