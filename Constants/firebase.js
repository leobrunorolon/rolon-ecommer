require("dotenv").config();
const api_key = process.env.API_KEY;
export const DB_URL = "https://bruno-app-coder-default-rtdb.firebaseio.com/";
export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;
