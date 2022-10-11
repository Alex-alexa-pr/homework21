import { useState } from "react";
import Title from "./Title";

function IsOpened() {
    const [isOpened, setOpened] = useState(false);

    function handleClick() {
        setOpened(true);
      };

    if (!isOpened) {
        return <button onClick={handleClick}>Open title</button>
      }
      return (
        <>
            <Title name="Products" type="bold" />
            <Title name="Employees" type="normal" />
        </>
      )
  }

  export default IsOpened;