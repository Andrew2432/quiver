// @ts-ignore
export interface GenericConnectionType<T> extends `${T}Connection` {
  aggregate: {
    count: number;
    totalCount?: number;
  };
}
