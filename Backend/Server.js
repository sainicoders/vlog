require("dotenv").config();
const express=require("express");

const app = express();
const PORT= 5000;
const authRouter=require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);
connectDB()
.then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running is port ${PORT}`);
    });
    

})


