import React from 'react';
import { Fab, Tooltip, Grid, List  } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import DragonListItem from './DragonListItem';
import './DragonList.scss'


const DragonList = ({ dragons, onSelectDragon, onDeleteDragon, onEditDragon, onAddDragon }) => {
    return (
        <Grid
            className="grid-container"
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <List className="dragon-list">
                {dragons.map((dragon, index)=> <DragonListItem key={index} dragon={dragon} onSelectDragon={onSelectDragon} onDeleteDragon={onDeleteDragon} onEditDragon={onEditDragon}></DragonListItem>)}
            </List>
            <Tooltip title="Add">
                <Fab aria-label="add" className='fab-add' onClick={onAddDragon}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </Grid>
    );
};

export default DragonList;