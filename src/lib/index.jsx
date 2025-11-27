import React from "react";

export const DateDisplay = () => {
  // Get the current date
  const currentDate = new Date();

  // Array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day name, month name, and the date
  const dayName = dayNames[currentDate.getDay()]; // Get the current day of the week
  const monthName = monthNames[currentDate.getMonth()]; // Get the current month
  const date = currentDate.getDate(); // Get the current date of the month

  return (
    <div>
      <p className="font-Manrope tracking-tight -mt-1 ">{`${dayName}, ${monthName} ${date}`}</p>
    </div>
  );
};
