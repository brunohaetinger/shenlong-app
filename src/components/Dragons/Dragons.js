import React, { useState, useEffect } from "react";
import DragonList from "../DragonList/DragonList";
import DragonDetail from "../DragonDetail/DragonDetail";
import { Typography } from '@material-ui/core/';
import DragonClient from '../../services/DragonClient';

const Dragons = () => {
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedDragon, setSelectedDragon] = useState();
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    updateDragons();
  }, []);

  const updateDragons = () => {
    DragonClient.getDragons()
      .then(resp => resp.json())
      .then(dragons => setDragons(getOrderedList(dragons)));
    //ToDo: catch and show user message.
  }

  const getOrderedList = (dragons) => {
    return dragons.sort(function (a, b) {
      let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });
  }

  const handleIsDetailOpen = (isOpen) => {
    setDetailOpen(isOpen);
  }

  const openDetail = (dragon) => {
    setSelectedDragon(dragon);
    handleIsDetailOpen(true);
  }

  const onDeleteDragon = (id) => {
    DragonClient.deleteDragon(id).then(resp => {
      updateDragons();
    });
  }

  const onEditDragon = (dragon) => {
    console.log('Go to Edit page');
  }

  return (
    <div>
      <Typography variant="h1" component="h2">Dragons</Typography>
      <DragonList onSelectDragon={openDetail} dragons={dragons} onDeleteDragon={onDeleteDragon} onEditDragon={onEditDragon}></DragonList>
      <DragonDetail isOpen={isDetailOpen} dragon={selectedDragon} closeModal={() => { handleIsDetailOpen(false) }}></DragonDetail>
    </div>
  );
}

export default Dragons;