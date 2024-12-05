package dev.skyherobrine.service.feigns;

import dev.skyherobrine.service.models.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "admin-service", path = "admin/api/v1")
public interface UserClient {

    @GetMapping("/user")
    ResponseEntity<Response> getAll();

    @GetMapping("/user/{id}")
    ResponseEntity<Response> getUserById(@PathVariable("id") Long id);
}
