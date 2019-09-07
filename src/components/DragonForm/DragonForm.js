import React from 'react';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core/';
import './DragonForm.scss';

const DragonForm = ({ dragon, handleClose, handleSave, readOnly }) => {
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
        for (var key in values) {
            if (!values[key]) {
                return;
            }
        }
        handleSave({ ...dragon, ...values })
    }

    return (
        dragon ?
            <div>
                <DialogContent className="form-container">
                    <TextField
                        disabled={readOnly}
                        error={hasSaved && !values.name}
                        id="standard-name"
                        label="Name"
                        className="textField"
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        disabled={readOnly}
                        error={hasSaved && !values.type}
                        id="standard-type"
                        label="Type"
                        className="textField"
                        value={values.type}
                        onChange={handleChange('type')}
                        margin="normal"
                    />
                    {readOnly && <TextField
                        disabled
                        id="standard-disabled"
                        label="Created At"
                        defaultValue={dragon.createdAt}
                        className="textField"
                        margin="normal"
                    />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    {!readOnly && <Button onClick={onClickSave} color="primary">Save</Button>}
                </DialogActions>
            </div>
            : ""
    )
}

export default DragonForm;