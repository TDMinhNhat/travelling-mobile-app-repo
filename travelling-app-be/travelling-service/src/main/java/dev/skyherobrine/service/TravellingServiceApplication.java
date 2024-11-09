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
public class TravellingServiceApplication implements CommandLineRunner {

    @Autowired
    private TravellingRepository tr;
    @Autowired
    private TravellingReviewRepository trr;
    private RestTemplate rt = new RestTemplate();

    public static void main(String[] args) {
        SpringApplication.run(TravellingServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker();
        List<Travelling> travellings = tr.findAll();

        for(Travelling travelling : travellings) {
            int countOfComments = ThreadLocalRandom.current().nextInt(0, 10);

            for(int i = 0; i < countOfComments; i++) {
                Thread.currentThread().sleep(1000);
                TravellingReviewDTO tr = new TravellingReviewDTO(
                        travelling.getId() + "",
                        ThreadLocalRandom.current().nextInt(1, 101) + "",
                        ThreadLocalRandom.current().nextInt(0, 5) + 1,
                        faker.lorem().sentence()
                );

                rt.postForObject(URI.create("http://localhost:10000/travelling/api/v1/review"), tr, Response.class);
            }
        }
    }
}
