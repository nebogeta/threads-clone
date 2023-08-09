import '../globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import Topbar from "@/components/shared/topbar";
import LeftSidebar from "@/components/shared/left-sidebar";
import RightSidebar from "@/components/shared/right-sidebar";
import Bottombar from "@/components/shared/bottom-bar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads application',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            appearance={{

                baseTheme: dark,
            }}
        >
            <html lang="en">
                <body className={inter.className}>
                <Topbar />
                <main className='flex flex-row'>
                    <LeftSidebar />
                    <section className='main-container'>
                        <div className='w-full max-w-4xl'>{children}</div>
                    </section>

                    <RightSidebar />
                </main>
                <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    )
}