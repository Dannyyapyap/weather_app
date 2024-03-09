export default function EpochConverter(epochTime) {
  const date = new Date(epochTime * 1000);

  // Get Singapore Time offset in minutes (GMT+8)
  const singaporeTimeOffset = 8 * 60 * 60 * 1000;

  // Adjust the date to Singapore Time
  date.setMinutes(date.getMinutes() + singaporeTimeOffset);

  // Format the date and time string
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Use 12-hour format
    timeZone: "Asia/Singapore",
  };

  return date.toLocaleString("en-SG", options);
}
