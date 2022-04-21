import useSWR from 'swr'
import {useEffect, useState} from "react";
import Link from "next/link";
import {Menu} from "antd";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Navigation({slug}) {

    const {data, error} = useSWR(`/api/menu/${slug}`, fetcher)
    const [menu, setMenu] = useState();

    useEffect(() => {
        if (data !== undefined) {
            setMenu(data.data[0].attributes.menu_items.data);
        }
    }, [data])

    return (
        <Menu mode="horizontal" defaultSelectedKeys={['asd']}>
            {menu && menu.map((item, index) => (
                <Menu.Item  key={item.attributes.Label}>
                    <Link href={`${item.attributes.Url}`}>
                        <a>{item.attributes.Label}</a>
                    </Link>
                </Menu.Item>
            ))
            }
        </Menu>
    )
}