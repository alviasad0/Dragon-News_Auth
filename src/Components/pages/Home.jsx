import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Header from "../Header";
import LeftSide from "../LeftSide";
import Navbar from "../Navbar";
import NewsCards from "../NewsCards";
import RightSide from "../RightSide";


const Home = () => {
    const allNews = useLoaderData()
   
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-5">
        <div className="">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-2 ">
                  {
                 allNews.map((news) => <NewsCards key={news._id} news={news}></NewsCards>)     
          }
          
        </div>
        <div className="">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
