import {GetStaticProps} from "../utils/Isr";

export default function Home({data}) {

    return <div>
        <h1>{data.title}</h1>
        <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: data.Content}}>
        </div>
    </div>
}

export async function getStaticProps(context) {
    return await GetStaticProps(context, "home-page")
}
