import './App.css';
import { ChevronDown, Plus } from 'lucide-react';
import Chart from './components/Chart';
import Invoices from './components/Invoices';
import Navbar from './components/Navbar';

function App() {
 const invoiceData = [
  { clientName: "Client Name", amount: "125,000", dueDate: "2024-06-15", status: "Disputed" },
  { clientName: "Client Name", amount: "125,000", dueDate: "2024-06-15", status: "Partially Paid" },
  { clientName: "Income Trend", amount: "125,000", dueDate: "2024-06-15", status: "Disputed" },
  { clientName: "Income Trend", amount: "125,000", dueDate: "2024-06-15", status: "Paid" },
  { clientName: "Income Trend", amount: "125,000", dueDate: "2024-06-15", status: "Disputed" },
  { clientName: "Income Trend", amount: "125,000", dueDate: "2024-06-15", status: "Partially Paid" },
  { clientName: "Income Trend", amount: "125,000", dueDate: "2024-06-15", status: "Paid" },
];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            <div className="md:col-span-1 space-y-4 lg:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-3">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">Create New Invoice</p>
                  <p className="text-xs sm:text-sm text-gray-500 text-center">Start by creating and sending new invoice</p>
                </div>
                <div className="flex justify-center flex-wrap space-x-1 sm:space-x-2 text-xs sm:text-sm">
                  <button className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">1 Month</button>
                  <button className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">3 Months</button>
                  <button className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">6 Months</button>
                  <button className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Custom</button>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <p className="text-xs sm:text-sm mb-2 text-gray-500">Time Period</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-gray-800">₹295.00</span>
                    <button className="flex items-center px-3 py-1 sm:px-4 sm:py-2 text-white bg-purple-600 rounded-lg font-medium shadow-md hover:bg-purple-700 text-xs sm:text-sm">
                      Update Status <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </button>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <p className="text-xs sm:text-sm mb-2 text-gray-500">Total Earnings</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-gray-800">₹9,517.00</span>
                  <span className="text-green-500 text-xs sm:text-sm font-medium">23%</span> 
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 lg:space-y-6">
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Income Trend</h2>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    6 Months <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
                  </div>
                </div>
                <Chart />
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Your Invoices</h2>
                  <a href="#" className="text-xs sm:text-sm font-medium text-purple-600 hover:underline">
                    View All
                  </a>
                </div>
                <div className="space-y-4">
                  {invoiceData.map((invoice, index) => (
                    <Invoices
                      key={index}
                      clientName={invoice.clientName}
                      amount={invoice.amount}
                      dueDate={invoice.dueDate}
                      status={invoice.status}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;