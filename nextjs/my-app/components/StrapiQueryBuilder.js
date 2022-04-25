import {Form} from "react-bootstrap";

export default function StrapiQueryBuilder({setQuery, dataFilter, options,label}) {


    const addFilter = (e) => {
        setQuery((prevState => {
            var filters = {...prevState.filters};
            const value = e.target.value;
            if (value === "none") {
                delete filters[dataFilter]
            } else {
                filters[dataFilter] = {slug: {$in: [e.target.value]}};
            }
            prevState = {
                ...prevState,
                filters
            }
            return prevState;
        }))
    }
    return <Form.Select data-filter={dataFilter} onChange={addFilter} on aria-label="Default select example">
        <option value={'none'} key={'opt-default'}>{label}</option>
        {options.map((opt) => (
            <option key={`opt-${opt.attributes.name}`} value={opt.attributes.slug}>{opt.attributes.name}</option>
        ))}
    </Form.Select>
}