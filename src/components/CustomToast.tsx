import type { ToastContentProps } from "react-toastify";

type CustomToastProps = ToastContentProps<{
    title: string;
    content: string;
}>;

export const CustomToast = ({ data }: CustomToastProps) => {
    return (
        <div className="flex flex-col w-full">
            <h3>
                {data.title}
            </h3>
            <div className="flex items-center justify-between">
                <p className="text-sm">{data.content}</p>
            </div>
        </div>
    );
}