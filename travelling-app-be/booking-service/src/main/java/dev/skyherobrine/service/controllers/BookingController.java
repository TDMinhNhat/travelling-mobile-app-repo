package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.exceptions.DuplicatePrimaryKeyValue;
import dev.skyherobrine.service.models.Booking;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.BookingRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("booking/api/v1/book")
@Slf4j
public class BookingController {
    @Autowired
    private BookingRepository br;
    @Autowired
    private KafkaTemplate template;

    @PostMapping
    public ResponseEntity<Response> bookTravel(@RequestBody Booking booking) {
        try {
            log.info("Calling the method booking travel");
            Booking target = br.findById(booking.getBookId()).orElse(null);
            if (target != null) throw new DuplicatePrimaryKeyValue("Duplicate booking value");
            target = br.save(booking);
            log.info("Booking successfully");
            template.send("insert-booking", ObjectParser.objectToJson(target));
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Booking successfully",
                    true
            ));
        } catch (DuplicatePrimaryKeyValue e) {
            log.warn("The booking id = " + booking.getBookId() + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.BAD_REQUEST.value(),
                    "Duplicate primary key value",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when booking the travel");
            log.error("Error: " + e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when booking travel",
                    e.getCause()
            ));
        }
    }
}
