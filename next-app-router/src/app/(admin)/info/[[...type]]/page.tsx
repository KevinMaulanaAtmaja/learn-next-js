type TypePageProps = { params: { type: string[] } };

// [slug] -> jdi cuma bisa 1 param
// [...slug] -> jdi bisa bnyk param
// [[...slug]] -> jdi opt param + bnyk param
export default function TypePage(props: TypePageProps) {
    const { params } = props;
    return (
        <div>
            <h1>{params.type ? "Type Page" : "Info Page"}</h1>
            <p>
                {params.type && (
                    <>
                        Role: {params.type[0]}, Username: {params.type[1]}
                    </>
                )}
            </p>
        </div>
    );
}
