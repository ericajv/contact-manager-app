import AlphabetIndex from '@/components/AlphabetIndex';
import ContactsList from '@/components/ContactsList';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: App,
    beforeLoad: () => {
        const token = localStorage.getItem('@contactmanager.token');
        if (!token) {
            throw redirect({ to: '/login' });
        }
    }
});

function App() {
    return (
        <div className="flex min-h-screen bg-[#111111]">
            <Sidebar userEmail="ericaj.vieira13@gmail.com" />

            <div className="flex-1 p-[40px]">
                <div className="bg-[#1b1b1b] rounded-[40px] p-[40px] flex flex-col space-y-[32px] max-h-svh">
                    <Navbar />

                    {/* Content */}
                    <div className="flex space-x-[48px]">
                        <AlphabetIndex />

                        {/* Contact list */}
                        <ContactsList />
                    </div>
                </div>
            </div>
        </div>
    );
}
