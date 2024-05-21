# Mindfulness App
## Built for an integrative mindfulness experience that makes meditation fun for children

# Project Description
This app currently has 3 main features: 
    - Emotion selection: users select the emotion they are currently feeling 
    - Random video generator: based on the emotion selected, a random video (within that category of emotion will render on the page)
    - Chat feature: a space for the children to comment and reply to other's childrens experiences 

# Description
The tables were build in mySql, currently there are 3 tables in total - 2 currently in function. 
Videos, Comments, and Plays(to be used later).

## Dependencies 
- Run 'npm install' in the project directory to install all server dependencies
- 'cd client' and run 'npm install' to install client dependencies 
- create a `.env` file to your project folder. The name of the database is `mvp`: 
DB_HOST=localhost
  DB_USER=root
  DB_NAME=mvp
  DB_PASS=root
  - run `npm run migrate` which will import the tables - videos and comments (and plays)
  - init_db.sql contains the file which has the table information 


# Future features 
- To be added will the a feature that sounds video plays (already started in video.js)
- with this, gamified elements will be added for the video that gets the most plays

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
