package ro.proiectbackendapp.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.proiectbackendapp.entities.Team;
import ro.proiectbackendapp.repositories.TeamRepository;
import java.util.List;
import java.util.Optional;


@Service
public class TeamService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TeamService.class);
    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> findTeams() {
        return teamRepository.findAll();
    }

    public Team findTeamById(Integer id) {
        Optional<Team> opt = teamRepository.findById(id);
        return opt.get();
    }

    public Team insertTeam(Team team) {
        return teamRepository.save(team);
    }
}
