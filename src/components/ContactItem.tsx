import { useState } from 'react';
import Modal from './common/Modal';
import ContactModal from './ContactModal';
import { deleteContact } from '@/api/contacts';
import { useQueryClient } from '@tanstack/react-query';

export interface ContactItemProps {
    id: string;
    name: string;
    reference: string;
    phoneNumber: string;
    email: string;
    photo: string;
}

export default function ContactItem({
    id,
    name,
    reference,
    phoneNumber,
    email,
    photo
}: ContactItemProps) {
    const [isModalOpen, setModalOpen] = useState(false);

    const queryClient = useQueryClient();

    async function handleDeleteContact(id: string) {
        if (confirm('Você deseja excluir este contato?')) {
            await deleteContact(id);
            setModalOpen(false);
            await queryClient.invalidateQueries({ queryKey: ['contacts-list'] });
        }
    }

    return (
        <div className="flex items-center py-[12px] px-[12px] border-b border-[#303030]">
            <div className="w-[300px] flex">
                <img
                    src={photo}
                    alt={name}
                    className="w-[44px] h-[44px] rounded-[12px] mr-[12px]"
                />
                <div className="flex flex-col justify-center">
                    <div className="px-[4px] py-[4px]">
                        <span className="text-[14px] text-[#e2e2e2]">{name}</span>
                    </div>
                    <div className="px-[4px] py-[4px]">
                        <span className="text-[14px] text-[#e2e2e2]">{reference}</span>
                    </div>
                </div>
            </div>
            <div className="w-[140px] flex items-center">
                <div className="px-[4px] py-[4px]">
                    <span className="text-[14px] text-[#e2e2e2]">{phoneNumber}</span>
                </div>
            </div>
            <div className="w-[191px] flex items-center">
                <div className="px-[4px] py-[4px]">
                    <span className="text-[14px] text-[#e2e2e2]">{email}</span>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-end space-x-[8px]">
                <button
                    className="flex items-center px-[8px] py-[8px] border border-[#303030] rounded-[8px] transition-colors hover:bg-[#2a2a2a]"
                    onClick={() => setModalOpen(true)}
                >
                    <span className="material-symbols-outlined text-[12px] text-white mr-[4px]">
                        edit
                    </span>
                    <span className="text-[12px] font-semibold text-white">Editar</span>
                </button>
                <button 
                    className="w-[28px] h-[28px] border border-[#303030] rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#ff4040]"
                    onClick={() => handleDeleteContact(id)}
                >
                    <span className="material-symbols-outlined text-[12px] text-white">delete</span>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(true)}>
                <ContactModal
                    contact={{
                        name,
                        // reference: '',
                        phone: phoneNumber,
                        email,
                        photo
                    }}
                    contactId={id}
                    closeModalFn={() => setModalOpen(false)}
                />
            </Modal>
        </div>
    );
}
