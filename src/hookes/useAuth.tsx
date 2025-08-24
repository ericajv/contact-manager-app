import React, { createContext, useContext, useEffect, useState } from 'react';

import { type User, signIn, signUp } from '../api/auth';

type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('@contactmanager.token'));

    useEffect(() => {
        if (!token || !user) {
            return;
        }

        setToken(token);
        setUser(user);
    }, [token, user]);

    const register = async (name: string, email: string, password: string) => {
        const { user, access_token } = await signUp({ email, password, name });
        localStorage.setItem('@contactmanager.token', access_token);
        setToken(access_token);
        setUser(user);
    };

    const login = async (email: string, password: string) => {
        const { user, access_token } = await signIn({ email, password });
        localStorage.setItem('@contactmanager.token', access_token);
        setToken(access_token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('@contactmanager.token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);

    if (!ctx) {
        throw new Error('useAuth must be used inside AuthProvider');
    }

    return ctx;
}
