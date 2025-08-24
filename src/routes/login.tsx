import Button from '@/components/common/Button';
import { useAuth } from '@/hookes/useAuth';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/login')({
    component: App
});

function App() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email: string, password: string) => {
        try {
            await login(email, password);
        } catch (error) {
            alert(error);
        }

        navigate({ to: '/' });
    };
    
    return (
        <div className="flex h-screen w-full bg-black overflow-hidden">
            <div className="w-2/3 h-full relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('../../public/banner.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>
            </div>

            <div className="w-1/3 h-full bg-black flex flex-col">
                <div className="flex justify-end p-8">
                    <p className="text-gray-300 text-sm">
                        Não tem uma conta?{' '}
                        <span className="text-lime-400 hover:underline cursor-pointer">
                            <Link to="/register">Criar conta</Link>
                        </span>
                    </p>
                </div>

                <div className="flex-1 flex flex-col justify-center px-16">
                    <h2 className="text-white text-2xl font-semibold mb-8">Acessar conta</h2>

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

                    <div className="mb-8">
                        <label className="block text-white mb-2">Senha</label>
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            className="w-full bg-black border border-gray-700 rounded text-gray-300 p-2.5 focus:outline-none focus:border-lime-400 transition-colors"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button
                            color="bg-lime-400"
                            hoverColor="bg-lime-500"
                            textColor="text-black"
                            text="Acessar conta"
                            onClickFn={async () => await handleLogin(email, password)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
