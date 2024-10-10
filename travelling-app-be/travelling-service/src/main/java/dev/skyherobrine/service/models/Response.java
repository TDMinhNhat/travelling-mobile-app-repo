package dev.skyherobrine.service.models;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Response {
    private int code;
    private String message;
    private Object data;
}
