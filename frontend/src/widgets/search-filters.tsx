import { Grid, Select } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch, IconSortAscending } from '@tabler/icons-react';
import { DateType, SearchType, SortType } from './search-news';

interface SearchFiltersProps {
    sort: SortType;
    setSort: (sort: SortType) => void;
    search: SearchType;
    setSearch: (search: SearchType) => void;
    dates: DateType;
    setDates: (sort: DateType) => void;
}

export default function SearchFilters({
    sort,
    setSort,
    search,
    setSearch,
    dates,
    setDates,
}: SearchFiltersProps) {
    const matches = useMediaQuery('(min-width: 768px)');

    const span = matches ? 6 : 12;

    return (
        <Grid className="w-full">
            <Grid.Col span={span}>
                <Select
                    variant="filled"
                    radius="md"
                    leftSection={<IconSortAscending size={16} />}
                    label="Сортировка по"
                    placeholder="Сортировать по ..."
                    data={['Релевантность', 'Популярность', 'Дата публикации']}
                    defaultValue={sort}
                    onChange={(sortItem) => {
                        if (sortItem) setSort(sortItem as SortType);
                    }}
                />
            </Grid.Col>
            <Grid.Col span={span}>
                <Select
                    variant="filled"
                    radius="md"
                    leftSection={<IconSearch size={16} />}
                    label="Поиск по"
                    placeholder="Искать в ..."
                    data={['Название', 'Описание', 'Контент']}
                    defaultValue={search}
                    onChange={(searchItem) => {
                        if (searchItem) setSearch(searchItem as SearchType);
                    }}
                />
            </Grid.Col>
        </Grid>
    );
}
