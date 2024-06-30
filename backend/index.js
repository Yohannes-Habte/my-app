import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";
import multer from "multer";
import "./database/index.js";

//Routes
import authRouter from "./routes/auth/index.js";
import categoryRouter from "./routes/category/index.js";
import commentRouter from "./routes/comment/index.js";
import courseRouter from "./routes/course/index.js";
import courseRegistrationRouter from "./routes/courseRegistration/index.js";
import departmentRouter from "./routes/department/index.js";
import employeeRouter from "./routes/employee/index.js";
import backgroundRouter from "./routes/employeeBackgroundCheck/index.js";
import roleRouter from "./routes/employeeRole/index.js";
import eventRouter from "./routes/event/index.js";
import feedbackRouter from "./routes/feedback/index.js";
import jobRouter from "./routes/job/index.js";
import orderProcessRouter from "./routes/orderProcess/index.js";
import paymentRouter from "./routes/payment/index.js";
import productRouter from "./routes/product/index.js";
import productOrderRouter from "./routes/productOrder/index.js";
import projectRouter from "./routes/project/index.js";
import ratingRouter from "./routes/rating/index.js";
import requestRouter from "./routes/request/index.js";
import seedRouter from "./routes/seed/index.js";
import staticDataRouter from "./routes/staticData/index.js";
import todoRouter from "./routes/todo/index.js";
import userRouter from "./routes/user/index.js";
import globalErrorHandler from "./middlewares/globalError/index.js";

// Express app
const app = express();
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

//! Step 2: create API for the paypal
app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb"); // sb stands for Sandbox
});

// mongoDB
dotenv.config();

app.use(morgan("tiny"));

// End points

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/courseRegistrations", courseRegistrationRouter);
app.use("/api/v1/departments", departmentRouter);
app.use("/api/v1/employees", employeeRouter);
app.use("/api/v1/employees/background", backgroundRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/feedbacks", feedbackRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/procedures", orderProcessRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/productOrders", productOrderRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/ratings", ratingRouter);
app.use("/api/v1/requests", requestRouter);
app.use("/api/v1/seeds", seedRouter);
app.use("/api/v1/pages", staticDataRouter);
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

// Static assets
app.use(express.static("assets"));

// Global error handler
app.use(globalErrorHandler);

// Port
const port = process.env.PORT || 8000;

// Server Listner
app.listen(port, () => {
  console.log(`The server starts on port ${port}`.blue.bold);
});
