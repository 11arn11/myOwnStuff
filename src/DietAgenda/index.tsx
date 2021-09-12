import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import moment from "moment";
import { scroller } from "react-scroll";
import ScheduledDay from "./ScheduledDay";
import SelectMealDialog from "./SelectMealDialog";

import { getDaysBetweenDates } from "../Utils";
import { scheduledMeals } from "../data/scheduledMeals";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 600
    },
    listSection: {
      backgroundColor: "inherit"
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0
    },
    subheader: {
      color: "red",
      backgroundColor: "lightgrey",
      textAlign: "left"
    }
  })
);

const startDate = moment().add(-30, "days");
const endDate = moment().add(30, "days");

const days = getDaysBetweenDates(startDate, endDate);

const scrollToToday = () => {
  const today = moment().format("YYYY-MM-DD");
  scroller.scrollTo("date-" + today, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    containerId: "lista"
  });
};

const now = moment();

export default () => {
  const classes = useStyles();

  useEffect(() => {
    scrollToToday();
  });

  const [selectMealOpen, setSelectMealOpen] = useState(false);
  const handleOpenSelectMeal = () => {
    setSelectMealOpen(true);
  };

  return (
    <>
      <SelectMealDialog open={selectMealOpen} setOpen={setSelectMealOpen} />
      <List id="lista" className={classes.root} subheader={<li />}>
        {days.map((date) => {
          const scheduledDayMeals = scheduledMeals.filter(
            (day) => day.date === date
          );
          return (
            <li key={`date-${date}`} className={`date-${date}`}>
              <ul>
                <ListSubheader className={classes.subheader}>
                  {moment(date).calendar(null, {
                    lastDay: "[Yesterday] ddd D MMM",
                    sameDay: "[Today] ddd D MMM",
                    nextDay: "[Tomorrow] ddd D MMM",
                    lastWeek: "ddd D MMM",
                    nextWeek: "ddd D MMM",
                    sameElse: "ddd D MMM"
                  })}
                </ListSubheader>
                <ScheduledDay
                  now={now}
                  date={date}
                  meals={scheduledDayMeals}
                  handleOpenSelectMeal={handleOpenSelectMeal}
                />
              </ul>
            </li>
          );
        })}
      </List>
    </>
  );
};
