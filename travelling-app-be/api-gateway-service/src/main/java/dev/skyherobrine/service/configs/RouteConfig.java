package dev.skyherobrine.service.configs;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RouteConfig {

    @Bean
    public RouteLocator configRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("admin-service", r -> r.path("/admin/**").uri("lb://admin-service"))
                .route("authenticate-service", r -> r.path("/authenticate/**").uri("lb://authenticate-service"))
                .route("travelling-service", r -> r.path("/travelling/**").uri("lb://travelling-service"))
                .route("favorite-service", r -> r.path("/favorite/**").uri("lb://favorite-service"))
                .route("booking-service", r -> r.path("/booking/**").uri("lb://booking-service"))
                .route("ai-service", r -> r.path("/chat-ai/**").uri("lb://ai-service"))
                .build();
    }
}
