import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeHandler = () => {
    setChangedText(true);
  }
  
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeHandler}>Change Text!</button>
    </div>
  );
}
export default Greeting;