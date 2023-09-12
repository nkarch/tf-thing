import { useGetAllProfilesQuery } from "./services/profiles";
import { useGetAllPostsQuery } from "./services/posts";

function App() {
    const { data, error, isLoading } = useGetAllProfilesQuery();
    const { data: data1, error: error1, isLoading: isLoading1 } = useGetAllPostsQuery();

    return (
        <>
            <h1>Transformers Thing</h1>

            {error1 ? (
                <>Oh no, there was an error</>
            ) : isLoading1 ? (
                <>Loading...</>
            ) : data1 ? (
                <>
                    <span>{JSON.stringify(data1)}</span>
                </>
            ) : null}
            <br></br>
            <br></br>
            <br></br>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <span>{JSON.stringify(data)}</span>
                </>
            ) : null}
        </>
    );
}

export default App;
