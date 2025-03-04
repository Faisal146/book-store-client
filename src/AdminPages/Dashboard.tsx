import {
  useGetOrdersQuery,
  useGetRevenueQuery,
} from "../redux/features/api/orders";
import { useGetBooksQuery } from "../redux/features/api/products";
import { useGetUsersQuery } from "../redux/features/api/users";

const Dashboard = () => {
  const { data: usersData } = useGetUsersQuery(undefined);
  const { data: ordersData } = useGetOrdersQuery(undefined);
  const { data: productData } = useGetBooksQuery(undefined);
  const { data: revenue } = useGetRevenueQuery(undefined);

  // console.log(usersData, ordersData, productData, revenue);

  const totalUser = usersData?.data?.meta?.total;
  const totalOrder = ordersData?.data?.meta?.total;
  const totalProduct = productData?.data?.meta?.total;
  const totalRevenue = revenue?.data?.totalRevenue[0]?.totalRevenue
    ? revenue?.data?.totalRevenue[0]?.totalRevenue
    : 0;

  // console.log(totalRevenue);
  return (
    <div>
      <h1 className="text-3xl mb-8">Dashboard</h1>

      <div className="flex flex-wrap md:flex-row flex-col">
        <div className="md:w-1/3 w-full  p-1">
          <div className="h-42  bg-cyan-300 rounded-2xl flex items-center justify-center flex-col">
            <h1 className="text-6xl">{totalRevenue.toFixed(2)} TK</h1>
            <h1 className="text-2xl">total Order Revenue </h1>
          </div>
        </div>
        <div className="md:w-1/3 w-full p-1">
          <div className="h-42 bg-amber-300 rounded-2xl flex items-center justify-center flex-col">
            <h1 className="text-6xl">{totalOrder}</h1>
            <h1 className="text-2xl">total Order </h1>
          </div>
        </div>
        <div className="md:w-1/3 w-full p-1">
          <div className="h-42 bg-pink-300 rounded-2xl flex items-center justify-center flex-col">
            <h1 className="text-6xl">{totalUser}</h1>
            <h1 className="text-2xl">Total Users </h1>
          </div>
        </div>
        <div className="md:w-1/3 w-full p-1">
          <div className="h-42 bg-green-300 rounded-2xl flex items-center justify-center flex-col">
            <h1 className="text-6xl">{totalProduct}</h1>
            <h1 className="text-2xl">total Products </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
