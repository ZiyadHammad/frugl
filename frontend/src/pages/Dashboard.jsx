import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsMutation } from "../slices/productsApiSlice";
import { setProducts } from "../slices/productSlice";
import Loader from "../components/Loader";


const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [getProducts, { isLoading }] = useGetProductsMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async (userId) => {
      const response = await getProducts(userId).unwrap();
      dispatch(setProducts(response));
    };
    fetchProducts(userInfo.id);
  }, [getProducts, dispatch, userInfo.id]);

  if (isLoading || !userInfo) {
    return <Loader />; 
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75A8.75 8.75 0 1 1 10 1.25a8.75 8.75 0 0 1 0 17.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M10 15a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1zM10 6a1 1 0 0 1-1-1 2 2 0 0 1 4 0 1 1 0 0 1-1 1 1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2H7a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2 2 2 0 0 1 4 0h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Products Tracked</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">{userInfo.productsTracked}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75A8.75 8.75 0 1 1 10 1.25a8.75 8.75 0 0 1 0 17.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M10 15a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1zM10 6a1 1 0 0 1-1-1 2 2 0 0 1 4 0 1 1 0 0 1-1 1 1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2H7a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2 2 2 0 0 1 4 0h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Notifications Enabled</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">{userInfo.notificationsEnabled ? 'Yes' : 'No'}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75A8.75 8.75 0 1 1 10 1.25a8.75 8.75 0 0 1 0 17.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M10 15a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1zM10 6a1 1 0 0 1-1-1 2 2 0 0 1 4 0 1 1 0 0 1-1 1 1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2H7a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2 2 2 0 0 1-4 0 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 0 2 2 2 0 0 1 4 0h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Products Updated</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">Last 30 minutes</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg col-span-2">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
                <p className="mt-1 text-sm text-gray-600">View and manage tracked products, notifications, and updates.</p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <p className="mt-1 text-sm text-gray-600">View recent updates and changes for tracked products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
