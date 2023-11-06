export default function generateDates() {
  const day = Math.floor(Math.random() * 31) + 1;
  const months = [
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
  const month = months[Math.floor(Math.random() * months.length)];
  const year = Math.floor(Math.random() * (2022 - 2000 + 1)) + 2000;
  const names = ["Merlin", "Arthur", "Guinevere", "Lancelot", "Morgana", "Gawain"];
  const name = names[Math.floor(Math.random() * names.length)];

  const randomData = `${day} ${month} ${year}, ${name}`;

  return randomData;
}
