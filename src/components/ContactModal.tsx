import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from './common/Button';
import Photo from './common/Photo';
import TextInput from './common/TextInput';
import { saveContact, type Contact } from '@/api/contacts';
import { useState } from 'react';

type HandleSaveParams = {
    contact: Omit<Contact, 'id'>;
    closeModalFn: () => void;
    id?: string;
};

export interface ContactModalProps {
    contact?: Partial<Omit<Contact, 'id'>>;
    contactId?: string;
    closeModalFn: () => void;
}

export default function ContactModal({ contact: contactProps, contactId, closeModalFn }: ContactModalProps) {
    const [contact, setContact] = useState(contactProps);

    const queryClient = useQueryClient();

    async function handleSave({ contact, closeModalFn, id }: HandleSaveParams) {
        await saveContact(contact, id);
        closeModalFn();
    }
    const { mutate } = useMutation({
        mutationFn: async ({ contact, closeModalFn, id }: HandleSaveParams) =>
            await handleSave({ contact, closeModalFn, id }),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['contacts-list'] });
        },
        onError: async error => alert(error.message)
    });

    return (
        <div className="absolute inset-0 bg-[#ffffff0f] backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#111111] rounded-md p-3 w-[345px]">
                <div className="flex justify-between items-center mb-1 p-3">
                    <h2 className="text-[#ffffff] text-xl font-bold">
                        {contact?.name ? 'Editar Contato' : 'Adicionar contato'}
                    </h2>
                    <button className="text-[#5e5e5e]" onClick={closeModalFn}>
                        <span className="material-symbols-outlined hover:bg-[#404040]">close</span>
                    </button>
                </div>

                <div className="h-[1px] w-full bg-[#303030] opacity-20 mb-1"></div>

                <div className="p-4 flex flex-col space-y-4">
                    <Photo url={contact?.photo} onChange={value => setContact({ ...contact, photo: value })} />

                    <TextInput
                        label="Nome"
                        placeholder="Nome do contato"
                        value={contact?.name}
                        onChange={value => setContact({ ...contact, name: value })}
                    />

                    <TextInput
                        label="Telefone"
                        placeholder="Número de telefone"
                        value={contact?.phone}
                        onChange={value => setContact({ ...contact, phone: value })}
                    />

                    <TextInput
                        label="Referência"
                        placeholder="Referência do contato"
                        value={contact?.reference}
                        onChange={value => setContact({ ...contact, reference: value })}
                    />

                    <TextInput
                        label="E-mail"
                        placeholder="Email do contato"
                        value={contact?.email}
                        onChange={value => setContact({ ...contact, email: value })}
                    />
                </div>

                <div className="h-[1px] w-full bg-[#303030] opacity-20 mb-1"></div>

                <div className="p-3 flex justify-end space-x-3">
                    <Button
                        key="cancel_btn"
                        color="bg-[#303030]"
                        textColor="text-[#ffffff]"
                        hoverColor="hover:bg-[#404040]"
                        text="Cancelar"
                        onClickFn={closeModalFn}
                    />
                    <Button
                        key="save_btn"
                        color="bg-[#c4f120]"
                        textColor="text-[#111111]"
                        hoverColor="hover:bg-[#d5ff30]"
                        text="Salvar"
                        onClickFn={() =>
                            mutate({
                                contact: {
                                    name: contact?.name ?? '',
                                    email: contact?.email ?? '',
                                    phone: contact?.phone ?? '',
                                    photo: contact?.photo ?? '',
                                    reference: contact?.reference ?? '',
                                },
                                closeModalFn,
                                id: contactId
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}
