import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgety App - Budget Management</title>
        <meta name="description" content="A simple and effective budget management application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary">💰 Budgety</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-700 hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/transactions" className="text-gray-700 hover:text-primary">
                  Transactions
                </Link>
                <Link href="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Manage Your Budget Effortlessly
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Track your spending, set budgets for categories, and take control of your finances with Budgety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Get Started Free
              </Link>
              <Link
                href="/demo"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Easy Tracking</h3>
              <p className="text-gray-600">
                Quickly add and categorize your transactions for better insight into your spending patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Budget Goals</h3>
              <p className="text-gray-600">
                Set budget limits for different categories and get alerts when you're approaching your limit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2">Insights</h3>
              <p className="text-gray-600">
                Visualize your spending with charts and reports to understand where your money goes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
