export async function GetStaticProps(context, model) {
    const {slug} = context.params ?? "";
    const pages = await fetch(`http://cms:1337/api/${model}?${slug ? 'slug=' + slug : ''}`)
    const pageData = await pages.json();

    return {
        props: {
            data: pageData[0] ?? pageData
        }
        , revalidate: 5
    }
}

export async function GetStaticPaths(model) {
    const pages = await fetch(`http://cms:1337/api/${model}`)

    const pageData = await pages.json();

    const slugs = pageData.map((pd) => pd.slug);

    const paths = slugs.map((sl) => ({params: {slug: sl.toString()}}))

    return {
        paths,
        fallback: 'blocking'
    }
}