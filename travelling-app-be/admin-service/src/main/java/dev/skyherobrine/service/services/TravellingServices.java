package dev.skyherobrine.service.services;

import dev.skyherobrine.service.exceptions.EntityNotFound;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mariadb.TravellingFacility;
import dev.skyherobrine.service.models.mariadb.TravellingService;
import dev.skyherobrine.service.repositories.mariadb.FacilityRepository;
import dev.skyherobrine.service.repositories.mariadb.ServiceRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TravellingServices {

    private ServiceRepository sr;
    private FacilityRepository fr;

    public TravellingServices(ServiceRepository sr, FacilityRepository fr) {
        this.sr = sr;
        this.fr = fr;
    }

    public List<TravellingService> getAllTravellingService(Map<Long,Integer> services, Travelling travelling) {
        List<TravellingService> results = new ArrayList<>();
        services.forEach((serviceId, quantity) -> {
            results.add(new TravellingService(
                    new TravellingService.TravellingServiceID(
                            sr.findById(serviceId).orElseThrow(() -> new EntityNotFound("The service id = " + serviceId + " was not found!")),
                            travelling
                    ),
                    quantity
            ));
        });
        return results;
    }

    public List<TravellingFacility> getAllTravellingFacility(Map<Long,Integer> facilities, Travelling travelId) {
        List<TravellingFacility> results = new ArrayList<>();
        facilities.forEach((facilityId, quantity) -> {
            results.add(new TravellingFacility(
                    new TravellingFacility.TravellingFacilityID(
                            fr.findById(facilityId).orElseThrow(() -> new EntityNotFound("The facility id = " + facilityId + " was not found!")),
                            travelId
                    ),
                    quantity
            ));
        });
        return results;
    }
}
