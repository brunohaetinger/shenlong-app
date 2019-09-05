import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core/';
import { FixedSizeList as List} from 'react-window';
import AddIcon from '@material-ui/icons/Add';
import DragonListItem from './DragonListItem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 400,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    fab: {
        margin: theme.spacing(1),
    },
}));

const DragonList = ({dragons}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List itemData={dragons} height={400} width={360} itemSize={46} itemCount={dragons.length}>
                {DragonListItem}
            </List>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default DragonList;