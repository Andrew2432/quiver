import { useRef } from 'react';
import { PaginationCursor } from '../../newTypes/PaginationCursor';
import {
  UseCustomPaginationHookProps,
  UseCustomPaginationReturnProps,
} from './CustomPaginationProps';

function useCustomPagination<T>({
  useHook,
  initialOffset,
  initialLimit,
  variables,
}: UseCustomPaginationHookProps<T>): UseCustomPaginationReturnProps<T> {
  const cursorRef = useRef<PaginationCursor>({
    offset: initialOffset ?? 0,
    limit: initialLimit ?? 3,
    currentPage: 1,
  });

  const { data, loading, error, refetch } = useHook({
    variables: {
      offset: cursorRef.current.offset,
      limit: cursorRef.current.limit,
      ...variables,
    },
  });

  function setCurrentPage(page: number) {
    cursorRef.current.currentPage = page;
    cursorRef.current.offset = cursorRef.current.limit * (page - 1);

    refetch({
      offset: cursorRef.current.offset,
      limit: cursorRef.current.limit,
    });
  }

  function handlePaginationClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const pageClicked = parseInt((e.target as any).dataset['page']);

    setCurrentPage(pageClicked);
  }

  return {
    data,
    loading,
    error,
    handlePaginationClick,
    cursorRef,
  };
}

export default useCustomPagination;
