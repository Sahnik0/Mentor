import express from 'express';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQwJZOYFxF4x7rF1gRhQg6-_mjnVw8iA",
  authDomain: "mentor-88ece.firebaseapp.com",
  databaseURL: "https://mentor-88ece-default-rtdb.firebaseio.com",
  projectId: "mentor-88ece",
  storageBucket: "mentor-88ece.appspot.com",
  messagingSenderId: "853185689648",
  appId: "1:853185689648:web:b1a7fe65829a74573355f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

console.log(database);

const app1 = express();
app1.use(express.static('.'));

app1.use(express.urlencoded({extended: true}));

app1.post("/signup", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);

    // const ref = database.ref('mentor/mentor');
    writeUserData(database, req.body.name, req.body.email, req.body.password);
    res.send(database.ref);
    // console.log();
});

app1.listen(8000, () => console.log("Connection successful"));

function writeUserData(db, name, email, password) {
    // const db = getDatabase();
    set(ref(db, 'users/user1'), {
      email: email,
      name: name,
      password : password
    });
  }
  