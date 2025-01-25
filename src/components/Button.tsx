export const Button = (props: React.PropsWithChildren) => {
    return (
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#330a0a] to-[#8a2020] shadow-[0px_0px_12px_#FF4C4C]">
            <div className="absolute inset-0">
                <div className="rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,69,69,.7)_inset] rounded-lg"></div>
            </div>
            <span>{props.children}</span>
        </button>
    );
};