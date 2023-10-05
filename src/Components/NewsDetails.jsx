import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import RightSide from "./RightSide";
import { BiArrowBack } from "react-icons/bi";

const NewsDetails = () => {
  const {id} = useParams();
    const allNews = useLoaderData();
    const news = allNews.filter(news => news._id === id);

   
 
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold pb-6">Dragon News</h1>
          <div>
            {news.map((aNews) => (
              <div key={aNews.id} className="card  bg-base-100 shadow-xl">
                <figure>
                  <img className="w-full" src={aNews.image_url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{aNews.title}</h2>
                  <p>{aNews.details}</p>
                  <div className="card-actions pt-10">
                    <button className="btn btn-secondary">
                      
                                     <BiArrowBack className="text-xl "></BiArrowBack>
                                <Link to="/">All News</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
