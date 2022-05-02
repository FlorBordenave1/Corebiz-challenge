import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function AlertNewProduct({ open, data, close }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        borderRadius: 4,
                        padding: 5,
                        width: '22rem',
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Has agregado ${data.name} por ${data.price} a tu carrito!`}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
} 