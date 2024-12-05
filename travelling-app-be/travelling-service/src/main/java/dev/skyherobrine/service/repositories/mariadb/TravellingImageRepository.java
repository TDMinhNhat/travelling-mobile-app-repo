package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.TravellingImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravellingImageRepository extends JpaRepository<TravellingImage,String> {
    List<TravellingImage> findByTravelling(Travelling travelling);
}
