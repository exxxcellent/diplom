import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import type { Metadata } from 'next';
import './globals.css';
import AppProvider from './providers/providers';

export const metadata: Metadata = {
    title: 'News App',
    description: 'Application about news',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            suppressHydrationWarning>
            <head>
                <ColorSchemeScript defaultColorScheme="auto" />
            </head>
            <body className={`antialiased`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
