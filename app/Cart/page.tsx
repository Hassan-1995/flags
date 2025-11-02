import CartContent from "./CartContent";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {/* Header - only for large screens */}
      <div className="hidden lg:flex bg-green-600 text-white px-6 py-3 rounded-t-lg shadow-sm w-11/12 mx-auto">
        <div className="lg:w-1/3 flex justify-between px-4">
          <span className="font-semibold">Product</span>
          <span className="font-semibold">Title</span>
        </div>
        <span className="w-1/12 text-center font-semibold">Quantity</span>
        <span className="w-1/12 text-center font-semibold">Price</span>
        <span className="w-1/6 text-center font-semibold">Size</span>
        <span className="w-1/6 text-center font-semibold">Total</span>
        <span className="w-1/6 text-center font-semibold">Action</span>
      </div>

      <CartContent />
    </div>
  );
};

export default CartPage;
