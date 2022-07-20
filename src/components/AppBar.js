import React, { useEffect, useState, useRef, useContext } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Logo from "../../static/img/logo.png"
import Grid from '@mui/material/Grid';
import { globalHistory } from "@reach/router"

import {
  NavDispatchContext,
  NavStateContext,
} from "../context/NavContextProvider"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#101012'
  },
  titleLong: {
    display: 'block',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  titleShort: {
    display: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      fontSize: '1.33rem',
      marginLeft: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '1.15rem',
    }
  },
  longText: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  shortText: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    textTransform: "none",
    borderRadius: 0,
    borderBottom: '0px solid transparent',
    [theme.breakpoints.down('sm')]: {
      minWidth: theme.spacing(6),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    }
  },
  contact: {
    flexGrow: 1,
  },
  Logo: {
    maxWidth: theme.spacing(7.2),
    margin: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      maxWidth: theme.spacing(5),
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      minHeight: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  },
  github: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  menuLink: {
    width: '100%',
    heigh: '100%',
  }
}));

const defaultTheme = createTheme();

export default function ButtonAppBar(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD HH:mm:ss z")
          siteMetadata {
            customRequestLink
            description
            shortDescription
            githubRepo
            githubRepoName
          }
        }
      }
    `
  )

  const classes = useStyles();
  const [setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const path = globalHistory.location.pathname
  const dispatch = useContext(NavDispatchContext)
  const state = useContext(NavStateContext)

  const handleLearnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLearMenuClick = (event) => {
    dispatch({ type: event.currentTarget.getAttribute('tab') });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const setActiveStyle = (tab) => {
    if ( state.activeTab === tab) {
      return {
        borderBottom: '.33rem solid #9F5222',
        paddingBottom: '3px'
      };
    } else {
      return {
        borderBottom: '0.033rem solid transparent'
      };
    }
  }

  const handleTabClick = (event) => {
    dispatch({ type: event.target.getAttribute('tab') });
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // sets current tab in state - basically to ensure the correct tab is highlighted
  useEffect(() => {
    console.log('useEffect', path)
    switch (path) {
      case `/${data.site.siteMetadata.githubRepoName}`:
        dispatch({ type: 'TAB_HOME' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/`:
        dispatch({ type: 'TAB_HOME' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/contact`:
        dispatch({ type: 'TAB_CONTACT' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/contact/`:
        dispatch({ type: 'TAB_CONTACT' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/downloads`:
        dispatch({ type: 'TAB_DOWNLOAD' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/downloads/`:
        dispatch({ type: 'TAB_DOWNLOAD' });
        break;
      case '/':
        dispatch({ type: 'TAB_HOME' });
        break;
      case '/contact':
        dispatch({ type: 'TAB_CONTACT' });
        break;
      case '/contact/':
        dispatch({ type: 'TAB_CONTACT' });
        break;
      case '/downloads':
        dispatch({ type: 'TAB_DOWNLOAD' });
        break;
      case '/downloads/':
        dispatch({ type: 'TAB_DOWNLOAD' });
        break;
      default:
        dispatch({ type: 'TAB_LEARN' });
        break;
    }
  }, [dispatch, data.site.siteMetadata.githubRepoName, path]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <AppBar className={classes.root} position="static" >
          <Grid container justifyContent="center" >
            <Grid item xs={12} sm={1}>
                <img variant="square" alt="southfact" src={Logo} className={classes.Logo} />
            </Grid>
            <Grid item xs={12} sm={11}>
              <Box py={1} className={classes.toolbar}>
                <Typography variant="h5" className={classes.titleLong}>
                  {data.site.siteMetadata.description}
                </Typography>
                <Typography variant="h5" className={classes.titleShort}>
                  {data.site.siteMetadata.shortDescription}
                </Typography>
              </Box>
              <Toolbar mr={10} className={classes.toolbar}>
                <Button
                  className={classes.button}
                  onClick={handleTabClick}
                  tab='TAB_HOME'
                  size='large'
                  color='inherit'
                  style={setActiveStyle('home')}
                >
                  <Link to='/' tab='TAB_HOME'>
                    Home
                  </Link>
                </Button>
                <Button
                  onClick={handleTabClick}
                  tab='TAB_MAP'
                  className={classes.button}
                  size='large'
                  color='inherit'
                  href="https://map.southfact.com"
                  style={setActiveStyle('map')}
                >
                  Map
                </Button>
                <Button
                  onClick={handleTabClick}
                  tab='TAB_CUSTOM_REQUEST'
                  className={classes.button}
                  size='large'
                  color='inherit'
                  href={data.site.siteMetadata.customRequestLink}
                  target="_blank"
                  style={setActiveStyle('custom request')}
                >
                  <span className={classes.longText}>Custom Request</span>
                  <span className={classes.shortText}>Requests</span>
                </Button>
                <Button
                  className={classes.button}
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  color='inherit'
                  size='large'
                  style={setActiveStyle('learn')}
                  onClick={handleLearnClick}
                  tab='TAB_LEARN'
                >
                  Learn
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>
                          <Link to='/about' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            About
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/case-studies' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            Case Studies
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/faqs' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            Frequently Asked Questions
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/guides' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            Guides
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/resources' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            Resources
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to='/methods' onClick={handleLearMenuClick} tab='TAB_LEARN' className={classes.menuLink}>
                            Methods
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popover>
                <Typography className={classes.button}>
                  <Button
                    onClick={handleTabClick}
                    tab='TAB_DOWNLOAD'
                    className={classes.button}
                    size='large'
                    color='inherit'
                    style={setActiveStyle('downloads')}
                  >
                    <Link tab='TAB_DOWNLOAD' to='/downloads' color='inherit'>
                      Downloads
                    </Link>
                  </Button>
                </Typography>
                <Typography className={classes.contact}>
                  <Button
                    onClick={handleTabClick}
                    tab='TAB_CONTACT'
                    className={classes.button}
                    size='large'
                    color='inherit'
                    style={setActiveStyle('contact')}
                  >
                    <Link tab='TAB_CONTACT' to='/contact' color='inherit'>
                      Contact
                    </Link>
                  </Button>
                </Typography>
                <Button href={data.site.siteMetadata.githubRepo} color='inherit' className={classes.github}>
                  <GitHubIcon/>
                </Button>
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}