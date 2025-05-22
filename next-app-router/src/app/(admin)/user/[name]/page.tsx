type UserDetailPageProps = { params: { name: string } };

export default function UserDetailPage(props: UserDetailPageProps) {
    const { params } = props;
    return (
        <div>
            <h1>User Detail Page</h1>
            <h2>User: {params.name}</h2>
        </div>
    );
}
