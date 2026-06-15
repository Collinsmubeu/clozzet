import {
  Backpack,
  Handbag,
  Shirt,
  ShoppingBag,
  SportShoe,
  Wallet,
  Glasses,
} from "lucide-react";

const categories = [
  { label: "Jackets", icon: Backpack },
  { label: "Handbags", icon: Handbag },
  { label: "Shirts", icon: Shirt },
  { label: "Dresses", icon: Glasses },
  { label: "Jeans", icon: ShoppingBag },
  { label: "Shoes", icon: SportShoe },
  { label: "Sweaters", icon: Wallet },
];

function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-semibold text-slate-900">
          Top Categories
        </h2>
        <div className="mt-12 grid grid-cols-7 gap-6">
          {categories.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group flex min-w-0 flex-col items-center gap-4 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 shadow-sm transition group-hover:shadow-lg">
                <Icon className="h-10 w-10 text-slate-900" />
              </div>
              <span className="text-sm font-medium uppercase tracking-[0.08em] text-slate-900">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
