import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Budget, Transaction } from '@/types';

export default function Dashboard() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch dashboard data from API
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - Budgety App</title>
      </Head>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's your financial overview.</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Balance</h3>
                <p className="text-3xl font-bold text-gray-900">$0.00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">This Month Spent</h3>
                <p className="text-3xl font-bold text-red-600">$0.00</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">This Month Income</h3>
                <p className="text-3xl font-bold text-green-600">$0.00</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Budgets Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Budgets</h2>
              {budgets.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No budgets set yet</p>
              ) : (
                <div className="space-y-4">
                  {budgets.map((budget) => (
                    <div key={budget.id}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">{budget.category}</span>
                        <span className="text-sm text-gray-600">
                          ${budget.spent} / ${budget.limit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            budget.spent > budget.limit ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          style={{
                            width: `${Math.min((budget.spent / budget.limit) * 100, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Transactions Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
              {recentTransactions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No transactions yet</p>
              ) : (
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-semibold text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-600">{transaction.category}</p>
                      </div>
                      <span
                        className={`font-bold ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
