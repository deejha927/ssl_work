import * as React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { loginApi } from '../../apis/productapi';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: "100%",
    border: 'none',
    borderRadius: "4px",
    textAlign: "center",
    padding: "10px 20px 10px 20px",
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        loginApi(data.get('email'), data.get('password'))
            .then((data) => {
                console.log(data)
            })
    };

    return (
        <div>
            <Button onClick={handleOpen} style={{ color: "black", fontWeight: "bold", }}>Sign in</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-login"
                aria-describedby="modal-for-login"

            >
                <Grid container spacing={2}>
                    <Grid item md={3} sx={style}>
                        <img src="static/mainlogo.png" alt="logo" style={{ height: "70px" }} />
                        <p style={{ fontSize: "22px", lineHeight: "1.3", fontWeight: "bold" }}>YOUR ACCOUNT FOR EVERYTHING SHOPNOW</p>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Modal>
        </div >
    );
}