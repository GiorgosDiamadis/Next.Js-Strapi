import {Badge, Image} from "react-bootstrap";
import star from "./images/star.png"

export default function StarRating({rating, label}) {
    return (
        <div style={{margin:"1rem 0"}}>
            <Badge pill bg="dark"> {rating} <Image width={15} height={15} src={star.src}/> {label}</Badge>
        </div>
    )
}