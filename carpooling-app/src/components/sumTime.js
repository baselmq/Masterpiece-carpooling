export function sumTime(startTime, timeToAdd) {
  // Parse the start time
  const startTimeParts = startTime.split(" ");
  const timePart = startTimeParts[0];
  let isAM = startTimeParts[1] === "AM";

  const [startHours, startMinutes] = timePart.split(":").map(Number);

  // Split the timeToAdd string into hours and minutes
  const timeToAddParts = timeToAdd.split(" ");
  let hours = 0;
  let minutes = 0;

  for (let i = 0; i < timeToAddParts.length; i += 2) {
    if (timeToAddParts[i + 1] === "hours" || timeToAddParts[i + 1] === "hour") {
      hours += parseInt(timeToAddParts[i]);
    } else if (
      timeToAddParts[i + 1] === "mins" ||
      timeToAddParts[i + 1] === "min"
    ) {
      minutes += parseInt(timeToAddParts[i]);
    }
  }

  // Calculate the new time
  let newHours = startHours + hours;
  let newMinutes = startMinutes + minutes;

  // Adjust for rollover
  if (newMinutes >= 60) {
    newHours += Math.floor(newMinutes / 60);
    newMinutes %= 60;
  }

  if (newHours >= 12) {
    newHours %= 12;
    isAM = !isAM;
  }

  // Format the result without leading zero for the hour
  const formattedHours = newHours === 0 ? 12 : newHours;
  const newTime = `${formattedHours}:${newMinutes.toString().padStart(2, "0")}`;
  const newAMPM = isAM ? "AM" : "PM";
  return `${newTime} ${newAMPM}`;
}
