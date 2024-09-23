package dev.skyherobrine.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TravellingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravellingServiceApplication.class, args);
    }

}
