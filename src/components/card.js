import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from '../components/Link';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: '150px',
    margin: theme.spacing(2),
    backgroundColor: '#101012'
  },
  cardBody: {
    display: 'flex',
    minHeight: '100px',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardButton: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      minHeight: '64px',
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      textAlign: 'unset'
    }
  },
  GatsbyLink: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  }
}));


function SimpleCard(props) {
  const classes = useStyles();
  const { content } = props;
  const { href } = props;
  const { linkText } = props;
  const { isGatsbyLink } = props;

  return (
    <Card className={classes.card} >
      <CardContent className={classes.cardBody}>
        <Typography align="center">
          {content}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {isGatsbyLink &&
          <Button className={classes.cardButton}><Link className={classes.GatsbyLink} to={href}>{linkText}</Link></Button>
        }
        {!isGatsbyLink &&
          <Button href={href} className={classes.cardButton}>{linkText}</Button>
        }
      </CardActions>
    </Card>
  );
}

export default SimpleCard;


SimpleCard.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
  linkText: PropTypes.string,
  isGatsbyLink: PropTypes.bool,
};

SimpleCard.defaultProps = {
  isGatsbyLink: false,
};