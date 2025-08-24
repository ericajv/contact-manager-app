import { uploadPhoto, type UploadResponse } from "@/api/contacts";
import { useState, type ChangeEvent, useRef } from "react";

export type PhotoProps = {
  url?: string;
  onChange: (value: string) => void;
};

export default function Photo({ url, onChange }: PhotoProps) {
  const [_, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(url || null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));

      // Faz upload automaticamente ao selecionar
      setLoading(true);
      try {
        const data: UploadResponse = await uploadPhoto(selectedFile);
        setPreview(data.path); // Atualiza preview com a URL do backend
        onChange(data.path);   // Retorna o path pro formulário
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-3">
      {preview ? (
        <img src={preview} className="w-32 h-32 object-cover rounded-full border" />
      ) : (
        <div className="w-32 h-32 bg-[#1b1b1b] rounded-md flex items-center justify-center">
          <span className="material-symbols-outlined text-[#5e5e5e] text-5xl">
            account_circle
          </span>
        </div>
      )}

      <button
        type="button"
        className="flex text-white items-center px-4 py-2 border border-[#303030] rounded-sm hover:bg-[#252525] transition-colors disabled:opacity-50"
        onClick={handleButtonClick}
        disabled={loading}
      >
        <span className="material-symbols-outlined text-[#ffffff] text-xs mr-1">
          {preview ? 'upload' : 'add'}
        </span>
        {loading ? 'Enviando...' : 'Escolher Foto'}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
