export const CustomToast = ({ data }) => {
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