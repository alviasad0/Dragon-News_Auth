import { Link } from "react-router-dom";


const NewsTItle = ({data}) => {
   const {title , _id} = data
  
    return (
        <div className="">
            
        <p>
          <Link className="text-xl font-medium mr-20" to={`/details/${_id}`}>
            
            {title}
          </Link>
        </p>
      </div>
    );
};

export default NewsTItle;