import { api } from '@/api/httpclient';
import { AxiosError } from 'axios';

export type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    photo?: string;
    reference: string;
};

export type UploadResponse = {
    filename: string;
    path: string;
    uploadedBy: string;
}

export type GetContactsRequest = { search?: string };
export type GetContactsResponse = { contacts: Contact[] };

export type SaveContactsRequest = Omit<Contact, 'id'>;
export type SaveContactsResponse = { contact: Contact };

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

export async function saveContact(contact: SaveContactsRequest, id?: string): Promise<SaveContactsResponse> {
    try {
        const { data } = id
            ? await api.put<SaveContactsResponse>(`/contacts/${id}`, { ...contact })
            : await api.post<SaveContactsResponse>('/contacts', { ...contact });
        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}

export async function deleteContact(id: string): Promise<void> {
    try {
        await api.delete(`/contacts/${id}`);
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}

export async function uploadPhoto(file: File): Promise<UploadResponse> {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const { data } = await api.post<UploadResponse>(
            '/upload',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.message);
        }

        throw error;
    }
}