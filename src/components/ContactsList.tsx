import { useQuery } from '@tanstack/react-query';
import ContactItem from './ContactItem';
import { getContacts } from '@/api/contacts';

type ContactsListProps = {
    search?: string;
};

export default function ContactsList({ search }: ContactsListProps) {
    const { data, isFetching } = useQuery({
        queryKey: ['contacts-list'],
        queryFn: () => getContacts({ search }),
        refetchOnWindowFocus: false
    });

    return (
        <div className="flex-1 flex flex-col">
            <div className="mb-[20px]">
                <span className="text-[14px] font-bold text-white">{search ?? 'C'}</span>
                <div className="h-[1px] bg-white opacity-20 mt-[20px]"></div>
            </div>

            <div className="flex flex-col">
                <div className="flex mb-[20px]">
                    <span className="w-[316px] text-[12px] font-bold uppercase text-white opacity-40">
                        Nome
                    </span>
                    <span className="w-[140px] text-[12px] font-bold uppercase text-white opacity-40">
                        telefone
                    </span>
                    <span className="w-[178px] text-[12px] font-bold uppercase text-white opacity-40">
                        email
                    </span>
                </div>

                {isFetching && <div className="p-4 text-center text-gray-500">Loading...</div>}

                {!isFetching && <div className="flex flex-col">
                    {data?.contacts.map(contact => (
                        <ContactItem
                            id={contact.id}
                            name={contact.name}
                            reference={''}
                            phoneNumber={contact.phone}
                            email={contact.email}
                            photo={contact.photo ?? ''}
                            key={contact.id}
                        />
                    ))}
                </div>}
            </div>
        </div>
    );
}
