import { BsBookmarks } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCards = ({news}) => {
    const {author, title, image_url, details , _id } = news;

  return (
    <div>
      <div className="card mb-10 bg-base-100 shadow-xl">
        <div>
          <div className="flex justify-between items-center">
            {/* avatar */}
            <div className="flex gap-4 items-center ">
              <div className="w-10 rounded-full">
                <img className="rounded-full" src={author?.img} />
              </div>

              <div>
                <p>{author?.name}</p>
                <p>{author.published_date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <BsBookmarks></BsBookmarks>
              <AiOutlineShareAlt></AiOutlineShareAlt>
            </div>
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <figure>
          <img
                      src={ image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                  {
                      details.length < 300 ?
                      <p>{ details}</p>
                      :
                          <p> { details.slice(0,300) }<Link to={`/details/${_id}`} className="text-violet-700 font-bold text-lg"> See more ...</Link></p>
                          
            }
          
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
