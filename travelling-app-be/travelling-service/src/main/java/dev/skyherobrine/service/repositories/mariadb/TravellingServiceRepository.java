package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.TravellingService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingServiceRepository extends JpaRepository<TravellingService, TravellingService.TravellingServiceID> {
}
