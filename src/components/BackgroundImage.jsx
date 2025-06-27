const BackgroundImage = ({ mobileSrc, desktopSrc, alt = '', className = '' }) => {
    return (
        <div className={`absolute inset-0 -z-10 ${className}`}>
            <img
                className="inline-block h-full w-full object-cover md:hidden"
                src={mobileSrc}
                alt={alt}
                role="presentation"
            />
            <img
                className="hidden h-full w-full object-cover md:inline-block"
                src={desktopSrc}
                alt={alt}
                role="presentation"
            />
        </div>
    );
};

export default BackgroundImage;
