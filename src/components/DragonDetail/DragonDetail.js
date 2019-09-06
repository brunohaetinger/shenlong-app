import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText } from '@material-ui/core/';

const DragonDetail = ({ dragon, handleClose }) => {

    return (
        dragon ?
            <div>                
                <DialogContent>
                    <DialogContentText>{dragon.name}</DialogContentText>
                    <DialogContentText>{dragon.type}</DialogContentText>
                    <DialogContentText>{dragon.createdAt}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </div>
            : ""
    )
}

export default DragonDetail;