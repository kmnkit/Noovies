export const makeImgPath = (img, width = "w500") =>
  `https://image.tmdb.org/t/p/${width}${img}`;

export const getNextPage = (currentPage) => {
  const nextPage = currentPage.page + 1;
  return nextPage > currentPage.total_pages ? null : nextPage;
};

export const loadMore = (hasNextPage, fetchNextPage) => {
  if (hasNextPage) {
    fetchNextPage();
  }
};
