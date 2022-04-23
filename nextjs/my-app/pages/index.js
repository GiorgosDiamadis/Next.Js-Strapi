import {GetStaticProps} from "../utils/Isr";

export default function Home({data}) {

    return <div>
        <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: data.Content}}>
        </div>
    </div>
}

export async function getStaticProps(context) {
    return await GetStaticProps(context, "home-page")
}
