package dev.skyherobrine.service.controllers;

import dev.skyherobrine.service.models.MessageChatBot;
import dev.skyherobrine.service.models.Response;
import dev.skyherobrine.service.repositories.MessageChatBotRepository;
import dev.skyherobrine.service.utils.ObjectParser;
import jakarta.ws.rs.PathParam;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.mistralai.MistralAiChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/chat-ai/api/v1/message")
public class MessageChatController {

    private static final Logger log = LoggerFactory.getLogger(MessageChatController.class);
    private MistralAiChatModel model;
    private MessageChatBotRepository repository;
    private KafkaTemplate template;

    public MessageChatController(MistralAiChatModel model, MessageChatBotRepository repository, KafkaTemplate template) {
        this.model = model;
        this.repository = repository;
        this.template = template;
    }

    @GetMapping("/send")
    public ResponseEntity<Response> generate(@RequestParam String message, @RequestParam("userId") String userId) {
        try {
            log.info("Calling generate answer from request");
            String response = this.model.call(message);
            log.info("Generated response for message successfully");
            MessageChatBot chatBot = new MessageChatBot(LocalDateTime.now(), Long.parseLong(userId), message, response);
            repository.save(chatBot);
            log.info("Insert chat message to database successfully");
            String parserJson = ObjectParser.objectToJson(chatBot);
            template.send("insert-chat-bot", parserJson);
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Successfully generated response for message",
                    response
            ));
        } catch (Exception e) {
            log.error("Something wrong when generating response for message: {}", message);
            log.error("Error: " + e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when generating response for message: " + e,
                    null
            ));
        }
    }

    @GetMapping("/get")
    public ResponseEntity<Response> getListMessage(@PathParam("userId") String userId) {
        try {
            log.info("Calling get list message for user");
            return ResponseEntity.ok(new Response(
                    HttpStatus.OK.value(),
                    "Successfully get list message for user",
                    repository.findAllByUserIdOrderByDateCreated(Long.parseLong(userId))
            ));
        } catch (Exception e) {
            log.error("Something wrong when getting list message for user: {}", userId);
            log.error("Error: " + e);
            return ResponseEntity.ok(new Response(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Something wrong when getting list message for user: " + e,
                    null
            ));
        }
    }
}
