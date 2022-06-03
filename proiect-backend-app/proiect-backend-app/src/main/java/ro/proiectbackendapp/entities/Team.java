package ro.proiectbackendapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name= "teams")
public class Team {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;


    @Column(name = "name", nullable = false)
    private String name;


    @Column(name = "country", nullable = false)
    private String country;


    @Column(name = "players_age_average", nullable = false)
    private float players_age_average;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "team_player",
            joinColumns = @JoinColumn(name = "team_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id")
    )
    @JsonIgnore
    private Collection<Player> players = new ArrayList<>();


    public Team() {

    }


    public Team(Integer id, String name, String country, float players_age_average) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.players_age_average = players_age_average;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public float getPlayers_age_average() {
        return players_age_average;
    }

    public void setPlayers_age_average(float players_age_average) {
        this.players_age_average = players_age_average;
    }

    public Collection<Player> getPlayers() {
        return players;
    }

    public void setPlayers(Collection<Player> players) {
        this.players = players;
    }
}
