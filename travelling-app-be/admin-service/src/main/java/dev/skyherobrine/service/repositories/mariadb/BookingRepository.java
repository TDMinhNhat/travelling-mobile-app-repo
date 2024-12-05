package dev.skyherobrine.service.repositories.mariadb;

import dev.skyherobrine.service.models.mariadb.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking,String> {
}
