import useSWR from 'swr'
import {useEffect, useState} from "react";
import Link from "next/link";
import { Nav, Navbar} from "react-bootstrap";

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

        <>
            <Navbar bg={"light"} expand="lg">

                <Navbar.Brand> <Link href={"/"}>React-Bootstrap</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {menu && menu.map((item, index) => (
                            <Nav.Link key={item.attributes.Label}>
                                <Link href={`${item.attributes.Url}`}>
                                    {item.attributes.Label}

                                </Link>
                            </Nav.Link>
                        ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}