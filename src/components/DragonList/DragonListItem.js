import React from 'react';
import { ListItemText, ListItem, Tooltip } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './DragonList.scss'

const DragonListItem = ({ index, style, data, onSelectDragon, onDeleteDragon, onEditDragon }) => {
    const dragon = data[index];

    const handleItemClick = () => {
        onSelectDragon(dragon);
    }

    return (
        <ListItem button style={style} key={index} >
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