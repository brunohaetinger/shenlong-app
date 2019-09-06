import React, { useState, useEffect } from "react";
import DragonList from "../DragonList/DragonList";
import DragonDialog from "../DragonDialog/DragonDialog";
import { Typography } from '@material-ui/core/';
import DragonClient from '../../services/DragonClient';
import { useSnackbar } from 'notistack';

const Dragons = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState();
  const [selectedDragon, setSelectedDragon] = useState();
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    updateDragons();
  }, []);

  const updateDragons = () => {
    DragonClient.getDragons()
      .then(resp => resp.json())
      .then(dragons => setDragons(getOrderedList(dragons)))
      .catch(ex => { enqueueSnackbar(`Sorry, couldn't get dragon's list`, { variant: 'error' })});
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

  const onOpenDetails = (dragon) => {
    setSelectedDragon(dragon);
    setIsDialogOpen(true);
    setDialogAction('Details');
  }

  const onDeleteDragon = (id) => {
    DragonClient.deleteDragon(id).then(resp => {
      updateDragons();
    });
  }

  const onEditDragon = (dragon) => {
    setSelectedDragon(dragon);
    setIsDialogOpen(true);
    setDialogAction('Edit');
  }

  const onAddDragon = () => {
    setSelectedDragon({name: '', type: ''});
    setIsDialogOpen(true);
    setDialogAction('Add');
  }

  const handleDialogSave = (dragon) => {
    setIsDialogOpen(false);
    if(dialogAction === 'Edit'){
      DragonClient.updateDragon(dragon.id, dragon).then(resp => {
        updateDragons();
      });
    }else {
      DragonClient.createDragon(dragon).then(resp => {
        updateDragons();
      });
    }
  }

  return (
    <div>
      <DragonList onSelectDragon={onOpenDetails} dragons={dragons} onDeleteDragon={onDeleteDragon} onEditDragon={onEditDragon} onAddDragon={onAddDragon}></DragonList>
      <DragonDialog isOpen={isDialogOpen} dialogAction={dialogAction} dragon={selectedDragon} closeDialog={() => { setIsDialogOpen(false) }} handleSave={handleDialogSave}></DragonDialog>
    </div>
  );
}

export default Dragons;