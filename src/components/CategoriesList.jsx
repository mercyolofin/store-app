import { Link } from "react-router-dom";





function CategoriesList({categories}) {
    return ( 
        <div className="container d-flex flex-wrap  flex-md-nowrap  flex-lg-wrap">

            {categories.map((categories, index) => {
                return ( 
                    <div key={categories} style={{ textDecoration: "none",paddingTop:'20px', fontSize: "20px" }} className="m-3 flex-nowrap  ">
                        <Link className="p-3 btn btn-light" style={{textDecoration:'none', fontFamily:'inherit'}}  to={`/categories/${categories}`}>{categories}</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default CategoriesList;