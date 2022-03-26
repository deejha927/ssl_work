import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import BasicModal from '../modal/loginmodal';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';



const ResponsiveAppBar = () => {
    const mainStyle = {
        navColor: {
            background: "white",
            color: "black",

        },
        color: {
            color: "white"
        },
        btnStyle: {
            color: "black",
            fontWeight: "bold",
        },
        logoHorizontallyCenter: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const UrlLinks = [
        {
            "linkName": "Men",
            "url": "/men",
        },
        {
            "linkName": "Women",
            "url": "/women",
        },
        {
            "linkName": "Accessories",
            "url": "/accessories",
        },
        {
            "linkName": "Outlet",
            "url": "/outlet",
        },
    ]
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" style={mainStyle.navColor}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div style={mainStyle.logoHorizontallyCenter}>
                        <img src="/static/mainlogo.png" style={{ height: "60px" }} alt="logo" />
                    </div>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {UrlLinks.map((data, key) => (
                                <MenuItem key={key}>
                                    <Typography textAlign="center">{data?.linkName}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {UrlLinks.map((data, key) => (
                            <Link to={data?.url} key={key}>
                                <Button style={mainStyle.btnStyle}>{data?.linkName}</Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* <AccountCircleIcon sx={{ fontSize: 30 }} />
                        <ShoppingCartIcon sx={{ fontSize: 30, marginLeft: { xs: "0.5em", md: "1em" } }} /> */}
                        {/* <Button style={mainStyle.btnStyle} onClick={handleOpen}>sign in</Button> */}
                        <BasicModal />
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">test</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
