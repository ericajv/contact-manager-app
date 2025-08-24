import { api } from '@/api/httpclient';
import { AxiosError } from 'axios';

export type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    photo?: string;
    // reference: string;
};

export type GetContactsRequest = { search?: string };
export type GetContactsResponse = { contacts: Contact[] };

export async function getContacts({ search }: GetContactsRequest): Promise<GetContactsResponse> {
    try {
        const { data } = await api.get<GetContactsResponse>('/contacts', { params: { search } });
        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}