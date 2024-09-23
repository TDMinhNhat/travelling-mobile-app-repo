package dev.skyherobrine.service.repositories;

import dev.skyherobrine.service.models.FavoriteTravel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteTravelRepository extends JpaRepository<FavoriteTravel, FavoriteTravel.FavoriteTravelID> {
    List<FavoriteTravel> findById_UserId(String userId);
}
