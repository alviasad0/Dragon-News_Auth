import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import NewsTItle from "./NewsTItle";




const BreakingNews = () => {
   
    const [allData, setdata] = useState([])
    
    useEffect(() => {
        fetch('/news.json')
        .then(response => response.json())
        .then(data=> setdata(data))
    },[])

    return (
      <div className="flex mt-8 p-2 bg-gray-200 ">
        <button className=" bg-[#D72050] text-white btn">Latest </button>
            <Marquee>
                
            {
                allData.map(data => <NewsTItle key={data._id} data={data} ></NewsTItle>)
            }
        </Marquee>
        
      </div>
    );
};

export default BreakingNews;
