import {Badge} from "react-bootstrap";

export default function Badges({collection}) {
    return <>
        <div style={{margin: "1rem 0"}}>
            {collection.map((item) => (
                <Badge key={item.name} pill style={{margin: "1rem 1rem 1rem 0"}} bg="dark"> {item.name} </Badge>
            ))}
        </div>
    </>

}