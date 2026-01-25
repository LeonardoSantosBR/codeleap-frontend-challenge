export type PaginationProps = {
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  onChange: (page: number) => void;
};