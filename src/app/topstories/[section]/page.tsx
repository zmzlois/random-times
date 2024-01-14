export async function loader({ params}: {params: {section: string}}) {
    console.log("params:", params);
    const {section} = params;
}