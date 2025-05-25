export const getTopHeight = (rowHeight: number, start: number) => {
  return rowHeight * start;
};
export const getBottomHeight = (
  rowHeight: number,
  total: number,
  start: number,
  visibleRows: number
) => {
  return rowHeight * (total - (start + visibleRows));
};
