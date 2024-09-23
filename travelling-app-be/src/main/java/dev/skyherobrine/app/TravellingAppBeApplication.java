package dev.skyherobrine.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class TravellingAppBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravellingAppBeApplication.class, args);
    }

}
