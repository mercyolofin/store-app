// function CheckMore ({check}) {
//     return(
//         <div>
//             {check.map((item, index )=>  {
//                 return(
//                     <div key={index}>
//                         <p>{item.description}</p>
//                     </div>
//                 )
//             })}     </div>
//     )
// }
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { BsFillCartCheckFill } from "react-icons/bs"
function CheckMore({ check }) {
    return (
        <div style={{ margin: 'auto', width: '80%' }}>
            {check.map((item, index) => {
                return (
                    <div>
                        <Card sx={{ maxWidth: 345 }} key={index} className="">
                            <CardActionArea>
                                <LazyLoadImage
                                    alt={`IMAGE NOT FOUND OR NOT LOADED`}
                                    height={195}
                                    src={item.images[0]} // use normal <img> attributes as props
                                    placeholderSrc="black-and-white"
                                    effect="blur"
                                    opacity={1.2}
                                />

                                {/* <CardMedia
                                        component="img"
                                        height="195"
                                        image={item.images[0]}
                                        alt="green iguana"
                                    /> */}

                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                            

                                    <Typography variant="body2" className='mt-2' color="text.secondary">
                                        <span className='p-0'>Description</span>     <p>{item.description}</p>

                                    </Typography>
                                    <Typography variant="body2" className='mt-2' color="text.secondary">
                                        <span className='p-1 fw-bold'>price  ${item.price}</span> 
                                        <button className="btn btn-dark text-white p-2">Buy <BsFillCartCheckFill /></button>
                                    </Typography>

                                </CardContent>

                            </CardActionArea>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </div>

                )
            })}
        </div>
    )
}





export default CheckMore;