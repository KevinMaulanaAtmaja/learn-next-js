import { useRouter } from "next/router";
// [id] => utk 1 param
// [...id] => utk lebih dari 1 param
// [[...id]] => utk lebih dari 1 param + param opt

export default function AdminSetting() {
    const { query } = useRouter();

    return (
        <div>
            <h1>Admin Setting</h1>
            <p>Role: {`${query.name && query.name[0] + " Spesialis: " + query.name[1]}`}</p>
        </div>
    );
}
