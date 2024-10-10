package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.TravellingFacility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravellingFacilityRepository extends JpaRepository<TravellingFacility, TravellingFacility.TravellingFacilityID> {
}
