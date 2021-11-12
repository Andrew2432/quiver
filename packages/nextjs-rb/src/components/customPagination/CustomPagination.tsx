import { Children } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {
  CustomPaginationProps,
  PaginateItemsProps,
} from './CustomPaginationProps';

function PaginateItems({
  cursorRef,
  paginationCount,
  handleClick,
}: PaginateItemsProps): JSX.Element {
  return (
    <div className={`mx-auto text-center`}>
      <Pagination>
        {Children.toArray(
          [...Array(paginationCount)].map((_, index) => {
            return (
              <Pagination.Item
                active={index + 1 === cursorRef.current.currentPage}
                onClick={(e) => handleClick(e)}
                data-page={index + 1}
                key={index}
              >
                {index + 1}
              </Pagination.Item>
            );
          })
        )}
      </Pagination>
    </div>
  );
}

function CustomPagination({
  cursorRef,
  handlePaginationClick,
  totalItems,
}: CustomPaginationProps) {
  const { limit } = cursorRef.current;
  let paginationCount = ~~(totalItems / limit);

  if (totalItems % limit > 0) {
    paginationCount += 1;
  }

  return (
    <>
      {totalItems > limit && (
        <PaginateItems
          cursorRef={cursorRef}
          paginationCount={paginationCount}
          handleClick={handlePaginationClick}
        />
      )}
    </>
  );
}

export default CustomPagination;
