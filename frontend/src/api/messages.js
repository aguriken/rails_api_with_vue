import axios from "axios";

export const fetchMessages = () =>
  axios.get("/messages");
