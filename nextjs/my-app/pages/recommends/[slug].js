import Router from "next/router";
import {useEffect, useRef} from "react";

export default function Recommends({url}) {
    const isFirst = useRef(true)
    useEffect(() => {
        // if (isFirst.current) {
        //     isFirst.current = false;
        //     return;
        // }

        window.open(url, "_blank")
        Router.back();

    },)
    return ""
}

export async function getServerSideProps(ctx) {
    const {slug} = ctx.params

    const link = await fetch(`http://cms:1337/api/affiliate-links?filters[slug][$eq]=${slug}`);
    const linkData = await link.json();

    const url = linkData.data[0].attributes.url;

    return {
        props: {url}
    }
}