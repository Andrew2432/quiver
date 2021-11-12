import * as React from 'react';

import Pagination from 'react-bootstrap/Pagination';

import {
  PaginationProps,
  CustomPaginationProps,
} from '../../../types/PaginationProps';

interface PaginateItemsProps {
  pages: PaginationProps;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function PaginateItems({
  pages,
  handleClick,
}: PaginateItemsProps): JSX.Element {
  return (
    <div className={`mx-auto text-center`}>
      <Pagination>
        {React.Children.toArray(
          [...Array(pages.totalPages)].map((_, index) => {
            return (
              <Pagination.Item
                active={index + 1 === pages.currentPage}
                onClick={(e) => handleClick(e)}
                data-page={index + 1}
              >
                {index + 1}
              </Pagination.Item>
            );
          }),
        )}
      </Pagination>
    </div>
  );
}

function CustomPagination({
  mutate,
  pageRef,
  totalItems,
  totalItemsPages,
  perPage = 10,
}: CustomPaginationProps): JSX.Element | null {
  pageRef.current.nextPage = totalItemsPages > 1 ? 2 : 1;
  pageRef.current.totalPages = totalItemsPages;

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    try {
      e.preventDefault();
      const pageClicked = parseInt((e.target as any).dataset['page']);

      if (pageClicked !== pageRef.current.currentPage) {
        if (pageClicked === pageRef.current.nextPage) {
          pageRef.current.previousPage = pageRef.current.currentPage;
          pageRef.current.currentPage = pageRef.current.nextPage;

          if (pageRef.current.nextPage + 1 <= pageRef.current.totalPages) {
            pageRef.current.nextPage = pageRef.current.nextPage + 1;
          }
        } else if (pageClicked === pageRef.current.previousPage) {
          pageRef.current.nextPage = pageRef.current.currentPage;
          pageRef.current.currentPage = pageRef.current.previousPage;

          if (pageRef.current.previousPage - 1 >= 1) {
            pageRef.current.previousPage = pageRef.current.previousPage - 1;
          }
        } else {
          pageRef.current.currentPage = pageClicked;

          if (pageClicked + 1 <= pageRef.current.totalPages) {
            pageRef.current.nextPage = pageClicked + 1;
          } else {
            pageRef.current.nextPage = pageClicked;
          }

          if (pageClicked - 1 >= 1) {
            pageRef.current.previousPage = pageClicked - 1;
          } else {
            pageRef.current.previousPage = pageClicked;
          }
        }
      }

      mutate();
    } catch (error) {
      console.error(error);
    }
  }

  return totalItems > perPage ? (
    <PaginateItems pages={pageRef.current} handleClick={handleClick} />
  ) : null;
}

export default CustomPagination;
