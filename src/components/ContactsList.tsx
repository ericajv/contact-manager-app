import ContactItem from './ContactItem';

export default function ContactsList() {
    const contacts = [
        {
            name: 'Carmen Lúcia',
            reference: 'Trabalho',
            phoneNumber: '(16) 3537-7333',
            email: 'carmen.lucia@example.com',
            photo: 'https://images.unsplash.com/photo-1653549549472-45bd72dcf13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjYXJtZW4lMjBsJUMzJUJBY2lhfGVufDB8fHx8MTc1NTk3MTgzOXww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            name: 'Cristina Silveira',
            reference: 'Colega',
            phoneNumber: '(19) 2337-5664',
            email: 'cristinasilveira98@example.com',
            photo: 'https://images.unsplash.com/photo-1605141450911-71256810c12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjcmlzdGluYSUyMHNpbHZlaXJhfGVufDB8fHx8MTc1NTk3MTg0MHww&ixlib=rb-4.1.0&q=80&w=1080'
        }
    ];

    return (
        <div className="flex-1 flex flex-col">
            <div className="mb-[20px]">
                <span className="text-[14px] font-bold text-white">C</span>
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

                <div className="flex flex-col">
                    {contacts.map((contact, idx) => (
                        <ContactItem
                            name={contact.name}
                            reference={contact.reference}
                            phoneNumber={contact.phoneNumber}
                            email={contact.email}
                            photo={contact.photo}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
