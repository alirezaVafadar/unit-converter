import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';


const pages = ['converter', 'contact'];

function ScrollTop(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 75 , right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
  };

const Navbar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <React.Fragment>
            <CssBaseline />
            <AppBar color="secondary" position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link href="/"><a><HomeIcon fontSize="large"/></a></Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                        <Drawer
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                        >
                          {pages.map((page) => (
                                <ListItem button key={page} onClick={handleCloseNavMenu}>
                                  <Link href={"/"+page}>
                                    <ListItemText primary={page} />
                                  </Link>
                                </ListItem>
                        ))}
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link href="/"><a><HomeIcon fontSize="large"/></a></Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link href={"/"+page}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <Toolbar style={{minHeight:"0px"}} id="back-to-top-anchor" />
    </React.Fragment>
  );
};
export default Navbar;
