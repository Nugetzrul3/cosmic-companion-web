import { toast} from "react-toastify";
import type { ToastOptions, Id, ToastContentProps } from "react-toastify";
import type { ReactElement } from "react";
import { BasicToast } from "../components/BasicToast.tsx";

interface ToastConfig extends Omit<ToastOptions, 'type'> {
    position?: ToastOptions['position'];
    autoClose?: number | false;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    toastId?: Id;
}

interface ToastData {
    title: string;
    content: string;
}

interface ConfigProps {
    data: ToastData;
    type?: ToastType;
    options?: ToastConfig;
    element?: ReactElement<ToastContentProps>
}

interface UseToast {
    showToast: (props: ConfigProps) => Id;
    dismiss: (toastId?: Id) => void;
    dismissAll: () => void;
}

type ToastType = "success" | "error" | "info" | "warn";

export const useToast = (): UseToast => {
    const defaultOptions: ToastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        toastId: "",
    };

    const showToast = ({data, type, options, element}: ConfigProps): Id => {
        const toastElement = element ?? BasicToast;

        switch (type) {
            case "success":
                return toast.success(toastElement, {
                    ...defaultOptions,
                    ...options,
                    data
                });
            case "error":
                return toast.error(toastElement, {
                    ...defaultOptions,
                    ...options,
                    data
                });
            case "info":
                return toast.info(toastElement, {
                    ...defaultOptions,
                    ...options,
                    data
                });
            case "warn":
                return toast.warning(toastElement, {
                    ...defaultOptions,
                    ...options,
                    data
                });
            default:
                return toast(toastElement, {
                    ...defaultOptions,
                    ...options,
                    data
                });
        }
    };

    const dismiss = (toastId?: Id): void => {
        toast.dismiss(toastId);
    };

    const dismissAll = (): void => {
        toast.dismiss();
    };

    return {
        showToast,
        dismiss,
        dismissAll,
    };
}
