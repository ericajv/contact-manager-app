import { api } from '@/api/httpclient';
import { AxiosError } from 'axios';

export type User = {
    id: string;
    name: string;
    email: string;
};

export type SignInRequest = { email: string, password: string };

export type SignUpRequest = { name: string } & SignInRequest;

export type AuthResponse = { user: User } & { access_token: string };

export async function signUp({ name, email, password }: SignUpRequest): Promise<AuthResponse> {
    try {
        const { data } = await api.post<AuthResponse>('/accounts', { name, email, password });
        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}

export async function signIn({ email, password }: SignInRequest): Promise<AuthResponse> {
    try {
        const { data } = await api.post<AuthResponse>('/sessions', { email, password });
        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}
