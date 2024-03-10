// API res will return dt variable in unix/epoch timestamp
// Converting epoch to human-readable data

export default function EpochConverter(epochTime) {
  const date = new Date(epochTime * 1000);
  const singaporeTimeOffset = 8 * 60 * 60 * 1000; // Offset to SGT (GMT+8)
  
  // Construct a new date with UTC components
  const dateUTC = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  dateUTC.setTime(dateUTC.getTime() + singaporeTimeOffset);   // SGT Timezone offset

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Singapore",
  };
  return dateUTC.toLocaleString("en-SG", options);
}
