package ro.proiectbackendapp.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.proiectbackendapp.entities.Player;
import ro.proiectbackendapp.entities.Team;
import ro.proiectbackendapp.repositories.PlayerRepository;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class PlayerService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PlayerService.class);
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Autowired
    private TeamService teamService;


    public List<Player> findPlayers() {
        return playerRepository.findAll();
    }

    public Player insertPlayer(Player player) {
        Player newPlayer = new Player();
        newPlayer.setId(player.getId());
        newPlayer.setName(player.getName());
        newPlayer.setWeight(player.getWeight());
        newPlayer.setAge(player.getAge());
        newPlayer.getTeams()
                .addAll(player
                        .getTeams()
                        .stream()
                        .map(p -> {
                            Team pp = teamService.findTeamById(p.getId());
                            pp.getPlayers().add(newPlayer);
                            return pp;
                        }).collect(Collectors.toList()));

        return playerRepository.save(newPlayer);
    }
}
