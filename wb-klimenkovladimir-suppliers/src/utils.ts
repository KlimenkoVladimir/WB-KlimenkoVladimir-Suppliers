export function formatDate(inputDate: string) {
  const parts = inputDate.split("-");

  if (parts.length === 3) {
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    return `${day}.${month}.${year}`;
  } else {
    return "";
  }
}
