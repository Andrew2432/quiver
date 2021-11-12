export interface GenericConnectionType<T> {
    aggregate: {
        count: number;
        totalCount?: number;
    };
}
