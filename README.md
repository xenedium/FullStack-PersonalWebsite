# Repo for my portfolio website created using the MERN stack

# Frontend 👨‍💻
Inspired by many other portfolios, the frontend was made using ReactJs, Bootstrap and Sass

# Backend 🔧
The backend contain a route for rendering the static frontend, a GET route that reply with the ip of the client and a POST route that receive the data about the client and then add it to the MongoDb database

# Details 🌟

Once the page is loaded, a loaded Javascript (postreq.js) file will gather some data from the client including the ip (Using the backend api) and some other browser data, then POST these data back to the backend so they can be added to the MongoDb database (Also POST to a discord server using a webhook url).
