import {useEffect} from "react";
import {GetStaticProps, GetStaticPaths} from "../../utils/Isr";

export default function Slot({data}) {


    useEffect(() => {
    }, [])

    return <div>
        <h1>{data.title}</h1>
        <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: data.Content}}>
        </div>
    </div>
}

export const getStaticProps = async (context) => {

    return await GetStaticProps(context, "slots");
}

export const getStaticPaths = async () => {

    return await GetStaticPaths("slots");
}