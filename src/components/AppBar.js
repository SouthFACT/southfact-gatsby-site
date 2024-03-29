import React, { useEffect, useState, useRef, useContext } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
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

const StyledLogoImg = styled('img')(({ theme }) => ({
  maxWidth: theme.spacing(7.2),
  margin: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    maxWidth: theme.spacing(5),
    margin: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const StyledShortTextSpan = styled('span')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  }
}));

const StyledLongTextSpan = styled('span')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

const styles = (theme) => ({
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
});

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
      case `/${data.site.siteMetadata.githubRepoName}/about/`:
        dispatch({ type: 'TAB_ABOUT' });
        break;
      case `/${data.site.siteMetadata.githubRepoName}/about`:
        dispatch({ type: 'TAB_ABOUT' });
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
        case '/about':
          dispatch({ type: 'TAB_ABOUT' });
          break;
        case '/about/':
          dispatch({ type: 'TAB_ABOUT' });
          break;
      default:
        dispatch({ type: 'TAB_LEARN' });
        break;
    }
  }, [dispatch, data.site.siteMetadata.githubRepoName, path]);

  return (
      <ThemeProvider theme={defaultTheme}>
        <AppBar sx={theme => styles(theme).root} position="static" >
          <Grid container justifyContent="center" >
            <Grid item xs={12} sm={1}>
                <StyledLogoImg variant="square" alt="southfact" src={Logo}/>
            </Grid>
            <Grid item xs={12} sm={11}>
              <Box py={1} sx={theme => styles(theme).toolbar}>
                <Typography variant="h5" sx={theme => styles(theme).titleLong}>
                  {data.site.siteMetadata.description}
                </Typography>
                <Typography variant="h5" sx={theme => styles(theme).titleShort}>
                  {data.site.siteMetadata.shortDescription}
                </Typography>
              </Box>
              <Toolbar mr={10} sx={theme => styles(theme).toolbar}>
                <Button
                  sx={theme => styles(theme).button}
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
                  tab='TAB_CUSTOM_REQUEST'
                  sx={theme => styles(theme).button}
                  size='large'
                  color='inherit'
                  href={data.site.siteMetadata.customRequestLink}
                  target="_blank"
                  style={setActiveStyle('custom request')}
                >
                  <StyledLongTextSpan>Custom Request</StyledLongTextSpan>
                  <StyledShortTextSpan>Requests</StyledShortTextSpan>
                </Button>
                <Typography sx={theme => styles(theme).button}>
                  <Button
                    onClick={handleTabClick}
                    tab='TAB_DOWNLOAD'
                    sx={theme => styles(theme).button}
                    size='large'
                    color='inherit'
                    style={setActiveStyle('downloads')}
                  >
                    <Link tab='TAB_DOWNLOAD' to='/downloads' color='inherit'>
                      Downloads
                    </Link>
                  </Button>
                </Typography>
                <Typography sx={theme => styles(theme).button}>
                  <Button
                    onClick={handleTabClick}
                    tab='TAB_ABOUT'
                    sx={theme => styles(theme).button}
                    size='large'
                    color='inherit'
                    style={setActiveStyle('about')}
                  >
                    <Link tab='TAB_DOWNLOAD' to='/about' color='inherit'>
                      About
                    </Link>
                  </Button>
                </Typography>
                <Typography sx={theme => styles(theme).contact}>
                  <Button
                    onClick={handleTabClick}
                    tab='TAB_CONTACT'
                    sx={theme => styles(theme).button}
                    size='large'
                    color='inherit'
                    style={setActiveStyle('contact')}
                  >
                    <Link tab='TAB_CONTACT' to='/contact' color='inherit'>
                      Contact
                    </Link>
                  </Button>
                </Typography>
                <Button href={data.site.siteMetadata.githubRepo} color='inherit' sx={theme => styles(theme).github}>
                  <GitHubIcon/>
                </Button>
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
      </ThemeProvider>
  );
}