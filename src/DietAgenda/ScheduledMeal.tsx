import React from "react";
import { FcInfo } from "react-icons/fc";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemAvatar";
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

export default ({ meal: { mealType, recipeLabel } }) => {
  const classes = useStyles();
  const icon = getIconMealType(mealType);
  return (
    <ListItem className={classes.root}>
      <ListItemIcon>
        <Avatar>{icon}</Avatar>
      </ListItemIcon>
      <ListItemText primary={recipeLabel} secondary={mealType} />
      <ListItemSecondaryAction>
        <IconButton>
          <FcInfo />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
