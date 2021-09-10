import React from "react";
import moment from "moment";
import ScheduledMeal from "./ScheduledMeal";
import EmptyMeal from "./EmptyMeal";

const meal_type = [
  "breakfast",
  "morning_snack",
  "lunch",
  "afternoon_snack",
  "dinner"
];

export default ({ now, date, meals, handleOpenSelectMeal }) => {
  const isPast = moment(date).isBefore(now, "day");
  return meal_type.map((type) => {
    const mealsOfType = meals.filter((meal) => meal.mealType === type);
    return mealsOfType.length ? (
      mealsOfType.map((meal) => (
        <ScheduledMeal key={`item-${date}-${meal.id}`} meal={meal} />
      ))
    ) : (
      <EmptyMeal
        key={`item-${date}-${type}`}
        type={type}
        handleOpenSelectMeal={handleOpenSelectMeal}
        enabled={!isPast}
      />
    );
  });
};
