const ContainerContent = ({ children, className = '' }) => {
    return <div className={`col-start-2 w-full ${className}`}>{children}</div>;
};

export default ContainerContent;
