import { Search } from "lucide-react";
import heroImage from "../assets/hero-image.png";
import herob from "../assets/hero-background.png";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-10">
            <h1 className="text-[4.8rem] font-extrabold leading-tight tracking-tight text-slate-950">
              Choose the look
              <br />
              that <span className="text-emerald-400">suits</span> you best
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-700">
              Every day is a fashion show & the world is your runway.
              <br /> Clozzet will elevate your wardrobe with the best
              collections.
              <br /> Be exclusive, Be Devine, Be yourself. Explore outfits that
              will make you comfortably beautiful. True style never dies.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="rounded-full bg-emerald-400 px-12 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-300/40 transition hover:-translate-y-0.5">
                Shop Now
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-12 py-4 text-lg font-semibold text-emerald-500 shadow-sm transition hover:-translate-y-0.5">
                About Us
              </button>
            </div>

            <div className="max-w-xl">
              <div className="flex items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  className="flex-1 bg-transparent text-base text-slate-500 outline-none placeholder:text-slate-400"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <img
              src={herob}
              alt="background blob"
              className="absolute -right-8 top-0 h-105420px] object-cover opacity-100 sm:h-130 sm:w-130 md:h-155 md:w-155 lg:-top-28 lg:h-210 lg:w-210 xl:-right-20 xl:w-225 xl:h-225"
            />
            <img
              src={heroImage}
              alt="models"
              className="relative z-10 h-90 w-auto object-contain sm:h-120 md:h-150 lg:h-175"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
