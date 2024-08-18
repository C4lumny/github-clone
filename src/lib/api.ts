import axios from "axios";

export const githubCloneApi = axios.create({
  //   baseURL: "https://sadieapi.onrender.com/",
  baseURL: "http://localhost:3002/",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});
