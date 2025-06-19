import { sources } from '@/shared/mocks/sources';
import { Flex } from '@mantine/core';
import SourceNews from './source-news';
import TopNews from './top-news';

export default function News() {
    return (
        <Flex
            className="min-h-full"
            direction="column"
            align="center"
            justify="center"
            gap="xl">
            <TopNews />
            {sources.map((source) => {
                if (!source.id) return null;
                return (
                    <SourceNews
                        source={source}
                        key={source.id}
                    />
                );
            })}
        </Flex>
    );
}
