import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core/';
import DragonDetail from '../DragonDetail/DragonDetail';
import DragonForm from '../DragonForm/DragonForm';

const DragonDialog = ({ isOpen, closeDialog, dragon, dialogAction, handleSave }) => {
    const handleClose = () => {
        closeDialog();
    };

    const getContent = () => {
        switch (dialogAction) {
            case 'Edit': return <DragonForm dragon={dragon} handleClose={handleClose} handleSave={handleSave}></DragonForm>;
            case 'Add': return <DragonForm dragon={dragon} handleClose={handleClose} handleSave={handleSave}></DragonForm>;
            case 'Details': return <DragonDetail dragon={dragon} handleClose={handleClose}></DragonDetail>
            default: return "";
        }
    }

    return (
        dragon ?
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dialogAction}</DialogTitle>
                {getContent()}
            </Dialog>
            : ""
    )
}

export default DragonDialog;