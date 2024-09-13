require("dotenv").config();

const Mongodb_URL = process.env.Mongodb_URL;
const Port = process.env.Port;

module.exports = {Mongodb_URL,Port};