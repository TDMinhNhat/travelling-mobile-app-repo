package dev.skyherobrine.service;

import dev.skyherobrine.service.dtos.TravellingReviewDTO;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.models.mariadb.Travelling;
import dev.skyherobrine.service.models.mongodb.TravellingReview;
import dev.skyherobrine.service.repositories.mariadb.TravellingRepository;
import dev.skyherobrine.service.repositories.mongodb.TravellingReviewRepository;
import net.datafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@SpringBootApplication
@EnableDiscoveryClient
public class TravellingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravellingServiceApplication.class, args);
    }

}
