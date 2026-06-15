import { useState } from "react";
import knittedSweater from "../assets/knitted-sweater.png";
import sneakers from "../assets/unisex.png";
import dress from "../assets/slim-banquet-dress.png";

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Strip Knitted Sweater",
      size: "XL",
      price: 2250,
      qty: 1,
      img: knittedSweater,
    },
    {
      id: 2,
      name: "Unisex Airforce Sneakers",
      size: "40",
      price: 2000,
      qty: 1,
      img: sneakers,
    },
    {
      id: 3,
      name: "Slim Banquet Dress",
      size: "M",
      price: 10250,
      qty: 1,
      img: dress,
    },
  ]);

  const changeQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it,
      ),
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const deliveryFee = items.length ? 450 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white border rounded shadow-sm">
          <ul className="flex justify-between p-4 font-bold border-b">
            <li className="w-1/2">Product</li>
            <li className="w-1/6 text-center">Quantity</li>
            <li className="w-1/6 text-right">Price</li>
          </ul>

          <div>
            {items.map((item) => (
              <div key={item.id} className="flex items-center p-6 border-b">
                <div className="flex items-center w-1/2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-contain mr-6"
                  />
                  <div>
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      Size: {item.size}
                    </div>
                  </div>
                </div>

                <div className="w-1/6 flex justify-center">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="px-3"
                    >
                      −
                    </button>
                    <div className="px-3">{item.qty}</div>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="px-3"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-1/6 text-right font-medium">
                  KSh {item.price.toLocaleString()}
                </div>

                <div className="w-1/12 text-right pl-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="col-span-4">
          <div className="bg-gray-50 p-6 border rounded shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
            <p className="text-gray-700 mb-3">Have a promo code? Apply here</p>
            <div className="flex gap-3 mb-6">
              <input
                placeholder="Promo Code(optional)"
                className="flex-1 p-2 border rounded"
              />
              <button className="bg-green-400 text-white px-4 rounded">
                Apply
              </button>
            </div>

            <div className="flex justify-between py-2 border-t border-b">
              <span>Subtotal</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between py-2">
              <span>Delivery Fee</span>
              <span>KSh {deliveryFee.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-lg font-bold">Total</div>
              <div className="text-lg font-bold">
                KSh {total.toLocaleString()}
              </div>
            </div>

            <button className="w-full mt-6 bg-green-400 text-white py-3 rounded text-lg">
              Checkout
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
