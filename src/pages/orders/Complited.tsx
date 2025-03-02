import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../redux/features/api/orders";

const OrderCompletedPage: React.FC = () => {
  // Example order details (replace with actual data from your backend or state)
  const orderDetails = {
    orderId: "123456",
    totalAmount: 99.99,
    items: [
      { name: "The Great Gatsby", quantity: 1, price: 15.99 },
      { name: "To Kill a Mockingbird", quantity: 2, price: 12.99 },
    ],
  };

  const { id } = useParams();

  const { data } = useGetSingleOrderQuery(id);

  console.log(data);

  const order = data?.data;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-2xl">
        <div className="card-body">
          {/* Order Confirmation Header */}
          <h1 className="text-3xl font-bold text-center mb-4">
            Order Completed!
          </h1>
          <p className="text-center text-lg mb-6">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>

          {/* Order Details */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Order ID:</span>
              <span>{order?._id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total Amount:</span>
              <span>{order?.totalPrice} TK.</span>
            </div>
            {/* <div className="flex justify-between">
              <span className="font-semibold">Estimated Delivery:</span>
              <span>{orderDetails.estimatedDelivery}</span>
            </div> */}
          </div>

          {/* Ordered Items */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Ordered Items</h2>
            <div className="space-y-3">
              {order?.products.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>
                    {item?.product?.title} (x{item?.quantity})
                  </span>
                  <span>{item?.quantity * item?.product?.price} TK.</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Division</span>
                <span>{order?.address.division}</span>
              </div>
              <div className="flex justify-between">
                <span>District</span>
                <span>{order?.address.district}</span>
              </div>
              <div className="flex justify-between">
                <span>Upazila</span>
                <span>{order?.address.upazila}</span>
              </div>
              <div className="flex justify-between">
                <span>Area</span>
                <span>{order?.address.area}</span>
              </div>
            </div>
          </div>

          {/* Continue Shopping Button */}
          <div className="mt-8 text-center">
            <Link to="/books" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link to="/orders" className="btn btn-info ml-3">
              View Order Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompletedPage;
