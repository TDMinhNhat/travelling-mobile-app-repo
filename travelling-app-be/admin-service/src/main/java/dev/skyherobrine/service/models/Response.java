package dev.skyherobrine.service.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter @Setter
@ToString
public class Response {
    private int code;
    private String message;
    private Object data;
}
