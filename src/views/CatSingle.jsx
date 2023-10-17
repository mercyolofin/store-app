import { Link, useLoaderData, useParams } from "react-router-dom";
import List from "../components/List";

const CatSingle = () => {
    // const { id } = useParams();
    // const myid = id;
    // const categoriesId = categories;
    const id = useLoaderData()
    const products = id[0]
    return (
        <div>
            <div style={{}} >
                {/* {myid} */}
                <div className="text-center">   <Link to={`/`} style={{ textDecoration: 'none', fontSize: "24px" }} className="text-center"></Link></div>
                {/* <List list={id}/> */}

              
            </div>
        </div>
    )
}
export async function loadersinglecatgorie({ params }) {
    const id = params.id
    const response = await fetch(`https://dummyjson.com/carts/${1}`)
    if (!response.ok) {

    }
    const data = await response.json()
    console.log(data.products) 

   
    const mydata = [];
    mydata.push(data.products)
    return  mydata
}
export default CatSingle;