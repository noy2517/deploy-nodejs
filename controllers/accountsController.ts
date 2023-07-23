import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/regis", getAllAccount);
Controller.post("/regis", createAccount);
Controller.patch("/regis/:id", updateAccount);
Controller.delete("/regis/:id", deleteAccount);

export default Controller;
