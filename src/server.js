import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);


app.use("/", globalRouter); // '/'으로 시작하는 url이 있으면 글로벌라우터로
app.use("/videos", videoRouter); // 'videos'로 시작하는 url이 있으면 videoRouter로 이동
app.use("/users", userRouter);




const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);