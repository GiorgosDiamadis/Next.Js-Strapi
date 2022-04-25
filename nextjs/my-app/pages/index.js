import {GetStaticProps} from "../utils/Isr";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import {useState} from "react";
import qs from "qs";
import StrapiQueryBuilder from "../components/StrapiQueryBuilder";


export default function Home({
                                 data: {title, Content},
                                 providerData: {data: providers},
                                 bankingData: {data: bankingMethods},
                                 compatibleDevicesData: {data: devices}
                             }) {
    const [query, setQuery] = useState({filters: {}, fields: ['title,slug']});
    const [result, setResult] = useState(null);
    const [loading, isLoading] = useState(false)

    const searchCasinos = () => {
        const p = qs.stringify(query)

        if (Object.keys(query.filters).length !== 0) {
            isLoading(true)
            setTimeout(() => {
                fetch(`http://localhost:1337/api/casinos?${p}`).then((res) => res.json()).then((res) => {
                    setResult(res);
                    isLoading(false)

                });
            }, 1000)

        } else {
            setResult(null)
        }
    }

    return <div>
        <h4>{title}</h4>
        <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{__html: Content}}>
        </div>
        <hr/>
        <Row>
            <Col>
                <StrapiQueryBuilder dataFilter={'banking_methods'} label={'Select Banking Methods'}
                                    setQuery={setQuery}
                                    options={bankingMethods}/>
            </Col>
            <Col>
                <StrapiQueryBuilder dataFilter={'providers_'} label={'Select Provider'} setQuery={setQuery}
                                    options={providers}/>
            </Col>
            <Col>
                <StrapiQueryBuilder dataFilter={'compatible_devices'} label={'Select Device'} setQuery={setQuery}
                                    options={devices}/>
            </Col>
        </Row>
        <hr/>
        <Button variant="primary" disabled={loading} onClick={searchCasinos}>
            {loading ? (<><Spinner
                as="span"
                animation="grow"
                size="sm"

                role="status"
                aria-hidden="true"
            /> Just a minute...</>) : "Search Casinos"}


        </Button>
        <hr/>
        {result && result.data.map(({attributes}) => (<h1 key={`casino-${attributes.slug}`}>{attributes.title}</h1>))}
    </div>
}

export async function getStaticProps(context) {
    var data = await GetStaticProps(context, "home-page");
    const bankingMethods = await fetch('http://cms:1337/api/banking-methods');
    const providers = await fetch('http://cms:1337/api/providers');
    const compatibleDevices = await fetch('http://cms:1337/api/compatible-devices');
    data.props['bankingData'] = await bankingMethods.json();
    data.props['providerData'] = await providers.json();
    data.props['compatibleDevicesData'] = await compatibleDevices.json();

    return data;
}
