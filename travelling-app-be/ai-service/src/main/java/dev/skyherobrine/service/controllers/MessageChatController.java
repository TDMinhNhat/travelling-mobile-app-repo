package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.MessageChatBot;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.MessageChatBotRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.mistralai.MistralAiChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/chat-ai/api/v1/message")
@Slf4j
public class MessageChatController {

    @Autowired
    private MistralAiChatModel model;
    @Autowired
    private MessageChatBotRepository repository;
    @Autowired
    private KafkaTemplate template;

    @GetMapping("/send")
    public ResponseEntity<Response> generate(@RequestBody String message, @RequestParam("userId") String userId) {
        try {
            String response = this.model.call(message);
            MessageChatBot chatBot = new MessageChatBot(LocalDateTime.now(), Long.parseLong(userId), message, response);
            MessageChatBot target = repository.save(chatBot);
            template.send("insert-chat-bot", ObjectParser.objectToJson(target));
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Successfully generated response for message",
                    response
            ));
        } catch (Exception e) {
            log.error("Something wrong when generating response for message: {}", message);
            log.error("Error: " + e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Something wrong when generating response for message: " + e,
                    null
            ));
        }
    }
}
