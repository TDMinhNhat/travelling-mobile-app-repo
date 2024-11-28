package dev.skyherobrine.service.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter @NoArgsConstructor
public class Response {
    private int code;
    private String message;
    private Object data;
}
