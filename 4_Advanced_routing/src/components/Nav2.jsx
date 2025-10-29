import { useNavigate } from "react-router-dom";

const Nav2 = () => {
    let navigate=useNavigate();
  return (
    <div className="flex gap-5">
      <button
        className="active:scale-95 cursor-pointer bg-amber-400 px-12 py-5 text-lg text-white font-semibold rounded-3xl left-180"
        onClick={() => navigate(-1)}
      >
        Prev
      </button>
      <button
        onClick={() => navigate(+1)}
        className="active:scale-95 cursor-pointer bg-amber-400 px-12 py-5 text-lg text-white font-semibold rounded-3xl "
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
