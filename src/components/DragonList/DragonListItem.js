import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const DragonListItem = ({ index, style, data, onSelectDragon, onDeleteDragon, onEditDragon }) => {
    const dragon = data[index];

    const handleItemClick = () => {
        onSelectDragon(dragon);
    }

    return (
        <ListItem button style={style} key={index} >
            <ListItemText primary={dragon.name} onClick={handleItemClick}/>
            <EditIcon onClick={() => { onEditDragon(dragon) }} />
            <DeleteForeverIcon onClick={() => { onDeleteDragon(dragon.id) }} />
        </ListItem>
    );
}

export default DragonListItem;