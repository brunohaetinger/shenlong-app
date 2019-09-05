import React from "react";
import DragonList from "../DragonList/DragonList";
import DragonDetail from "../DragonDetail/DragonDetail";

const Dragons = () => {
  const [isDetailOpen, setDetailOpen] = React.useState(false);

  const handleIsDetailOpen = (isOpen) => {
    setDetailOpen(isOpen);
  }

  return (
    <div>
        <h1>Dragons</h1>
         <DragonList></DragonList>
      <DragonDetail isOpen={isDetailOpen} closeModal={() => { handleIsDetailOpen(false) }} dragon={{name: "Dragon1", type:"Loard", creationDate:"30/02/0002"}}></DragonDetail>
      <button onClick={() => { handleIsDetailOpen(true) }}>Open</button>
    </div>
  );
}

export default Dragons;