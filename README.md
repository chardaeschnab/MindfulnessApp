# Mindfulness App

Built for an integrative mindfulness experience that makes meditation fun for children

## Table of Contents

- [Introduction](#introduction)
- [Features & Views](#features-views)
- [Tools Used](#tools-used)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to the Mind Playground application! This project aims to provide a soothing experience through curated meditation and relaxation videos based on your current emotional state. Users can select from various emotions in order to be sent a catered, mindfulness experience.

## Features && Views

Home Page (HomePage): Users are greeted with an introductory message and an inviting image that sets the tone for relaxation. They can choose their current emotional state from buttons like happy, sad, angry, etc., to navigate to the corresponding video.

Video Display (VideoDisplay): Upon selecting an emotion, users are directed to a page displaying a YouTube video embedded within an iframe. Below the video, users can view and interact with the comment section to share their thoughts or read others' comments and replies.

## Tools Used

Frontend: React.js, React Router, Bootstrap
Backend: Node.js, Express.js, Postman
Database: MySQL
Other Tools: JavaScript (ES6+), HTML, CSS, Axios for API requests, Excalidraw, Trello, Github, Slack

# Getting Started

- Clone the Repository: git clone <repository-url>
- Install Dependencies: Navigate into the project directory and run npm install to install the necessary packages.
- Set Up Database: Ensure MySQL is installed and create a database schema based on the provided schema in the model/helper.js file.
- Run the Application: Start the frontend and backend servers using npm start for both client and server.

## Database Schema

One-to-Many (1
) Relationship between Videos and Comments:
Each video can have multiple comments. This is represented by the comments table having a foreign key (video_id) that links each comment to a specific video.
Diagram:
videos (1) ⟶ comments (N)
One-to-Many (1
) Relationship within Comments for Replies:
Comments can have multiple replies. The parent_id field in the comments table links a reply to its parent comment, creating a nested comment structure.
Diagram:
comments (1) ⟶ comments (N) (self-referential relationship)
One-to-Many (1
) Relationship between Videos and Plays:
Each video can have multiple play records. The plays table records each instance a video is played, with a foreign key (video_id) linking to the videos table.
Diagram:
videos (1) ⟶ plays (N)

Current Tables:
+---------------+
| Tables_in_mvp |
+---------------+
| Comments |
| Plays |
| Videos |
+---------------+

## Acknowledgements

- Germinal Camps
- Aaron Strachan
