package dev.skyherobrine.service.feigns;

import dev.skyherobrine.service.models.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "travelling-service", path = "travelling/api/v1/travelling")
public interface TravellingFeign {

    @GetMapping("{id}")
    ResponseEntity<Response> getTravellingById(@PathVariable("id") String travelId);
}
