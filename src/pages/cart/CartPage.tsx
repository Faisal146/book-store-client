// Define the type for a book item
type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  image: string;
};

// Mock data for the cart
const cartItems: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 15.99,
    quantity: 2,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 10.99,
    quantity: 3,
    image: "https://via.placeholder.com/100",
  },
];

const CartPage = () => {
  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>by {item.author}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error btn-sm">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-base-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center">
          <span>Total:</span>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="btn btn-primary w-full mt-6">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
