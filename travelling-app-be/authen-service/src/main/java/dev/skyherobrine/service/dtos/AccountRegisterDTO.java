package dev.skyherobrine.service.dtos;

import dev.skyherobrine.service.enums.LoginProvider;
import dev.skyherobrine.service.enums.UserRole;
import dev.skyherobrine.service.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
@AllArgsConstructor
public class AccountRegisterDTO {

    private String fullName;
    private Boolean sex;
    private LocalDate birthDate;
    private String phone;
    private String email;
    private String username;
    private String password;

    public User toUserObject() {
        return new User(
                fullName,
                sex,
                birthDate,
                username,
                password,
                email,
                phone,
                LoginProvider.APPLICATION,
                UserRole.USER
        );
    }
}
