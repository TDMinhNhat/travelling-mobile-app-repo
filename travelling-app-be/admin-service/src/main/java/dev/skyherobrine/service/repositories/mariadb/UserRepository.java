package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
}
