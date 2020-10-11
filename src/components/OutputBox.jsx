import { Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flex:"1",
    padding:"0.5em",
    minHeight:"4em",
    backgroundColor:"black",
    fontSize: "16px",
    justifyContent:"flex-end",
    wordBreak:"break-all",
    alignItems:"flex-end",
    color:"white",
    '& > *': {
      margin: theme.spacing(0.1),
    },
  },
}));

const OutputBox =(props)=>{
  const classes = useStyles();
  return (
    <Paper 
      className={classes.root}>
        <div>
            {props.children}
        </div>
        
    </Paper>
  )
}

export default OutputBox;