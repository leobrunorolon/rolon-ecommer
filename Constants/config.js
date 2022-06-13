import { API_KEY, db_url } from "@env";

export const DB_URL = db_url;
export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const AUTH_LOGIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
