import Button from './common/Button';

export default function ShowInfoModal() {
    return (
        <div className="absolute inset-0 bg-[#ffffff0f] backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#111111] rounded-md p-3 w-[345px]">
                <div className="flex justify-between items-center mb-1 p-3">
                    <h2 className="text-[#ffffff] text-xl font-bold">Visualizar Informações</h2>
                    <button className="text-[#5e5e5e]">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="h-[1px] w-full bg-[#303030] opacity-20 mb-1"></div>

                <div className="p-4 flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                        <label className="text-[#ffffff] text-sm font-semibold">Senha</label>
                        <div className="px-3 py-3 bg-[#1b1b1b] border border-[#303030] rounded-lg">
                            <input
                                placeholder="Digite sua senha"
                                className="bg-transparent text-[#777777] text-xs w-full outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-[#303030] opacity-20 mb-1"></div>

                <div className="p-3 flex justify-end space-x-3">
                    <Button
                        key="cancel_btn"
                        color="bg-[#303030]"
                        textColor="text-[#ffffff]"
                        hoverColor="hover:bg-[#404040]"
                        text="Cancelar"
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
