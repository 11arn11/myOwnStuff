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

import { recipes } from "../data/recipes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

export default ({ meal: { mealType, recipesId } }) => {
  const classes = useStyles();
  const icon = getIconMealType(mealType);
  console.log("recipesId", recipesId);
  const recipeList = recipes.filter(
    (recipe) => recipesId && recipesId.indexOf(recipe.id) !== -1
  );
  console.log("recipeList", recipeList);
  return (
    <ListItem className={classes.root}>
      <ListItemIcon>
        <Avatar>{icon}</Avatar>
      </ListItemIcon>
      {recipeList.map((recipe) => (
        <ListItemText primary={recipe.name} secondary={mealType} />
      ))}
      <ListItemSecondaryAction>
        <IconButton>
          <FcInfo />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
