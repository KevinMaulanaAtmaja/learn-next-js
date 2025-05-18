import { useRouter } from "next/router";
// [id] => utk 1 param
// [...id] => utk lebih dari 1 param
// [[...id]] => utk lebih dari 1 param + param opt

export default function UserSettingPage() {
    const { query } = useRouter();

    return (
        <div>
            <h1>User Setting Page</h1>
            <h1 id="title" data-testid="title">
                Detail User:
            </h1>
            <p>Name: {query.name}</p>
        </div>
    );
}
