import Header from '@/widgets/header';
import SearchNews from '@/widgets/search-news';
import { Container, Flex } from '@mantine/core';

type Params = Promise<{ q: string }>;

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Params;
}) {
    const { q } = await searchParams;
    return {
        title: `Поиск: ${q}`,
    };
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Params;
}) {
    const { q } = await searchParams;

    return (
        <Flex
            className="w-full h-screen"
            direction="column">
            <Header />
            <Container
                className="h-full w-full"
                size="lg">
                <SearchNews q={q} />
            </Container>
        </Flex>
    );
}
