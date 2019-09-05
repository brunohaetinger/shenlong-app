import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const DragonListItem = ({ index, style, data, onSelectDragon, onDeleteDragon }) => {
    const dragon = data[index];

    const handleItemClick = () => {
        onSelectDragon(dragon);
    }

    return (
        <ListItem button style={style} key={index} >
            <ListItemText primary={dragon.name} onClick={handleItemClick}/>
            <DeleteForeverIcon onClick={() => { onDeleteDragon(dragon.id) }} />
        </ListItem>
    );
}

export default DragonListItem;