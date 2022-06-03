package ro.proiectbackendapp.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name= "players")
public class Player {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;


    @Column(name = "name", nullable = false)
    private String name;


    @Column(name = "age", nullable = false)
    private Integer age;


    @Column(name = "weight", nullable = false)
    private float weight;


    @ManyToMany(mappedBy = "players", cascade = CascadeType.ALL)
    private Collection<Team> teams = new ArrayList<>();


    public Player() {

    }

    public Player(Integer id, String name, Integer age, float weight) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public Collection<Team> getTeams() {
        return teams;
    }

    public void setTeams(Collection<Team> teams) {
        this.teams = teams;
    }
}
