import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[86px] border-b border-slate-800 bg-[#111827]">
      <div className="mx-auto flex h-full max-w-[1660px] items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-2xl">
            🔨
          </div>

          <div>
            <h1 className="text-[22px] font-extrabold leading-none text-white">
              LiveAuction
            </h1>
            <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-amber-400">
              REAL-TIME BIDDING
            </p>
          </div>
        </Link>

        <Link
          to="/auctions"
          className="text-[17px] font-semibold text-slate-300 transition hover:text-white"
        >
          Auctions
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/login"
            className="text-[15px] font-semibold text-slate-300 transition hover:text-white"
          >
            Log In
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-amber-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;