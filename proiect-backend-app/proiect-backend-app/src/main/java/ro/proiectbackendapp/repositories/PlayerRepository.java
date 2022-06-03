package ro.proiectbackendapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.proiectbackendapp.entities.Player;

public interface PlayerRepository extends JpaRepository<Player,Integer> {
}
