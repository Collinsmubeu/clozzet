import { ChevronDown } from "lucide-react";

function Product() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/40">
            <h1 className="text-center text-3xl font-semibold text-slate-900">
              Add New Product
            </h1>

            <form className="mt-10 space-y-6">
              <div>
                <label className="sr-only" htmlFor="product-name">
                  Product Name
                </label>
                <input
                  id="product-name"
                  type="text"
                  placeholder="Product Name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="category">
                  Select Category
                </label>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 transition hover:border-slate-300"
                >
                  <span className="text-slate-500">Select Category</span>
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="flex min-w-48 items-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 transition hover:border-slate-300 cursor-pointer">
                  Upload Product Image
                  <input type="file" className="sr-only" />
                </label>
                <span className="text-sm text-slate-500">No File Chosen</span>
              </div>

              <div>
                <label className="sr-only" htmlFor="description">
                  Detailed Product Description
                </label>
                <textarea
                  id="description"
                  placeholder="Detailed Product Description"
                  className="h-44 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                />
              </div>

              <button className="mx-auto block rounded-full bg-emerald-500 px-10 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
