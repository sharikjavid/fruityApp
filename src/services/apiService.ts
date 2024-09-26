// src/api/fetchFruits.ts

import axios from "axios";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const API_BASE_URL = "https://fruityvice.com/api/fruit";

export const fetchFruits = async () => {
  try {
    const response = await axios.get(`${CORS_PROXY}${API_BASE_URL}/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching fruits:", error);
    throw new Error("Error fetching fruits");
  }
};
