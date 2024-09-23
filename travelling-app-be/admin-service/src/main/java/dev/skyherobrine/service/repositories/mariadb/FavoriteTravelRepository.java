package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.FavoriteTravel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteTravelRepository extends JpaRepository<FavoriteTravel, FavoriteTravel.FavoriteTravelID> {
}
