package dev.skyherobrine.service.services;

import dev.skyherobrine.service.models.Response;
import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ApiNotSupported {

    public ResponseEntity getMessage() {
        return ResponseEntity.ok(new Response(
                HttpStatus.SC_BAD_REQUEST,
                "This API is not supported in this time",
                false
        ));
    }
}
