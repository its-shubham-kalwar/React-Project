import { useState } from "react";
import "./App.css";
import ImageSlider from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} 
      limit={"10"}
      page={"1"}
       />
    </>
  );
}

export default App;
