export default function FormButton({ children }) {
    return (
        <>
            <button className="bg-green hover:bg-green-hover cursor-pointer rounded-[0.3125rem] py-[0.9375rem] text-[0.9375rem] leading-relaxed font-semibold tracking-wide text-white uppercase shadow-[inset_0px_-4px_0px_0px_rgba(0,0,0,0.09)]">
                {children}
            </button>
        </>
    );
}
