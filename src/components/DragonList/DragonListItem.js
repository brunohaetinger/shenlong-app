import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core/';


const DragonListItem = ({index, style, data, onClick}) => {
    const dragon = data[index];

    const handleItemClick = () => {
        onClick(dragon);
    }

    return (
        <ListItem button style={style} key={index} onClick={handleItemClick}>
            <ListItemText primary={dragon.name} />
        </ListItem>
    );
}

export default DragonListItem;