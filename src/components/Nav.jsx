import logo from "../assets/logo.svg";
import { Menu, ShoppingCart } from "lucide-react";

function Nav() {
  return (
    <nav className="relative z-50 ">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <img src={logo} alt="Clozzet logo" className="h-12" />

          <ul className="hidden lg:flex items-center gap-14 text-base font-medium text-slate-900">
            <li className="cursor-pointer transition hover:text-slate-500">Home</li>
            <li className="cursor-pointer transition hover:text-slate-500">About Us</li>
            <li className="cursor-pointer transition hover:text-slate-500">Shop</li>
          </ul>

          <div className="flex items-center gap-4">
            <ShoppingCart className="h-6 w-6 text-slate-900"  />
            <span className="absolute mx-5 top-6 flex rounded-full bg-emerald-400  ">0</span>
            <button className="hidden sm:inline-flex text-base font-medium text-slate-900">Sign Up</button>
            <button className="hidden sm:inline-flex rounded-full border border-slate-900 px-6 py-2 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
              Log In
            </button>
            <Menu className="h-6 w-6 text-slate-900 sm:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
