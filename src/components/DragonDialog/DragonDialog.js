import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core/';
import DragonForm from '../DragonForm/DragonForm';
import Enums from "../../enums/Enums";

const DragonDialog = ({ isOpen, closeDialog, dragon, dialogAction, handleSave }) => {
    const handleClose = () => {
        closeDialog();
    };

    return (
        dragon ?
            <Dialog open={isOpen} onClose={handleClose} fullWidth={300} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dialogAction}</DialogTitle>
                <DragonForm dragon={dragon} handleClose={handleClose} handleSave={handleSave} readOnly={dialogAction === Enums.dialogActions.details}></DragonForm>;
            </Dialog>
            : ""
    )
}

export default DragonDialog;