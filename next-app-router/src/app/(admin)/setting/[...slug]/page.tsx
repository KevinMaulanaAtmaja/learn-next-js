type SettingDetailPageProps = { params: { slug: string[] } };

export default function SettingDetailPage(props: SettingDetailPageProps) {
    const { params } = props;
    return (
        <div>
            <h1>Setting Detail Page</h1>
            <p>
                Root: {params.slug[0]}, Dokumen: {params.slug[1]}, File: {params.slug[2]}
            </p>
        </div>
    );
}
