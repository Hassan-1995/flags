import CartContent from "./CartContent";

const CartPage = () => {
  return (
    <>
      <div className="hidden lg:flex bg-green-400 px-5 h-10 w-full justify-center items-center">
        <div className="lg:flex  lg:w-1/3 ">
          <div className="w-1/2">
            <h1 className="font-bold flex justify-center">Image</h1>
          </div>
          <h1 className="w-1/2 font-bold flex justify-center">Title</h1>
        </div>
        <div className="w-1/12 font-bold flex justify-center">
          <h1>Quantity</h1>
        </div>
        <div className="w-1/12 font-bold flex justify-center">
          <h1>Price</h1>
        </div>
        <div className="w-1/6 font-bold flex justify-center">
          <h1>Size</h1>
        </div>
        <div className="w-1/6 font-bold flex justify-center">
          <h1>Total</h1>
        </div>
        <div className="w-1/6 font-bold flex justify-center">
          <h1>Action</h1>
        </div>
      </div>

      <CartContent />
    </>
  );
};

export default CartPage;
