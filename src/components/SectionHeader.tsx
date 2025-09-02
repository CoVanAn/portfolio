export const SectionHeader = ({
    title,
    subtitle,
    description
}: {
    title: string;
    subtitle: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest 
                bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                    {title}
                </p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
                {subtitle}
            </h2>
            <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
                {description}
            </p>

        </>
    );
};
