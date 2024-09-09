export interface IPaginatedResult<T> {
    total: number,
    totalPages: number,
    page: number,
    data: T[]
}
