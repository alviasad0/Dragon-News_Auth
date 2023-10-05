import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [allCategory, setAllCategory] = useState([]);
    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
                .then(data => setAllCategory(data))
    },[])

   

    return (
      <div>
        <h1 className="text-2xl font-bold">All Caterogy</h1>

        <ul className="menu menu-horizontal">
          {allCategory.map((category) => (
            <li className="py-2 text-xl font-medium  w-full " key={category.id}>
              <Link to={`/news/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default LeftSide;