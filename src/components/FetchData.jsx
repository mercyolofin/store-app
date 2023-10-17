import { useEffect, useState } from "react";
import Products from "./Products";
import CheckMore from "./CheckMore";
import { ProgressBar } from "react-loader-spinner";
import Hero from "./Hero";
const url = "https://dummyjson.com/products?limit=80";
const FetchData = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const fetchV = async () => {
    setLoad(true);
    const response = await fetch(url);
    if (!response) {
      alert("mercy, you have error!!!!!");
    }
    const result = await response.json();
    setData(result.products);
    setLoad(false);
    console.log(result.products);
  };
  useEffect(() => {
    fetchV();
  }, []);
  return (
    <>
      <div style={{ margin: 'auto', width: '50%' }} className="mt-4">
      <Hero/>
    </div>

      <div className="container ">
        <div style={{ margin: 'auto', width: '100%' }}
        // style={{ margin: "auto", width: "100%" }}
        >
          
          {load && <div style={{ margin: 'auto', width: '20%' }}> <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'
          /> </div>}

          {!load && <div ><Products products={data} /></div>}

        </div>
      </div>
    </>
  );


};

export default FetchData;
