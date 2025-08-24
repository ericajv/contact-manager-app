import Button from './common/Button';
import Photo from './common/Photo';
import TextInput from './common/TextInput';

export interface ContactModalProps {
    name?: string;
    reference?: string;
    phoneNumber?: string;
    email?: string;
    photo?: string;
    closeModalFn: () => void;
}

export default function ContactModal({
    name,
    reference,
    phoneNumber,
    email,
    photo,
    closeModalFn
}: ContactModalProps) {
    return (
        <div className="absolute inset-0 bg-[#ffffff0f] backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#111111] rounded-md p-3 w-[345px]">
                <div className="flex justify-between items-center mb-1 p-3">
                    <h2 className="text-[#ffffff] text-xl font-bold">
                        {name ? 'Editar Contato' : 'Adicionar contato'}
                    </h2>
                    <button className="text-[#5e5e5e]" onClick={closeModalFn}>
                        <span className="material-symbols-outlined hover:bg-[#404040]">close</span>
                    </button>
                </div>

                <div className="h-[1px] w-full bg-[#303030] opacity-20 mb-1"></div>

                <div className="p-4 flex flex-col space-y-4">
                    <Photo url={photo} />

                    <TextInput label="Nome" placeholder="Nome do contato" value={name} />
                    <TextInput
                        label="Telefone"
                        placeholder="Número de telefone"
                        value={phoneNumber}
                    />
                    <TextInput
                        label="Referência"
                        placeholder="Referência do contato"
                        value={reference}
                    />
                    <TextInput label="E-mail" placeholder="Email do contato" value={email} />
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
                    />
                </div>
            </div>
        </div>
    );
}
