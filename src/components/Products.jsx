import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      {/* flex-wrap  flex-md-nowrap  flex-lg-wrap  d-sm-fle */}

      <div className="" >
      <h2 className="p-5 text-xl font-semibold">See Our Products</h2>
        <div className="d-flex x flex-md-wrap  flex-xxl-wrap flex-wrap flex-lg-wrap justify-content-evenly flex-sm-wrap">
          
          {products.map((item, index) => {
            return (
              <div className=" m-3  " key={index}>
                <Card sx={{ maxWidth:262 }} md >
                  <CardMedia
                    sx={{ height: 130 }}
                    image={item.images[0]}
                    title="mercy's store"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link size="small " className="btn btn-light" to={`/checkmore/${item.id}`} >Check more</Link>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>

              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
