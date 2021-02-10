import {useSelector} from "react-redux";
import Button from "./Button";



function App() {
  const counter = useSelector((state) => state)

  return (
    <div>
      {counter}
      <Button />
    </div>
  );
}

export default App;
