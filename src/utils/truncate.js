export default function TruncOneDecimalPt(...numbers) {
    const truncatedNumbers = numbers.map(number => Math.floor(number * 10) / 10);
    return truncatedNumbers;
  }