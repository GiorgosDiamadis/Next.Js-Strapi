import {useRouter} from "next/router";

export default async function handler(req, res) {
    const {slug} = req.query;
    const link = await fetch(`http://cms:1337/api/affiliate-links?filters[slug][$eq]=${slug}`);
    const linkData = await link.json();
    res.status(200).json(linkData)
}
