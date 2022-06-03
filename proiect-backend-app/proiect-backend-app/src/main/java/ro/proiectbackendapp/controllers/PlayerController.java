package ro.proiectbackendapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ro.proiectbackendapp.entities.Player;
import ro.proiectbackendapp.services.PlayerService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value= "/players")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @GetMapping()
    public ResponseEntity<List<Player>> getPlayers() {
        return new ResponseEntity<>(playerService.findPlayers(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> insertPlayer(@Validated @RequestBody Player player) {
        return new ResponseEntity<>(playerService.insertPlayer(player), HttpStatus.CREATED);
    }
}
