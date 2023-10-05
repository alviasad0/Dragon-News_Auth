import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const RightSide = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold"> Login with</p>
        <div>
          <button className="mt-6 btn w-full border-blue-500 space-x-3 tracking-widest">
            <FcGoogle className="text-2xl"></FcGoogle>
            <span className="text-lg font-bold">Google</span>
          </button>
          <button className="mt-2 btn w-full border-blue-500 space-x-3 tracking-widest">
            <BsGithub className="text-2xl"></BsGithub>
            <span className="text-lg font-bold">Github</span>
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Find Us On</h1>
        <div className="border-2 mt-6">
          <div className="  border-b-2 p-4">
            <a
              href=""
              className="flex text-xl pl-10 font-semibold items-center gap-2"
            >
              <BsFacebook></BsFacebook>
              <span>FaceBook</span>
            </a>
          </div>
          <div className="  border-b-2 p-4">
            <a
              href=""
              className="flex text-xl pl-10 font-semibold items-center gap-2"
            >
              <BsInstagram></BsInstagram>
              <span>Instagram</span>
            </a>
          </div>
          <div className="  p-4">
            <a
              href=""
              className="flex text-xl pl-10 font-semibold items-center gap-2"
            >
              <BsTwitter></BsTwitter>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
