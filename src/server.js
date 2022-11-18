
import express from "express";
import morgan from "morgan";
import session from "express-session";

import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { PromiseProvider } from "mongoose";



const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));


//라우터 앞에 사용해야함
//이제 이 미들웨어가 사이트로 들어오는 모두를 기억해줌
app.use(
    session({
        secret:"Hello!",
        resave:true,
        saveUninitialized:true,
    })
);

app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app
