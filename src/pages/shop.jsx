import { ChevronDown, Heart, Search } from "lucide-react";
import airsense from "../assets/Airsense-pleated.png";
import denimJeans from "../assets/denim-jeans.png";
import leatherJacket from "../assets/leather-jacket.png";
import cocktail from "../assets/cocktail.png";
import denim from "../assets/denim.png";
import dress from "../assets/dress.png";
import graphicTshirts from "../assets/graphic-tshirts.png";
import handbag from "../assets/handbag.png";
import jeans from "../assets/jeans.png";
import leatherShoes from "../assets/leather-shoes.png";
import smartwatch from "../assets/smartwatch.png";
import pallazo from "../assets/pallazo.png";
import serpenti from "../assets/serpenti-forever.png";
import shoe from "../assets/shoe.png";
import sweatshirts from "../assets/sweatshirts.png";
import bomber from "../assets/bomber.png";
import sweater from "../assets/knitted-sweater.png";
import tshirt from "../assets/tshirt.png";

const products = [
  { name: "Blue Ragged Jeans", image: denimJeans, price: "KSh 2,250" },
  { name: "Brown Leather Jacket", image: leatherJacket, price: "KSh 2,250" },
  { name: "Slim Banquet Dress", image: cocktail, price: "KSh 10,250" },
  { name: "Blue Denim Jacket", image: denim, price: "KSh 2,250" },
  { name: "Quartz Men’s Watch", image: smartwatch, price: "KSh 2,250" },
  { name: "Women Denim Jeans", image: pallazo, price: "KSh 2,250" },
  { name: "Brown Handbag", image: handbag, price: "KSh 2,250" },
  { name: "Unisex Graphic T-shirt", image: graphicTshirts, price: "KSh 2,250" },
  { name: "Black Bomber Jacket", image: bomber, price: "KSh 2,250" },
  { name: "Pleated Palazzo Pants", image: pallazo, price: "KSh 2,250" },
  { name: "Pure Leather Shoes", image: leatherShoes, price: "KSh 2,250" },
  { name: "Purple Serpenti Purse", image: serpenti, price: "KSh 2,250" },
  { name: "Airsense Pleated Pants", image: airsense, price: "KSh 2,250" },
  { name: "Strip Knitted Sweater", image: sweater, price: "KSh 2,250" },
  { name: "Elegant Off-Shoulder Top", image: dress, price: "KSh 2,250" },
  { name: "Sporty Jeans", image: jeans, price: "KSh 2,250" },
  { name: "Crisp White Sweatshirt", image: sweatshirts, price: "KSh 2,250" },
  { name: "Luxury Leather Shoes", image: leatherShoes, price: "KSh 2,250" },
  { name: "Casual T-Shirt", image: tshirt, price: "KSh 2,250" },
  { name: "Classic Denim Jacket", image: denim, price: "KSh 2,250" },
];

function Shop() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex justify-center">
          <div className="flex w-full max-w-5xl items-center rounded-full border border-emerald-300 bg-white px-4 py-3 shadow-sm">
            <div className="flex w-full items-center gap-4 text-slate-500">
              <Search className="h-6 w-6" />
              <input
                className="w-full bg-transparent text-base text-slate-600 outline-none placeholder:text-slate-400"
                placeholder="Search Products and categories"
              />
            </div>
            <div className="mx-4 h-8 w-px bg-slate-200" />
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Filter Category
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-4 gap-6">
          {products.map(({ name, image, price }) => (
            <article
              key={name}
              className="min-w-0 rounded-[28px] bg-slate-50 p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-4xl bg-white p-4">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-left">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">{name}</h3>
                  <p className="mt-2 text-sm font-semibold text-emerald-500">
                    {price}
                  </p>
                </div>
                <Heart className="h-5 w-5 text-slate-400 transition hover:text-slate-900" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: 5 }, (_, index) => (
            <button
              key={index}
              className={`h-10 w-10 rounded-full border ${index === 0 ? "border-emerald-400 bg-emerald-400 text-white" : "border-slate-300 text-slate-700"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] bg-slate-100 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Subscribe & get up to 30% OFF
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 rounded-full border border-slate-300 bg-white px-5 py-3 outline-none focus:border-emerald-400"
            />
            <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
