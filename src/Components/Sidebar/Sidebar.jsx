'use client';

import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Profile from './Profile';
import Inbox from '../Inbox/Inbox';
import Dashboard from '../dashboard/Dashboard';

import { ListItemText } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [inboxOpen, setInboxOpen] = React.useState(false);
    const [allMailOpen, setAllMailOpen] = React.useState(false);
    const [flatOpen, setFlatOpen] = React.useState(false);
    const[inventory,setinventory] = React.useState(false);
    const [vendor, setvendor] = React.useState(false);
    const [amenities, setamenities] = React.useState(false);
    const [help, sethelp] = React.useState(false);
    const [park, setpark] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleInboxClick = () => {
        setInboxOpen(!inboxOpen);
    };
    const handleFlat = () => {
        setFlatOpen(!flatOpen);
    };
    const handleVendor = () => {
        setvendor(!vendor);
    };

    const handleAllMailClick = () => {
        setAllMailOpen(!allMailOpen);
    };
    const handleInventory = () => {
        setinventory(!inventory);
    };
    const handleAmenities = () => {
        setamenities(!amenities);
    };
    const handlehelp = () => {
        sethelp(!help);
    };
    const handlepark = () => {
        setpark(!park);
    };

    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
          
                <AppBar position="fixed" open={open}>
                    
                    <Toolbar>
                        
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                        <img src="https://wa.chatmybot.in/Shareablelinks/20004/225960/abcajhds.png"  width="60" height="60" />

                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Profile />
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                    <h2>SERVIZING&nbsp;&nbsp;&nbsp;</h2>
                    <br></br>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem button onClick={handleInboxClick}>

                            <ListItemText primary="Society Management" />
                            {inboxOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={inboxOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Pending Approvals" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Notice and MOM" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Management Comittee" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Emergency Contact" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Retention Policy" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Hood Events" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Access Management" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Document Repository" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleFlat}>

                            <ListItemText primary=" Flats & Residents Management" />
                            {flatOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={flatOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Manage Resident/Owner" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Manage Flats" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Change Ownership" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Move Configuration" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Move In-Out" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Move Tracker" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Health Tracker" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Rent Agreements" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleAllMailClick}>
                            <ListItemText primary="Gate & Visitor Management" />
                            {allMailOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={allMailOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Manage Staff/Security" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Manage Daily Help" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="In & Out Records " />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Attendance" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Gate Pass" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Smart Boom Barriers" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Patrolling and Incidents" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleInventory}>
                            <ListItemText primary="Inventory Management" />
                            {inventory ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={inventory} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Item Master" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Stock/Issue Entry " />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Manage Category" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Goods Received Note" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleVendor}>
                            <ListItemText primary="Vendor Management" />
                            {vendor ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={vendor} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Manage Vendor Service" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleAmenities}>
                            <ListItemText primary="Amenities Management" />
                            {amenities ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={amenities} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Amenities and classes" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handlehelp}>
                            <ListItemText primary="Help Desk" />
                            {help ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={help} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Open Tickets" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Categories" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Escalation Matrix" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/allmail/work">
                                    <ListItemText primary="Assignment Rules" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handlepark}>
                            <ListItemText primary="Parking Management" />
                            {park ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={park} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to="/inbox">
                                    <ListItemText primary="Parking Dashboard" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <Routes>
                        <Route path="/inbox" element={<Dashboard />} />
                        <Route path="/inbox/important" element={<div>Important</div>} />
                        <Route path="/inbox/social" element={<div>Social</div>} />
                        <Route path="/allmail/personal" element={<div>Personal</div>} />
                        <Route path="/allmail/work" element={<div>Work</div>} />
                    </Routes>
                </Main>
            </Box>
        </Router>
    );
}
