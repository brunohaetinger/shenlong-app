import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core/';
import { Typography } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const DragonDetail = ({isOpen, closeModal, dragon}) => {
    const classes = useStyles();

    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    <Typography variant="h1" component="h2">{dragon.name}</Typography>
                    <Typography variant="h5" component="h5">{dragon.type}</Typography>
                    <Typography variant="subtitle1" component="subtitle1">{dragon.createdAt}</Typography>                    
                </div>
            </Fade>
        </Modal>
    )
}

export default DragonDetail;