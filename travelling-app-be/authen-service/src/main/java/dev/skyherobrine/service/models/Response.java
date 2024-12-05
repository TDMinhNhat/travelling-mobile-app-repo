package dev.skyherobrine.service.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class Response {
    public int code;
    private String message;
    private Object data;
}
