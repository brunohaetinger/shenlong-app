import React from 'react';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const DragonForm = ({ dragon, handleClose, handleSave }) => {
    const classes = useStyles();
    const [hasSaved, setHasSaved] = React.useState(false);
    const [values, setValues] = React.useState({
        name: dragon.name,
        type: dragon.type,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onClickSave = () => {
        setHasSaved(true);
        for(var key in values){
            if(!values[key]){
                return;
            }
        }
        handleSave({ ...dragon, ...values })
    }

    return (
        dragon ?
            <div>
                <DialogContent>
                    <TextField
                        error={hasSaved && !values.name}
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        error={hasSaved && !values.type}
                        id="standard-type"
                        label="Type"
                        className={classes.textField}
                        value={values.type}
                        onChange={handleChange('type')}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={onClickSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </div>
            : ""
    )
}

export default DragonForm;