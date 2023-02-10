import { useEffect, useState } from "react";
import axios from "axios";
import Test from "./Test";

function App() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    //axios모듈을 활용한 Ajax 처리.
    axios.get("http://localhost:5000/car").then((response) => {
      setCarList(response.data);
    });
  }, []);

  return (
    <div>
      <h1>길동이의 홈페이지</h1>
      <Test />
      <ul>
        {carList.map((car) => {
          return (
            <li key={car.no}>
              {car.name} : {car.price}
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}

export default App;
