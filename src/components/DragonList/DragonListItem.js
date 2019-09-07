import React from 'react';
import { ListItemText, ListItem, Tooltip } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './DragonList.scss'

const DragonListItem = ({ dragon, onSelectDragon, onDeleteDragon, onEditDragon }) => {
    const handleItemClick = () => {
        onSelectDragon(dragon);
    }

    return (
        <ListItem button>
            <ListItemText className="list-name" primary={dragon.name} onClick={handleItemClick} />
            <Tooltip title="Edit">
                <EditIcon className="edit-icon" onClick={() => { onEditDragon(dragon) }} />
            </Tooltip>
            <Tooltip title="Delete">
                <DeleteForeverIcon onClick={() => { onDeleteDragon(dragon.id) }} />
            </Tooltip>
        </ListItem>
    );
}

export default DragonListItem;