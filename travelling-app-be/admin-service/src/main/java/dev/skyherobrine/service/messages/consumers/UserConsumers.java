package dev.skyherobrine.service.messages.consumers;

import dev.skyherobrine.service.models.mariadb.User;
import dev.skyherobrine.service.repositories.mariadb.UserRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class UserConsumers {

    @Autowired
    private UserRepository ur;

    @KafkaListener(id = "admin-insert-user", topics = "insert-user")
    public void insertUser(String data) {
        User target = (User) ObjectParser.jsonToObject(data, User.class);
        ur.save(target);
    }

    @KafkaListener(id = "admin-update-avatar-user", topics = "update-avatar-user")
    public void updateAvatarUser(String data) {
        String getAvatarUser = (String) ObjectParser.jsonToObject(data, String.class);
        String getUserId = getAvatarUser.split("@USERID@")[1];
        String getAvatarURL = getAvatarUser.split("@USERID@")[0];

        User target = ur.findById(getUserId).orElse(null);
        if (target != null) {
            target.setAvatar(getAvatarURL);
            ur.save(target);
        }
    }
}
