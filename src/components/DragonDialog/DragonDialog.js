import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core/';
import DragonForm from '../DragonForm/DragonForm';

const DragonDialog = ({ isOpen, closeDialog, dragon, dialogAction, handleSave }) => {
    const handleClose = () => {
        closeDialog();
    };

    return (
        dragon ?
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dialogAction}</DialogTitle>
                <DragonForm dragon={dragon} handleClose={handleClose} handleSave={handleSave} readOnly={dialogAction === 'Details'}></DragonForm>;
            </Dialog>
            : ""
    )
}

export default DragonDialog;