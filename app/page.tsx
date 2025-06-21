export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SUARA SHAH ALAM</h1>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Complaints</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Your voice. Your city.</h2>
        <p className="text-gray-700 mb-6">
          Platform for Shah Alam residents to share issues and stay informed.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Submit a Complaint
        </button>
      </section>

      {/* News Cards */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold mb-6">Latest News</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white shadow-md rounded p-4">
              <h4 className="font-semibold text-lg mb-2">News Title {n}</h4>
              <p className="text-sm text-gray-600 mb-3">
                Brief description of news article {n}.
              </p>
              <a href="#" className="text-blue-600 text-sm hover:underline">Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">About Suara Shah Alam</h3>
        <p className="max-w-xl mx-auto text-gray-700">
          Civic initiative helping Shah Alam residents voice concerns, stay updated, and act together.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Suara Shah Alam. All rights reserved.
      </footer>
    </main>
  );
}
