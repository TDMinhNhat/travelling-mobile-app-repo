package dev.skyherobrine.service.controllers.impl;

import dev.skyherobrine.service.controllers.IManagement;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mariadb.Facility;
import dev.skyherobrine.service.repositories.mariadb.FacilityRepository;
import dev.skyherobrine.service.services.ApiNotSupported;
import dev.skyherobrine.service.services.impl.FacilityTravellingImageFileService;
import dev.skyherobrine.service.utils.ObjectParser;
import jakarta.ws.rs.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;

@RestController
@RequestMapping("admin/api/v1/facility")
@Slf4j
public class FacilityManagementController implements IManagement<String, Long> {

    @Autowired
    private KafkaTemplate<String,Object> template;
    @Autowired
    private FacilityRepository fr;
    @Autowired
    private FacilityTravellingImageFileService ftifs;

    @PostMapping("{name}")
    @Override
    public ResponseEntity<Response> add(@PathVariable("name") String s) {
        try {
            log.info("Call the method add facility");
            Facility facility = new Facility(s);
            fr.save(facility);
            log.info("Add facility successfully");
            template.send("insert-facility", ObjectParser.objectToJson(facility));
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Add facility successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Error when add facility");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when add the facility",
                    e.getCause()
            ));
        }
    }

    @PostMapping("image")
    public ResponseEntity<Response> addImage(@RequestParam("id") String facId, @RequestParam("file") MultipartFile file) {
        log.info("Calling for add service's image");
        try {
            Facility target = fr.findById(Long.parseLong(facId)).orElseThrow(() -> new NotFoundException("The service id = " + facId + " was not found!"));
            String getFileNameId = ftifs.uploadFile(String.valueOf(target.getId()), file);
            URL imageURL = ftifs.getURLFile(getFileNameId);
            log.info("Find the service");
            target.setImageURL(imageURL.toExternalForm());
            fr.save(target);
            template.send("insert-facility-image", ObjectParser.objectToJson(target));
            log.info("Add service's image successfully");
            return ResponseEntity.ok(new Response(
                    org.springframework.http.HttpStatus.OK.value(),
                    "Add facility's image successfully",
                    true
            ));
        } catch (Exception e) {
            log.error("Something wrong when add facility's image");
            log.error("Error: " + e);
            return ResponseEntity.ok(new Response(
                    org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when add facility's image",
                    e.getCause()
            ));
        }
    }

    @PutMapping
    @Override
    public ResponseEntity<Response> update(@PathVariable("name") String s) {
        return new ApiNotSupported().getMessage();
    }

    @DeleteMapping("{id}")
    @Override
    public ResponseEntity<Response> delete(@PathVariable("id") Long id) {
        try {
            log.info("Call the method delete facility");
            Facility facility = fr.findById(id).orElseThrow(() -> new NotFoundException("Not found the entity with the id = " + id));
            log.info("Find the facility successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Find facility successfully",
                    facility
            ));
        } catch (NotFoundException e) {
            log.warn("The facility id = " + id + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_NOT_FOUND,
                    "The facility id = " + id + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Error when delete facility");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when delete the facility",
                    e.getCause()
            ));
        }
    }

    @GetMapping
    @Override
    public ResponseEntity<Response> getAll() {
        log.info("Call the method get all facilities");
        return ResponseEntity.ok(new Response(
                HttpStatus.SC_OK,
                "Get all facilities",
                fr.findAll()
        ));
    }

    @GetMapping("{id}")
    @Override
    public ResponseEntity<Response> getById(@PathVariable("id") Long id) {
        try {
            log.info("Call the method get facility by id = " + id);
            Facility target = fr.findById(id).orElseThrow(() -> new NotFoundException("Not found the entity with the id = " + id));
            log.info("Find the facility successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Get facility by id = " + id,
                    target
            ));
        } catch (NotFoundException e) {
            log.error("The facility id = " + id + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_NOT_FOUND,
                    "The facility id = " + id + " was not found!",
                    false
            ));
        }
    }
}
