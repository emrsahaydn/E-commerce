import { useSelector, useDispatch } from "react-redux";
import { Trash2, Plus, Minus, ChevronRight } from "lucide-react";
import { removeFromCart, updateCartItem } from "../store/cartActions";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleCountChange = (productId, currentCount, delta) => {
    const newCount = currentCount + delta;
    if (newCount > 0) {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  const handleCheckChange = (productId, currentChecked) => {
    dispatch(updateCartItem(productId, { checked: !currentChecked }));
  };

  // Sadece seçili ürünlerin toplamını hesapla
  const subtotal = cart
    .filter((item) => item.checked)
    .reduce((acc, item) => acc + item.product.price * item.count, 0);

  const shippingFee = subtotal > 500 || subtotal === 0 ? 0 : 29.99;
  const total = subtotal + shippingFee;

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-10 px-4 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-[#252B42] mb-8">Alışveriş Sepetim</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ÜRÜN LİSTESİ */}
          <div className="flex-1 flex flex-col gap-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckChange(item.product.id, item.checked)}
                    className="w-5 h-5 accent-[#23A6F0]"
                  />
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#252B42] text-lg">{item.product.name}</h4>
                    <p className="text-sm text-[#737373] line-clamp-1">{item.product.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => handleCountChange(item.product.id, item.count, -1)}
                          className="p-1 hover:bg-gray-100 text-[#23A6F0]"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-bold text-[#252B42]">{item.count}</span>
                        <button
                          onClick={() => handleCountChange(item.product.id, item.count, 1)}
                          className="p-1 hover:bg-gray-100 text-[#23A6F0]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.product.id))}
                        className="text-[#737373] hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#23856D]">
                      {(item.product.price * item.count).toFixed(2)} ₺
                    </p>
                    <p className="text-xs text-[#737373]">Birim: {item.product.price} ₺</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-20 text-center rounded-lg shadow-sm border border-gray-100">
                <p className="text-[#737373] text-lg mb-4">Sepetiniz şu an boş.</p>
                <Link to="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold">
                  Alışverişe Başla
                </Link>
              </div>
            )}
          </div>

          {/* SİPARİŞ ÖZETİ */}
          <div className="w-full lg:w-[350px] flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#252B42] mb-6">Sipariş Özeti</h3>
              
              <div className="flex flex-col gap-4 text-[#737373]">
                <div className="flex justify-between">
                  <span>Ürünün Toplamı</span>
                  <span className="font-bold text-[#252B42]">{subtotal.toFixed(2)} ₺</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo Toplam</span>
                  <span className="font-bold text-[#252B42]">{shippingFee.toFixed(2)} ₺</span>
                </div>
                {subtotal > 0 && subtotal < 500 && (
                  <p className="text-[10px] text-[#E77C40] italic">
                    500 ₺ üzeri bedava kargo! (Eksik: {(500 - subtotal).toFixed(2)} ₺)
                  </p>
                )}
                <div className="h-[1px] bg-gray-100 my-2" />
                <div className="flex justify-between text-lg text-[#252B42] font-bold">
                  <span>Toplam</span>
                  <span className="text-[#23856D]">{total.toFixed(2)} ₺</span>
                </div>
              </div>

              <button 
                disabled={cart.length === 0 || subtotal === 0}
                className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold mt-8 hover:bg-[#1a85c2] transition-colors disabled:bg-gray-300 flex items-center justify-center gap-2"
              >
                Siparişi Onayla <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;