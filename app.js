require("dotenv").config();
const express = require("express");
const app = express();
const sessions = require("express-session");
const noCache = require("nocache");
const cookeiParser = require("cookie-parser");
const { cloudinaryConfig } = require("./config/cloudinary");
const adminRouter = require("./routes/adminRoute");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
const connectDatabase = require("./config/database");
const PORT = process.env.PORT || 3000;
connectDatabase();

// session

app.use(
  sessions({
    //setup session
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);
app.use(noCache());


app.use(cookeiParser());
app.use(cloudinaryConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/", userRouter);






app.use((err,req,res,next)=>
{

console.error(err.stack);
res.status(500).render("../views/error.ejs")

})






app.listen(PORT, () => {
  console.log(`\nSERVER RUNNING ON PORT: ${PORT}`);
});
