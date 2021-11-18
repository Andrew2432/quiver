import { ApolloError, QueryHookOptions, QueryResult } from '@apollo/client';
import { PaginationCursor } from '@quiver/types';
import React from 'react';

export interface PaginationProps {
  offset: number;
  limit: number;
  [key: string]: unknown;
}

// export interface UseHookProps<T, V> extends QueryHookOptions<T, V> {
//   variables: {
//     offset: number;
//     limit: number;
//     [key: string]: unknown;
//   };
//   [key: string]: unknown;
// }

export interface PaginateItemsProps {
  cursorRef: React.MutableRefObject<PaginationCursor>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  paginationCount: number;
}

export interface UseCustomPaginationHookProps<T, V extends PaginationProps> {
  useHook: (baseOptions: QueryHookOptions<T, V>) => QueryResult;
  initialOffset?: number;
  initialLimit?: number;
  variables?: Record<string, unknown>;
}

export interface CustomPaginationProps {
  cursorRef: React.MutableRefObject<PaginationCursor>;
  handlePaginationClick: (e: React.MouseEvent<HTMLElement>) => void;
  totalItems: number;
}

export interface UseCustomPaginationReturnProps<T> {
  data: T;
  loading: boolean;
  error?: ApolloError;
  cursorRef: React.MutableRefObject<PaginationCursor>;
  handlePaginationClick: (e: React.MouseEvent<HTMLElement>) => void;
}
