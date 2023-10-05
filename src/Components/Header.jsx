import logo from '../assets/logo.png'
import moment from "moment";

const Header = () => {
    return (
      <div>
        <img src={logo} className="mx-auto  pt-12" alt="" />
        <p className="text-center text-2xl pt-5 text-[#706F6F]">
          Journalism Without Fear or Favour
        </p>

        <p className="text-xl font-semibold text-center pt-3 text-[#403F3F]">
          {moment().format("LL")}
        </p>
      </div>
    );
};

export default Header;