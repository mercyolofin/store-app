import {Link, useLoaderData, useParams} from "react-router-dom";
import CheckMore from "../components/CheckMore";
import {AiFillHome} from "react-icons/ai"




function CheckMorePage(){
    const {id} = useParams();
    const productId = id;
    const CheckMorePage= useLoaderData()
    const newItem = [];
    newItem.push(CheckMorePage)
        return(
        <div style= {{ }} >
            {/* <h3 style= {{paddingLeft:'490px', fontSize:'30px'}} >You are viewing item/index {productId}</h3> */}
                <div className="text-center">   <Link to={`/`} style={{ textDecoration: 'none', fontSize:"24px"}} className="text-center"><AiFillHome/></Link></div>
            <CheckMore check={newItem} />
        </div>
    )
}


    export async function loadercheckmore({params}) {
    const id = params.id
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok){

    }
    const data = await response.json()
    console.log(data)
    return data
}

export default CheckMorePage;