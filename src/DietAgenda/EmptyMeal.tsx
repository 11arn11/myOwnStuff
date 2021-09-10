import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemAvatar";

import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";

import { getIconMealType } from "../Utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

export default ({ type, handleOpenSelectMeal, enabled }) => {
  const classes = useStyles();
  const icon = getIconMealType(type);
  return (
    <ListItem className={classes.root}>
      <ListItemIcon>
        <Avatar>{icon}</Avatar>
      </ListItemIcon>
      <ListItemText secondary={type} />
      {enabled && (
        <ListItemSecondaryAction>
          <IconButton>
            <GrAddCircle onClick={handleOpenSelectMeal} />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};
