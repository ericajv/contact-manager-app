export default function Banner() {
    return (
        <div className="w-2/3 h-full relative">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('../../public/banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
        </div>
    );
}
