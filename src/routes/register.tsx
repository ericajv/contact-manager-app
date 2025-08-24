import Banner from '@/components/common/Banner';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/register')({
    component: App
});

function App() {
    return (
        <div className="flex h-screen w-full bg-black overflow-hidden">
            <Banner />

            <div className="w-1/3 h-full bg-black flex flex-col">
                <div className="flex justify-end p-8">
                    <p className="text-gray-300 text-sm">
                        Já tem uma conta?{' '}
                        <span className="text-lime-400 hover:underline cursor-pointer">
                            {' '}
                            <Link to="/login">Entrar</Link>
                        </span>
                    </p>
                </div>

                <div className="flex-1 flex flex-col justify-center px-16">
                    <h2 className="text-white text-2xl font-semibold mb-8">Criar nova conta</h2>

                    <div className="mb-6">
                        <label className="block text-white mb-2">Nome completo</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome completo"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white mb-2">E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white mb-2">Senha</label>
                        <input
                            type="password"
                            placeholder="Crie uma senha forte"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-white mb-2">Confirme a senha</label>
                        <input
                            type="password"
                            placeholder="Digite a senha novamente"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                        />
                    </div>

                    <div className="mb-8">
                        <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">Pelo menos 8 caracteres</span>
                        </div>

                        <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">Contém um número ou símbolo</span>
                        </div>

                        <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">As senhas devem ser iguais</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2.5 rounded transition-colors">
                            Criar conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
