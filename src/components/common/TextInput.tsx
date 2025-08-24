export type TextInputProps = {
    label: string; 
    placeholder: string; 
    value?: string; 
    onChange?: (value: string) => void
};

export default function TextInput({ label, placeholder, value, onChange }: TextInputProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-[#ffffff] text-sm font-semibold">{label}</label>
            <div className="px-3 py-3 bg-[#1b1b1b] border border-[#303030] rounded-sm">
                <input
                    placeholder={placeholder}
                    className="bg-transparent text-[#f0ecec] text-xs w-full outline-none"
                    value={value}
                    onChange={e => onChange?.(e.target.value)}
                />
            </div>
        </div>
    );
}
