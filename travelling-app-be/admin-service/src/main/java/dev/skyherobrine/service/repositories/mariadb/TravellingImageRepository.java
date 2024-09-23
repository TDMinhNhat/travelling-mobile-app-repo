package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.TravellingImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingImageRepository extends JpaRepository<TravellingImage,String> {
}
