export interface ApiResponse<T> {
    status: string;
    totalResults: number;
    articles: T[];
}
