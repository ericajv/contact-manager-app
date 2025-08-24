export type ButtonProps = {
    color: string;
    textColor: string;
    hoverColor: string;
    text: string;
    onClickFn?: () => void;
};

export default function Button({ color, textColor, hoverColor, text, onClickFn }: ButtonProps) {
    return (
        <button
            className={`${color} ${textColor} ${hoverColor} px-3 py-3 rounded transition-colors`}
            onClick={onClickFn}
        >
            <span className="text-sm font-semibold">{text}</span>
        </button>
    );
}
