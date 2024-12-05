package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.Response;
import org.springframework.http.ResponseEntity;

public interface IManagement<S,P>{
    ResponseEntity<Response> add(S s) throws Exception;
    ResponseEntity<Response> update(S s) throws Exception;
    ResponseEntity<Response> delete(P p) throws Exception;
    ResponseEntity<Response> getAll() throws Exception;
    ResponseEntity<Response> getById(P p) throws Exception;
}
