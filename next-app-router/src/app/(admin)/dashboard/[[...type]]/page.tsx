type TypePageProps = { params: { type: string[] } };

export default function TypePage(props: TypePageProps) {
    const { params } = props;
    return (
        <div>
            <h1>{params.type ? "Type Page" : "Dashboard"}</h1>
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
