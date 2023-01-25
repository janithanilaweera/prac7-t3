// var express = require("express");
// var app = express();

// app.use(express.static(__dirname + "/public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// var port = process.env.port || 3000;

// app.listen(port, () => {
//   console.log("App listening to: " + port);
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

var express = require("express");
var app = express();
var cors = require("cors");
let projectCollection;

let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// mongoDB connection
const mongoClient = require("mongodb").MongoClient;

// add database connection
   //username: janitha
   //password: GVfy9OvEJ1yMbzfF

const uri =
  "mongodb+srv://janitha:GVfy9OvEJ1yMbzfF@cluster0.pxyaxvc.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoClient(uri, { useNewUrlParser: true });


// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];



var port = process.env.port || 8080;



io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

var port = process.env.port || 3000;

http.listen(port, () => {
  console.log("App listening to: " + port);
});



