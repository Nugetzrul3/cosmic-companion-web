import { useQuery } from "@apollo/client/react";
import { Queries } from "../../apollo/queries.ts";

export const Main = () => {
    const { data, loading, error } = useQuery(Queries.getUserInfoQuery());

    return (
        <>
            {error && <h2>Unexpected error! Please try again in a few minutes</h2>}
            {error && loading ? (<h2>Loading data...</h2>) : !data ? (<></>) : data.me.error ? (<h2>Error fetching data {data.me.error}</h2>) : (
                <>
                    <h3>ID: {data.me.id}</h3>
                    <h3>First name: {data.me.first_name}</h3>
                    <h3>Last name: {data.me.last_name}</h3>
                    <h3>Email: {data.me.email}</h3>
                    <h3>Username: {data.me.username}</h3>
                </>
            )
            }
        </>
    )
}