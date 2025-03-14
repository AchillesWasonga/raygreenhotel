export function Checkout() {
    const [orderPlaced, setOrderPlaced] = useState(false);
  
    const handleOrder = () => {
      setOrderPlaced(true);
    };
  
    return (
      <div className="p-6 bg-white text-black min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Checkout</h1>
        {!orderPlaced ? (
          <div>
            <p className="text-gray-700">Review your order before proceeding.</p>
            <button
              onClick={handleOrder}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Confirm Order
            </button>
          </div>
        ) : (
          <p className="text-green-600 font-bold">Your order has been placed successfully!</p>
        )}
      </div>
    );
  }