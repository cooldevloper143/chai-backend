import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));

app.use(express.json({
  limit: "20kb",
}));


app.use(cookieParser({
  // secret: process.env.COOKIE_SECRET,
  // maxAge: 24 * 60 * 60 * 1000,
  // httpOnly: true,
  // sameSite: "lax",
  // secure: process.env.NODE_ENV === "production",
}));

app.use(express.urlencoded({
  extended: true,
  limit: "20kb",
  parameterLimit: 5000,
  type: "application/x-www-form-urlencoded",
  verify: (req, res, buf) => {
    const urlencoded = buf.toString();
    if (urlencoded.length > 5000) {
      res.status(413).send({
        message: "Too many parameters."
      });
    }
  },
}));
app.use(express.static("public"));
app.use(express.text({
  type: "text/plain",
}));
app.use(express.raw({
  type: "application/octet-stream",
}));
app.use(express.json({
  type: "application/json",
}));
app.use(express.json({
  type: "application/vnd.api+json",
}));
app.use(express.json({
  type: "application/csp-report",
}));
app.use(express.json({
  type: "application/x-protobuf",
}));
app.use(express.json({
  type: "application/x-www-form-urlencoded",
}));
app.use(express.json({
  type: "multipart/form-data",
}));
app.use(express.json({
  type: "text/html",
}));
app.use(express.json({
  type: "text/plain",
}));
app.use(express.json({
  type: "text/xml",
}));
app.use(express.json({
  type: "text/yaml",
}));
app.use(cookieParser());



export default app; 