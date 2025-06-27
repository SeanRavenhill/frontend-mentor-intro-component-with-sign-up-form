const Container = ({ children, className = '', as: Element = 'section' }) => {
    return (
        <Element
            className={`grid min-h-screen grid-cols-[1fr_min(100%,var(--container-max-width))_1fr] px-[var(--fluid-24-165)] ${className}`}
        >
            {children}
        </Element>
    );
};

export default Container;
