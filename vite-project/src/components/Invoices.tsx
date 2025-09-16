import React from 'react';

interface InvoiceCardProps {
  clientName: string;
  amount: string;
  dueDate: string;
  status: string;
}

const Invoices=({ clientName, amount, dueDate, status }: InvoiceCardProps) => {

  return (
    <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border mb-2">
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">{clientName}</h3>
        <p className="text-xs sm:text-sm text-gray-500">
          ₹{amount} • Due {dueDate}
        </p>
      </div>

      {status === "Update" ? (
        <button className="bg-purple-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
          Update
        </button>
      ) : (
        <span
          className={`text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full whitespace-nowrap ${
            status === "Paid"
              ? "bg-green-100 text-green-600"
              : status === "Partially Paid"
              ? "bg-yellow-200 text-yellow-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      )}
    </div>
  );
}

export default Invoices;