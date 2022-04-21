import '../styles/globals.css'
import Navigation from "../components/Navigation";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Navigation slug={'main-menu'}/>
            <Component {...pageProps} />
        </>)
}

export default MyApp
