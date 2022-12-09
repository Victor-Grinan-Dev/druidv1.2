import axios from "axios";
import config from "./config";


export const singleton = async () => {
  if (!singleton) {
    const tokenURL = config.drupal_url + "/session/token";
    try {
      const response = await axios.get(tokenURL, {
        withCredentials: true, 
      });

      const csrfToken = response.data;

      singleton = axios.create({
        baseURL: config.drupal_url,  
        withCredentials: true, 
        headers: {
          "X-CSRF-Token": csrfToken,
          "Access-Control-Allow-Credentials": true,
        }, 

        "Content-Type": "application/json",

        params: { _format: "json" }, 
      });
      console.log("Created new axios instance", singleton);
    } catch (error) {
      console.error(error);
    }
  }
  return singleton;
};
