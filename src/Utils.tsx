import {
  GiCroissant,
  GiForkKnifeSpoon,
  GiNoodles,
  GiStrawberry
} from "react-icons/gi";
import { SiGitea } from "react-icons/si";

export const getDaysBetweenDates = (startDate, endDate) => {
  var now = startDate.clone(),
    dates = [];
  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format("YYYY-MM-DD"));
    now.add(1, "days");
  }
  return Array.from(new Set(dates));
};

export const getIconMealType = (mealType) => {
  switch (mealType) {
    case "breakfast":
      return <GiCroissant />;
    case "morning_snack":
      return <GiStrawberry />;
    case "lunch":
      return <GiNoodles />;
    case "afternoon_snack":
      return <SiGitea />;
    case "dinner":
      return <GiForkKnifeSpoon />;
  }
};
