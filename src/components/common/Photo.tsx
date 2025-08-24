export type PhotoProps = { url?: string };

export default function Photo({ url }: PhotoProps) {
    return (
        <div className="flex flex-col items-center p-2 space-y-3">
            {url ? (
                <img src={url} className="w-[120px] h-[120px]" />
            ) : (
                <div className="w-[120px] h-[120px] bg-[#1b1b1b] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#5e5e5e] text-5xl">
                        account_circle
                    </span>
                </div>
            )}
            <button className="flex items-center px-2 py-2 border border-[#303030] rounded-sm hover:bg-[#252525] transition-colors">
                <span className="material-symbols-outlined text-[#ffffff] text-xs mr-1">
                    {url ? 'upload' : 'add'}
                </span>
                <span className="text-[#ffffff] text-xs">
                    {url ? 'Substituir' : 'Adicionar foto'}
                </span>
            </button>
        </div>
    );
}
