export default ({ release_date: dateA }, { release_date: dateB }) =>
  parseInt(dateB, 10) - parseInt(dateA, 10);
