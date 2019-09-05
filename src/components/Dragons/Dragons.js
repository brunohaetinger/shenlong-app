import React, {useState, useEffect} from "react";
import DragonList from "../DragonList/DragonList";
import DragonDetail from "../DragonDetail/DragonDetail";
import { Typography } from '@material-ui/core/';
import DragonClient from '../../services/DragonClient';

const Dragons = () => {
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedDragon, setSelectedDragon] = useState();
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    DragonClient.getDragons()
      .then( resp => {console.log("TCL: Dragons -> resp", resp); return resp.json()})
      
      .then( dragons => setDragons(dragons));
  },[]);

  const handleIsDetailOpen = (isOpen) => {
    setDetailOpen(isOpen);
  }

  const openDetail = (dragon) => {
    setSelectedDragon(dragon);
    handleIsDetailOpen(true);
  }

  return (
    <div>
      <Typography variant="h1" component="h2">Dragons</Typography>
      <DragonList onSelectDragon={openDetail} dragons={dragons}></DragonList>
      <DragonDetail isOpen={isDetailOpen} dragon={selectedDragon} closeModal={() => { handleIsDetailOpen(false) }}></DragonDetail>
    </div>
  );
}

export default Dragons;