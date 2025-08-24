export type SidebarProps = { userEmail: string };

export default function Sidebar({ userEmail }: SidebarProps) {
    return (
        <div className="w-[111px] flex flex-col items-center py-[40px] space-y-[222px]">
            {/* Logo */}
            <img className="w-10 h-10" src="logo.png"></img>

            {/* Buttons */}
            <div className="flex flex-col space-y-[12px]">
                <button className="w-[48px] h-[48px] rounded-[16px] bg-[#1b1b1b] flex items-center justify-center transition-transform hover:scale-105 hover:bg-[#303030] group">
                    <span className="material-symbols-outlined text-[20px] text-[#5e5e5e] group-hover:text-[#c4f120]">
                        account_circle
                    </span>
                </button>
                <button className="w-[48px] h-[48px] rounded-[16px] bg-[#1b1b1b] flex items-center justify-center transition-transform hover:scale-105 hover:bg-[#303030] group">
                    <span className="material-symbols-outlined text-[20px] text-[#5e5e5e] group-hover:text-[#c4f120]">
                        settings
                    </span>
                </button>
                <button className="w-[48px] h-[48px] rounded-[16px] bg-[#1b1b1b] flex items-center justify-center transition-transform hover:scale-105 hover:bg-[#303030] group">
                    <span className="material-symbols-outlined text-[20px] text-[#5e5e5e] group-hover:text-[#c4f120]">
                        logout
                    </span>
                </button>
            </div>

            {/* User info */}
            <div className="absolute bottom-[24px] w-[111px]">
                <p className="text-[14px] text-[#5e5e5e] mb-[4px]">Logado como:</p>
                <p className="text-[14px] text-[#e2e2e2]">{userEmail}</p>
            </div>
        </div>
    );
}
