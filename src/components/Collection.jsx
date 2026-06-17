import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import leatherJacket from "../assets/leather-jacket.png";
import sweatshirts from "../assets/sweatshirts.png";
import pallazo from "../assets/pallazo.png";
import denim from "../assets/denim.png";
import mens from "../assets/mens.png";
import handbag from "../assets/handbag.png";
import smartwatch from "../assets/smartwatch.png";
import ladies from "../assets/ladies.png";
import { useState } from "react";
const featuredItems = [
  {
    image: leatherJacket,
    title: "Brown Leather Jacket",
    price: "KSh 2,250",
  },
  {
    image: sweatshirts,
    title: "Round-neck Sweatshirts",
    price: "KSh 2,000",
  },
  {
    image: pallazo,
    title: "Pleated Palazzo Trousers",
    price: "KSh 1,800",
  
  },
  {
    image: denim,
    title: "M-22 Denim Jacket",
    price: "KSh 1,250",
  },
];

function Collection() {
  const[Cart,setCart]=useState([])
 
  function handleAddToCart(e,product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      e.target.textContent = "Added to Cart";
      setCart(prev=>[...prev,product])
    }
  }
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured Collection
          </h2>
          { console.log(Cart) }
          <p className="max-w-2xl text-sm text-slate-500">
            Discover the latest arrivals and premium styles selected for you.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-sm">
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-sm">
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {featuredItems.map(({ image, title, price }) => (
              <div
                key={title}
                className="group min-w-0 overflow-hidden rounded-[28px] bg-slate-50 p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex min-h-44 items-center justify-center rounded-4xl bg-white p-6">
                  <img
                    src={image}
                    alt={title}
                    className="h-44 max-w-full object-contain"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">{title}</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">
                      {price}
                    </p>
                  </div>
                  <Heart className="h-5 w-5 cursor-pointer text-slate-400 transition group-hover:text-slate-900" />
                </div>
                <button
                  onClick={e=>handleAddToCart(e,{title,image,price})}
                  className="mt-6 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition opacity-0 group-hover:opacity-100 hover:bg-emerald-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-[1.4fr_1fr] gap-6">
          <div className="grid gap-6">
            <div className="min-w-0 overflow-hidden rounded-4xl bg-slate-100 p-8 shadow-sm min-h-96">
              <div className="grid min-h-72 grid-cols-[1fr_auto] items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Casual Collection
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold text-slate-900">
                    Men’s Collection
                  </h3>
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                    Shop Now <span className="text-slate-400">→</span>
                  </button>
                </div>
                <div className="flex items-center justify-end">
                  <img
                    src={mens}
                    alt="Men’s Collection"
                    className="h-72 w-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl bg-rose-50 p-8 shadow-sm min-h-64">
              <div className="grid min-h-48 grid-cols-[1fr_auto] items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Casual Collection
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Designer Handbags
                  </h3>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Shop Now <span className="text-slate-400">→</span>
                  </button>
                </div>
                <img
                  src={handbag}
                  alt="Designer Handbags"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-4xl bg-cyan-50 p-8 shadow-sm min-h-48">
              <div className="grid min-h-40 grid-cols-[1fr_auto] items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Casual Collection
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Luxury Watches
                  </h3>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Shop Now <span className="text-slate-400">→</span>
                  </button>
                </div>
                <img
                  src={smartwatch}
                  alt="Luxury Watches"
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl bg-pink-50 p-8 shadow-sm min-h-64">
              <div className="grid min-h-48 grid-cols-[1fr_auto] items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Casual Collection
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    Ladies Collection
                  </h3>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Shop Now <span className="text-slate-400">→</span>
                  </button>
                </div>
                <img
                  src={ladies}
                  alt="Ladies Collection"
                  className="h-44 w-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
