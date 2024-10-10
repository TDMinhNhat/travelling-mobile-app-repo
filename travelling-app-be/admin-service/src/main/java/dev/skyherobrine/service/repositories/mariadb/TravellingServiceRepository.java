package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.TravellingService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravellingServiceRepository extends JpaRepository<TravellingService, TravellingService.TravellingServiceID> {
    List<TravellingService> findById_Travelling_Id(String id);
}
