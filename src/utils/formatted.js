export const splitIntoTwoColumns = (array) => {
  const midIndex = Math.ceil(array?.length / 2);
  const leftColumn = array?.slice(0, midIndex);
  const rightColumn = array?.slice(midIndex);

  return { leftColumn, rightColumn };
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};
