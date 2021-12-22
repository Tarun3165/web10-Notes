import { useParams } from "react-router-dom"

export const ProductDetails = (() => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            Product number {params.id}
        </div>
    )
})