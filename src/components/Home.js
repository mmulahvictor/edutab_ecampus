import React from "react";
import './css/Home.css';

function Home () {
    return (
        <div className="home">
            <h1>Welcome to the Scratch Programming Course</h1>
            <p>Learn the basics and advanced concepts of Scratch programming, and create amazing projects!</p>
            <div className="course-description">
                <h2>What You'll Learn</h2>
                <ul>
                    <li>How to create interactive games and animations</li>
                    <li>The basics of programming concepts like variables, loops, and conditional statements</li>
                    <li>How to use Scratch's blocks and programming concepts to bring your ideas to life</li>
                    <li>How to use the sprite and backdrop editors to create custom graphics for your projects</li>
                </ul>
                <p>Whether you're a beginner or have some programming experience, this course will take your Scratch skills to the next level!</p>
            </div>
        </div>
    );
}

export default Home;