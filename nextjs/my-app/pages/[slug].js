import {useEffect} from "react";
import {GetStaticProps, GetStaticPaths} from "../utils/Isr";
// TODO: add wysiwyg editor

export default function Page({data}) {


    useEffect(() => {
    }, [])

    return <div>
        <h1>{data.title}</h1>
        <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: data.Content}}>
        </div>
    </div>
}

export const getStaticProps = async (context) => {

    return await GetStaticProps(context, "pages");
}

export const getStaticPaths = async () => {

    return await GetStaticPaths("pages");
}