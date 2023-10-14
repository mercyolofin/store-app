import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <>
      
     <div style={{marginLeft:'20px',  marginRight:'20px'}}>
     <div className=" row">
        {products.map((item, index) => {
          return (
           <div className="col-3  mb-3"  key={index}>
             <Card sx={{ maxWidth: 245 }} >  
              <CardMedia
                sx={{ height: 140 }}
                image={item.images[0]}
                title="mercy's store"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link size="small" to={`/checkmore/${item.id}`} >Check more</Link>
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
