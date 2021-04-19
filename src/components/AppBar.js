import React, { useEffect, useState, useRef, useContext } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Box from '@material-ui/core/Box';
import Logo from "../../static/img/logo.png"
import Grid from '@material-ui/core/Grid';

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#101012'
  },
  titleLong: {
    display: 'block',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  titleShort: {
    display: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      fontSize: '1.33rem',
      marginLeft: theme.spacing(1)
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '1.15rem',
    }
  },
  longText: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  shortText: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
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
    [theme.breakpoints.down('xs')]: {
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
    [theme.breakpoints.down('sm')]: {
      maxWidth: theme.spacing(5),
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  toolbar: {
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  },
  github: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const defaultTheme = createMuiTheme();

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

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

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

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <AppBar className={classes.root} position="static" >
        <Grid container justify="center" >
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
                href="https://southfact.github.io/southfact-map-v2/dist/#Home"
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
                        <Link to='/about' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          About
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/case-studies' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          Case Studies
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/faqs' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          Frequently Asked Questions
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/guides' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          Guides
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/resources' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          Resources
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link to='/methods' onClick={handleLearMenuClick} tab='TAB_LEARN'>
                          Methods
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popover>
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
    </MuiThemeProvider>
  );
}