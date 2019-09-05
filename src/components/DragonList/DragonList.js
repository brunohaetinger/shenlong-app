import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText, ListItem } from '@material-ui/core/';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 400,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Row(props) {
    const { index, style } = props;

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
        </ListItem>
    );
}

Row.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

const DragonList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeList height={400} width={360} itemSize={46} itemCount={200}>
                {Row}
            </FixedSizeList>
        </div>
    );
};

export default DragonList;