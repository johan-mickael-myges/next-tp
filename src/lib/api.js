import axios from "axios";

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const jsonAPIPlaceholder = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});
