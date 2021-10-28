export interface PaginationProps {
  previousPage: number;
  currentPage: number;
  nextPage: number;
  totalPages: number;
  [key: string]: any;
}

export interface CustomPaginationProps {
  pageRef: React.MutableRefObject<PaginationProps>;
  mutate: () => any;
  totalItems: number;
  totalItemsPages: number;
  perPage?: number;
}
