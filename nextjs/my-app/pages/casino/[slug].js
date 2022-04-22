import {useEffect} from "react";
import {GetStaticProps, GetStaticPaths} from "../../utils/Isr";
import Head from "next/head";
import {Badge, Image} from "react-bootstrap";
import Badges from "../../components/Badges";
import StarRating from "../../components/StarRating";

export default function Casino(
    {
        data:
            {
                Seo,
                title,
                thumbnail,
                Content,
                banking_methods,
                providers_,
                deposit_bonuses,
                compatible_devices,
                games_,
                customer_supports,
                withdraw_limits,
                reliability,
                payout_speed,
                welcome_bonus,
                games_and_providers
            }
    }) {


    useEffect(() => {
    }, [])

    return <>

        <div>
            <Head>
                <title>{Seo.Title}</title>
                <meta name="description" content={Seo.Description}/>
            </Head>

            <h1>{title}</h1>

            <Badges collection={providers_}/>
            <Badges collection={banking_methods}/>
            <Badges collection={deposit_bonuses}/>
            <Badges collection={games_}/>
            <Badges collection={compatible_devices}/>
            <Badges collection={customer_supports}/>

            <StarRating rating={withdraw_limits} label={"Withdraw Limits"}/>

            <StarRating rating={payout_speed} label={"Payout Speed"}/>
            <StarRating rating={welcome_bonus} label={"Welcome Bonus"}/>
            <StarRating rating={reliability} label={"Reliability"}/>
            <StarRating rating={games_and_providers} label={"Games & Providers"}/>

            <Image width={thumbnail.width} height={thumbnail.height}
                   src={`http://localhost:1337${thumbnail.url}`}/>
            <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: Content}}>
            </div>
        </div>
    </>
}

export const getStaticProps = async (context) => {

    return await GetStaticProps(context, "casinos");
}

export const getStaticPaths = async () => {

    return await GetStaticPaths("casinos");
}