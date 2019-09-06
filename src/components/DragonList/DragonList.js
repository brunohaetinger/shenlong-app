import React from 'react';
import { Fab, Tooltip } from '@material-ui/core/';
import { FixedSizeList as List} from 'react-window';
import AddIcon from '@material-ui/icons/Add';
import DragonListItem from './DragonListItem';
import './DragonList.scss'


const DragonList = ({dragons, onSelectDragon, onDeleteDragon, onEditDragon, onAddDragon}) => {
    return (
        <div className='root'>
            <List itemData={dragons} height={400} width={360} itemSize={46} itemCount={dragons.length}>
                {({index, style, data}) => <DragonListItem index={index} style={style} data={data} onSelectDragon={onSelectDragon} onDeleteDragon={onDeleteDragon} onEditDragon={onEditDragon}></DragonListItem>}
            </List>
            <Tooltip title="Add">
                <Fab color="primary" aria-label="add" className='fab' onClick={onAddDragon}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default DragonList;