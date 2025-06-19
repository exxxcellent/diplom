import { Pagination } from '@mantine/core';

interface SearchPaginationProps {
    activePage: number;
    setActivePage: (activePage: number) => void;
    total: number;
}

export default function SearchPagination({
    activePage,
    setActivePage,
    total,
}: SearchPaginationProps) {
    return (
        <Pagination
            className="w-full flex justify-center py-10"
            value={activePage}
            onChange={setActivePage}
            total={5}
            siblings={1}
            boundaries={1}
            radius="md"
        />
    );
}
