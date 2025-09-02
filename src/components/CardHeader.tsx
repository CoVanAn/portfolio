import StarIcon from "@/assets/icons/star.svg";
import { DEV_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

export const CardHeader = ({ title, subtitle }: {
    title: string;
    subtitle: string;
}) => {
    return (
        <div className="p-6 pb-0">
            <div className="flex items-center justify-start">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">
                {subtitle}
            </p>
        </div>
    );
};
