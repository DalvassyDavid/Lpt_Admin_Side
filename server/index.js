import express, { json } from "express";
import cors from "cors";
import mysql from "mysql2";
import multer from "multer";

const app = express();
const port = process.env.PORT || 8000;
app.use(json());

app.use(cors());
app.use(json());

var connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "test",
});

connnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
  connnection.query("SELECT * FROM test1", (err, data) => {
    if (err) throw err;
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.get("/events", (req, res) => {
  const sql = "SELECT * from events ";
  connnection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/members", (req, res) => {
  const sql = "SELECT * from tess ";
  connnection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/allyoutubevideos", (req, res) => {
  const sql = "SELECT * from youtube_test ";
  connnection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/members/:id", (req, res) => {
  const userID = req.params.id;
  const sql = `SELECT * from tess WHERE ID=?`;
  connnection.query(sql, [userID], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/events/:id", (req, res) => {
  const userID = req.params.id;
  const sql = `SELECT * from events WHERE ID=?`;
  connnection.query(sql, [userID], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/allyoutubevideos/:id", (req, res) => {
  const userID = req.params.id;
  const sql = `SELECT * from youtube_test WHERE ID=?`;
  connnection.query(sql, [userID], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/getlastid", (req, res) => {
  const sql = "SELECT ID FROM tess ORDER BY ID DESC LIMIT 1";
  connnection.query(sql, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/createmember", upload.single("file"), (req, res) => {
  const staffnumber = "LPT" + Date.now();

  const values = [
    req.body.name,
    staffnumber,
    req.body.position,
    req.body.email,
    req.file?.originalname, // Take care of this ? . I dont know what it means but it works
  ];

  const sql =
    " INSERT INTO tess (`NAME`,`STAFFNUMBER`,`POSITION`,`EMAIL`,`PHOTO`) values(?)";
  if (values[4] == undefined) {
    // console.log(null);
    res.json("fail");
    return;
  } else
    connnection.query(sql, [values], (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json("Success");
    });
});

app.post("/createvent", upload.single("file"), (req, res) => {
  //cannot be past date find a way

  const values = [
    req.body.occassion,
    req.body.date,
    req.body.title,
    req.body.description,
    req.file?.originalname, // Take care of this ? . I dont know what it means but it works
  ];

  const sql =
    " INSERT INTO events (`OCCASSION`,`DATE`,`TITLE`,`DESCRIPTION`,`IMAGE`) values(?)";
  connnection.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json("Success");
  });
});

app.post("/addyoutubevideo", upload.single("file"), (req, res) => {
  //cannot be past date find a way

  const values = [
    req.body.occassion,
    req.body.date,
    req.body.title,
    req.file?.originalname, // Take care of this ? . I dont know what it means but it works
  ];

  const sql =
    " INSERT INTO youtube_test (`LINK`,`DATEADDED`,`TITLE`,`IMAGE`) values(?)";
  connnection.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json("Success");
  });
});
