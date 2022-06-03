package ro.proiectbackendapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ro.proiectbackendapp.entities.Team;
import ro.proiectbackendapp.services.TeamService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value= "/teams")
public class TeamController {

    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService){
        this.teamService = teamService;
    }

    @GetMapping()
    public ResponseEntity<List<Team>> getTeams() {
        return new ResponseEntity<>(teamService.findTeams(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> insertTeam(@Validated @RequestBody Team team) {
        return new ResponseEntity<>(teamService.insertTeam(team), HttpStatus.CREATED);
    }
}
