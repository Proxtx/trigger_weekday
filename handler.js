let daySelect = triggerGui.getElementsByClassName("daySelect")[0];

getTriggerConfiguration(() => {
  return {
    text:
      "weekday is " +
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][daySelect.value],
    data: {
      day: Number(daySelect.value),
    },
  };
});
