package dev.skyherobrine.service.exceptions;

public class DuplicatePrimaryKeyValue extends RuntimeException {
    public DuplicatePrimaryKeyValue(String message) {
        super(message);
    }
}
