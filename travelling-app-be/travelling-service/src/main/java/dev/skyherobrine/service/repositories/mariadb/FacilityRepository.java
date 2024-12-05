package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository extends JpaRepository<Facility,Long> {
}
