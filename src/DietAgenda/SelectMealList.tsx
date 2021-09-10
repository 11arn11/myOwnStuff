import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import { recipes } from "../data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper
    }
  })
);

function renderRow(props: ListChildComponentProps) {
  const { index, style, data } = props;
  return (
    <ListItem button style={style} key={index} onClick={data.handleSelect}>
      <ListItemText primary={recipes[index].name} />
    </ListItem>
  );
}

export default ({ handleSelect }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FixedSizeList
        height={400}
        width={300}
        itemSize={46}
        itemCount={recipes.length}
        itemData={{ handleSelect }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
};
