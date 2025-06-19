'use client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const theme = createTheme({
    primaryColor: 'blue',
});

export default function AppProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <Notifications />
                {children}
            </MantineProvider>
        </QueryClientProvider>
    );
}
