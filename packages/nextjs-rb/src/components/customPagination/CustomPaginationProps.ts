import {
  ApolloError,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';
import { Exact } from '@quiver/graphql-client';
import { PaginationCursor } from '@quiver/types';
import React from 'react';

export interface UseHookProps<T>
  extends QueryHookOptions<T, OperationVariables> {
  variables: {
    limit: number;
    offset: number;
    query?: string;
  };
  [key: string]: unknown;
}

export interface PaginateItemsProps {
  cursorRef: React.MutableRefObject<PaginationCursor>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  paginationCount: number;
}

export interface UseCustomPaginationHookProps<T> {
  useHook: ({
    variables,
  }: UseHookProps<T>) => QueryResult<T, Exact<UseHookProps<T>>>;
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
