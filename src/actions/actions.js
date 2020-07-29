const URL = "https://api-dev.khidmati.ae/itservgroup/auth/login";
import axios from "axios";

export async function getToken(username, password) {
  var body = {
    email: username,
    password: password,
    platform: "https",
    deviceToken: "1",
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      clientId: "customer-app-android",
      clientSecret: "K87A7LmeV3h8T67",
    },
  };
  try {
    let response = await axios.post(URL, body, axiosConfig);
    return {
      type: "GET_TOKEN",
      payload: response,
    };
  } catch (err) {
    console.log("AXIOS ERROR: ", err);
  }
}
