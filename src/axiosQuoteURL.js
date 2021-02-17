import axios from "axios";

const axiosQuoteURL = axios.create({
  baseURL: "https://quotes-mirafal-default-rtdb.firebaseio.com/",
});
export default axiosQuoteURL;
