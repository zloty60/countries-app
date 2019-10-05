// 27657145 => 27,657,145

export default function useFormatNumber(number) {
  if (number === null) {
    return "Brak danych";
  }
  const formattedNumber = String(number).replace(/(.)(?=(\d{3})+$)/g, "$1,");

  return formattedNumber;
}
