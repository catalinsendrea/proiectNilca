package ro.proiectbackendapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.proiectbackendapp.entities.Team;

public interface TeamRepository extends JpaRepository<Team,Integer> {
}
