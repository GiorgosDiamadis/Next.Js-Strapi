import {useRouter} from "next/router";

export default async function handler(req, res) {
    const {slug} = req.query;
    const menu = await fetch(`http://cms:1337/api/menus?filters[slug][$eq]=${slug}&populate=menu_items`);
    const menuData = await menu.json();
    res.status(200).json(menuData)
}
