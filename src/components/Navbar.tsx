import { useState } from 'react';
import Modal from './common/Modal';
import ContactModal from './ContactModal';

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <h1 className="text-[24px] font-bold text-white">Lista de contatos</h1>
            <div className="flex items-center space-x-[10px]">
                <div className="relative">
                    <div className="h-[39px] bg-[#1b1b1b] border border-[#303030] rounded-[8px] flex items-center px-[12px] py-[12px]">
                        <span className="material-symbols-outlined text-[16px] text-[#777777] mr-[4px]">
                            search
                        </span>
                        <span className="text-[12px] text-[#777777]">Pesquisar</span>
                    </div>
                </div>
                <button
                    className="h-[46px] bg-[#303030] rounded-[12px] flex items-center px-[12px] py-[12px] transition-colors hover:bg-[#3a3a3a]"
                    onClick={() => setModalOpen(true)}
                >
                    <span className="material-symbols-outlined text-[16px] text-white mr-[4px]">
                        add
                    </span>
                    <span className="text-[14px] font-semibold text-white">Adicionar contato</span>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(true)}>
                <ContactModal closeModalFn={() => setModalOpen(false)} />
            </Modal>
        </div>
    );
}
