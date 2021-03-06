import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Avatar,IconButton} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function ProfileAvatar() {
  const classes = useStyles();


  return (

    <div className={classes.root}>

      <input accept="image/*"  className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" className={classes.large} />
        </IconButton>
      </label>
    </div>
  );
}