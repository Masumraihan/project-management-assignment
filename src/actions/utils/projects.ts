import axios from "axios";

export const getData = async () => {
  const res = await axios.get("/api/project");
  return res.data;
};
