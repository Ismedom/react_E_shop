import "./App.css";
import fetch_api from "./fetch";
// import { data } from "../mock/all_products.json";

function App() {
  // This line of code, I use to test fetching data
  fetch_api("../mock/details_product.json");
  return null;
}

export default App;
