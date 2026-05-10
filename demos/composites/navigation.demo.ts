export const PaginationDemo = {
  basicPagination() {
    return `<nav aria-label="Pagination">
  <div role="group">
    <button disabled>Previous</button>
    <button>1</button>
    <button aria-current="page">2</button>
    <button>3</button>
    <button>Next</button>
  </div>
</nav>
`;
  },

  linkBasedPagination() {
    return `<nav aria-label="Pagination">
  <div role="group">
    <a href="#" role="button" disabled>Previous</a>
    <a href="#page-1" role="button">1</a>
    <a href="#page-2" role="button" aria-current="page">2</a>
    <a href="#page-3" role="button">3</a>
    <a href="#page-3" role="button">Next</a>
  </div>
</nav>
`;
  },
};
