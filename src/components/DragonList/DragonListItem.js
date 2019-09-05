import React from 'react';
import { ListItemText, ListItem } from '@material-ui/core/';


const DragonListItem = ({index, style, data}) => {
    const dragon = data[index];
    return (
        <ListItem button style={style} key={index} onClick={()=>console.log(`Clicou no ${dragon.name}`)}>
            <ListItemText primary={dragon.name} />
        </ListItem>
    );
}

export default DragonListItem;