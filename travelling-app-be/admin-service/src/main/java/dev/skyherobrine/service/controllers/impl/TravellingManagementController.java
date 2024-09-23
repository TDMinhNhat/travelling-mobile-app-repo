package dev.skyherobrine.service.controllers.impl;

import dev.skyherobrine.service.controllers.IManagement;
import dev.skyherobrine.service.dtos.TravellingDTO;
import dev.skyherobrine.service.exceptions.DuplicatePrimaryKeyValue;
import dev.skyherobrine.service.exceptions.EntityNotFound;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.repositories.mariadb.*;
import dev.skyherobrine.service.repositories.mongodb.TravellingDescribeRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingPolicyRepository;
import dev.skyherobrine.service.services.TravellingServices;
import jakarta.ws.rs.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin/api/v1/travelling")
@Slf4j
public class TravellingManagementController implements IManagement<TravellingDTO, String> {

    @Autowired
    private TravellingRepository tr;
    @Autowired
    private TravellingFacilityRepository tfr;
    @Autowired
    private TravellingServiceRepository tsr;
    @Autowired
    private TravellingDescribeRepository tdr;
    @Autowired
    private TravellingPolicyRepository tpr;
    @Autowired
    private TravellingServices services;

    @PostMapping
    @Override
    public ResponseEntity<Response> add(@RequestBody TravellingDTO travellingDTO) {
        try {
            log.info("Call the method add travelling");
            Travelling target = tr.findById(travellingDTO.getTravelId()).orElse(null);
            if (target != null) throw new DuplicatePrimaryKeyValue("Duplicate key value");
            target = tr.save(travellingDTO.toTravellingObject());
            log.info("Add travelling successfully");
            tdr.save(travellingDTO.toTravellingDescribeObject());
            log.info("Add travelling describe successfully");
            tpr.save(travellingDTO.toTravellingPolicyObject());
            log.info("Add travelling policies successfully");
            tsr.saveAll(services.getAllTravellingService(travellingDTO.getServices(), target));
            log.info("Add travelling services successfully");
            tfr.saveAll(services.getAllTravellingFacility(travellingDTO.getFacilities(), target));
            log.info("Add travelling facilities successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Add travelling successfully",
                    true
            ));
        } catch (DuplicatePrimaryKeyValue e) {
            log.warn("Duplicate primary key value travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_BAD_REQUEST,
                    "The travel id has already existed",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when add travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Somethign wrong when add travelling",
                    e.getCause()
            ));
        }
    }

    @PutMapping
    @Override
    public ResponseEntity<Response> update(@RequestBody TravellingDTO travellingDTO) {
        try {
            log.info("Call the method add travelling");
            Travelling target = tr.findById(travellingDTO.getTravelId()).orElse(null);
            if (target != null) throw new DuplicatePrimaryKeyValue("Duplicate key value");
            target = tr.save(travellingDTO.toTravellingObject());
            log.info("Update travelling successfully");
            tdr.save(travellingDTO.toTravellingDescribeObject());
            log.info("Update travelling describe successfully");
            tpr.save(travellingDTO.toTravellingPolicyObject());
            log.info("Update travelling policies successfully");
            tsr.saveAll(services.getAllTravellingService(travellingDTO.getServices(), target));
            log.info("Update travelling services successfully");
            tfr.saveAll(services.getAllTravellingFacility(travellingDTO.getFacilities(), target));
            log.info("Update travelling facilities successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Add travelling successfully",
                    true
            ));
        } catch (DuplicatePrimaryKeyValue e) {
            log.warn("Duplicate primary key value travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_BAD_REQUEST,
                    "The travel id has already existed",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when add travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Somethign wrong when add travelling",
                    e.getCause()
            ));
        }
    }

    @DeleteMapping("{id}")
    @Override
    public ResponseEntity<Response> delete(@PathVariable("id") String s) {
        try {
            log.info("Call the method delete travelling");
            Travelling target = tr.findById(s).orElseThrow(() -> new NotFoundException("The travelling id = " + s + " was not found!"));
            target.setStatus(false);
            tr.save(target);
            log.info("Delete travelling successfully");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Delete travelling successfully",
                    true
            ));
        } catch (NotFoundException e) {
            log.warn("The travelling id = " + s + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_BAD_REQUEST,
                    "The travelling id = " + s + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when delete travelling",
                    e.getCause()
            ));
        }
    }

    @GetMapping
    @Override
    public ResponseEntity<Response> getAll() {
        log.info("Call the method get all travelling");
        return ResponseEntity.ok(new Response(
                HttpStatus.SC_OK,
                "Get all travelling",
                tr.findAll()
        ));
    }

    @GetMapping("{id}")
    @Override
    public ResponseEntity<Response> getById(@PathVariable("id") String s) {
        try {
            log.info("Call the method delete travelling");
            Travelling target = tr.findById(s).orElseThrow(() -> new NotFoundException("The travelling id = " + s + " was not found!"));
            log.info("Found the travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Delete travelling successfully",
                    target
            ));
        } catch (NotFoundException e) {
            log.warn("The travelling id = " + s + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_BAD_REQUEST,
                    "The travelling id = " + s + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when delete travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when delete travelling",
                    e.getCause()
            ));
        }
    }

    @GetMapping("service/{id}")
    public ResponseEntity<Response> getAllServicesByTravelling(@PathVariable("id") String travelId) {
        try {
            log.info("Call the method get all services by travelling");
            Travelling target = tr.findById(travelId).orElseThrow(() -> new EntityNotFound("The travel id = " + travelId + " was not found!"));

            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Get all services by travelling",
                    tsr.findById_Travelling_Id(travelId)
            ));
        } catch (EntityNotFound e) {
            log.warn("The travel id = " + travelId + " was not found!");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_BAD_REQUEST,
                    "The travel id = " + travelId + " was not found!",
                    false
            ));
        } catch (Exception e) {
            log.error("Something wrong when get all services by travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when get all services by travelling",
                    e.getCause()
            ));
        }
    }

    @GetMapping("facility/{id}")
    public ResponseEntity<Response> getAllFacilitiesByTravelling(@PathVariable("id") String travelId) {
        try {
            log.info("Call the method get all facilities by travelling");
            tr.findById(travelId).orElseThrow(() -> new EntityNotFound("The travel id = " + travelId + " was not found!"));
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_OK,
                    "Get all facilities by travelling",
                    tfr.findById_Travelling_Id(travelId)
            ));
        } catch (Exception e) {
            log.error("Something wrong when get all facilities by travelling");
            return ResponseEntity.ok(new Response(
                    HttpStatus.SC_SERVER_ERROR,
                    "Something wrong when get all facilities by travelling",
                    e.getCause()
            ));
        }
    }
}
