export default function AlphabetIndex() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return (
        <div className="bg-[#c4f120] rounded-[20px] py-[16px] px-[20px] flex flex-col items-center space-y-[12px] max-h-[720px] overflow-y-auto scrollbar-none">
            {alphabet.map(letter => {
                const hasContacts = true;
                return (
                    <button
                        key={letter}
                        className="text-[14px] font-bold text-black opacity-70 hover:scale-200"
                        onClick={() => {
                            if (hasContacts) {
                                const section = document.getElementById(`section-${letter}`);
                                if (section) {
                                    section.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }
                        }}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
}
