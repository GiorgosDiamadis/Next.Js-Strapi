import '../styles/globals.css'
import Navigation from "../components/Navigation";
import {Container} from "react-bootstrap";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Container fluid={"lg"}>
                <Navigation slug={'main-menu'}/>
                <Component {...pageProps} />
            </Container>

        </>)
}

export default MyApp
