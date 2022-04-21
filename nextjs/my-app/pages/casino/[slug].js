import {useEffect} from "react";
import {GetStaticProps, GetStaticPaths} from "../../utils/Isr";
import Head from "next/head";

export default function Casino({data}) {


    useEffect(() => {
    }, [])

    return <>

        <div>
            <Head>
                <title>{data.Seo[0].Title}</title>
                <meta name="description" content={data.Seo[0].Description}/>
            </Head>

            <h1>{data.title}</h1>
            <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: data.Content}}>
            </div>
        </div>
    </>
}

export const getStaticProps = async (context) => {

    return await GetStaticProps(context, "casinos");
}

export const getStaticPaths = async () => {

    return await GetStaticPaths("casinos");
}