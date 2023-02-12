import React from "react";
import './css/Projects.css';

function Projects () {
  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="project-list">
        <h2 className="project-list-header">In this section, you will build:</h2>
        <ul>
          <li className="project-item">
            <h3 className="project-title">Pong Game</h3>
            <p className="project-description">Build the classic arcade game Pong. You will learn how to create user interfaces, player mechanics, and game objectives that are both fun and challenging.</p>
          </li>
          <li className="project-item">
            <h3 className="project-title">Space Invaders</h3>
            <p className="project-description">Build a retro-style space shooter game inspired by the classic arcade game Space Invaders. You will learn how to create animations, use sprite collisions, and add sounds to your game.</p>
          </li>
          <li className="project-item">
            <h3 className="project-title">Maze Runner</h3>
            <p className="project-description">Build a game where the player must navigate through a maze to reach the end goal. You will learn how to create obstacles, use variables to keep track of the player's progress, and add a scoring system.</p>
          </li>
          <li className="project-item">
            <h3 className="project-title">Platformer</h3>
            <p className="project-description">Build a classic 2D platformer game. You will learn how to create character animations, use sprite collisions to detect jumps and falls, and add power-ups to your game.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
