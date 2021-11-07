import { ApolloError } from "@apollo/client";
import React from "react";
import { PaginationCursor } from "../../newTypes/PaginationCursor";

export interface UseHookProps {
  variables: {
    limit: number;
    offset: number;
    [x: string]: any;
  };
}

export interface PaginateItemsProps {
  cursorRef: React.MutableRefObject<PaginationCursor>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  paginationCount: number;
}

export interface UseCustomPaginationHookProps<T> {
  useHook: ({ variables }: UseHookProps) => QueryResult<T, Exact<UseHookProps>>;
  initialOffset?: number;
  initialLimit?: number;
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
