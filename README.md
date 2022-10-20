# Getting Started 

The idea of this app is to assist a user when a they read a book/article by helping them remember the key words. The app will take a snapshot everytime the user presses a shortcut (command + T), reads the image using Tesseract JS, filters the stop words and displays the keywords as a bubble map. Work in progress.

## Node Server

The Node Server fetches stop words to be filtered from a remote database which you can setup on your local instance using the following naming convention:
database = postgres/"any name of your choice"
table_name = words
table_columns = id, entry (varchar 40)

To run the Node API server:
### `node index.js`
Node server will be available on port 3002.

## React Server
The React Server runs the front end which is currently setup to take snapshots manually. To run the server: 

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
