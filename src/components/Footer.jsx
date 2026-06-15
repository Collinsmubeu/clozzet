function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-900">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400 text-xl font-black text-white">
                C
              </span>
              <span className="text-2xl font-extrabold tracking-tight">
                CLOZZET
              </span>
            </div>

            <p className="text-base leading-7 text-slate-700">
              Offering a unique and stylish perspective on fashion is our number
              one priority. Confuse your mirror by our trendy outfits.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Store</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Women’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Store Sale</li>
                <li>Collections</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Help</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Customer Support</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Track Your Order</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3 text-slate-700">
                <p>contact@clozzet.com</p>
                <p>254-700-333-333</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  F
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  I
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                  T
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
