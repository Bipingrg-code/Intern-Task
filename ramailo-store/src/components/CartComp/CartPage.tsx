import { useSelector } from "react-redux";
import { RootState } from "../../App/store";

const CartPage = () => {
  const { cartItems, amount } = useSelector((state: RootState) => state.cart);
  console.log(cartItems);

  if (amount < 1) {
    return <h2 className="text-center text-2xl p-8">Your cart is Empty</h2>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Your Cart</h1>

      <div className="flex justify-center flex-wrap items-center flex-col gap-4 md:flex-row">
        {cartItems.map((item: any) => (
          <div key={item} className="bg-white rounded-lg p-4 shadow-md">
            <img
              src={item.image} // Use the actual item's image URL
              alt={item.title}
              className="w-40 h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-500">${item.price}</p>
            <div className="mt-2">
              <p className="text-gray-600">Quantity: {item.id}</p>
              <div className="flex mt-2">
                <button className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md mr-2">
                  -
                </button>
                <button className="text-white bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md">
                  +
                </button>
              </div>
              <p className="text-gray-600">
                Subtotal: ${item.price * item.total}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col justify-center items-center">
        <p className="text-lg font-semibold">Total Amount: ${amount}</p>
        <button className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
