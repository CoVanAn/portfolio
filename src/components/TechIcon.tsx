
export const TechIcon = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return <span className="size-10"><Component className="h-10" /></span>;
};
