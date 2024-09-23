package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.Response;
import org.springframework.http.ResponseEntity;

public interface IManagement<S,P>{
    ResponseEntity<Response> add(S s);
    ResponseEntity<Response> update(S s);
    ResponseEntity<Response> delete(P p);
    ResponseEntity<Response> getAll();
    ResponseEntity<Response> getById(P p);
}
