import Banner from '@/components/common/Banner';
import { useAuth } from '@/hookes/useAuth';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/register')({
    component: App
});

function App() {
    const { register } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setHasError(
            password.length < 8
            || !passwordRegex.exec(password)?.[0]
            || password !== confirmPassword
        );
    };

    const handlePasswordConfirmChange = (value: string) => {
        setConfirmPassword(value);
        setHasError(password !== confirmPassword);
    };

    const handleRegister = async (name: string, email: string, password: string) => {
        try {
            await register(name, email, password);
        } catch (error) {
            alert(error);
        }

        navigate({ to: '/' });
    };

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
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white mb-2">E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white mb-2">Senha</label>
                        <input
                            type="password"
                            placeholder="Crie uma senha forte"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                            value={password}
                            onChange={e => handlePasswordChange(e.target.value)}
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-white mb-2">Confirme a senha</label>
                        <input
                            type="password"
                            placeholder="Digite a senha novamente"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                            value={confirmPassword}
                            onChange={e => handlePasswordConfirmChange(e.target.value)}
                        />
                    </div>

                    {hasError && <div className="mb-8">
                        {password.length < 8 && <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">Senha deve conter pelo menos 8 caracteres</span>
                        </div>}

                        {!passwordRegex.exec(password)?.[0] && <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">Senha deve conter pelo menos uma letra, um número e um símbolo</span>
                        </div>}

                        {password !== confirmPassword && <div className="flex flex-row items-center space-x-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#e61e32] text-[18px]">
                                    cancel
                                </span>
                            </div>
                            <span className="block text-white">As senhas devem ser iguais</span>
                        </div>}
                    </div>}

                    <div className="flex justify-end">
                        <button 
                            className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2.5 rounded transition-colors"
                            onClick={async () => await handleRegister(name, email, password)}
                        >
                            Criar conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
