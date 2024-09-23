package dev.skyherobrine.service.repositories;

import dev.skyherobrine.service.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByUsernameAndPassword(String username, String password);

    Optional<User> findByEmail(String email);

    Optional<User> findByPhone(String phone);
}

