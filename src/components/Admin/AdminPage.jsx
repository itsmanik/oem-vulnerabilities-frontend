const AdminPage = () => {
    const dashboardData = [
        { title: "Last Scraped", value: "Dec 7, 2024, 10:30 AM" },
        { title: "Next Scraping In", value: "4 Hours 30 Min" },
        { title: "Errors Detected", value: "5" },
        { title: "Websites Included", value: "12" },
      ];
    
      const errorLogs = [
        "Error 1: Timeout on site A",
        "Error 2: Parsing failure on site B",
        "Error 3: Unknown error on site C",
      ];
    
      const includedWebsites = ["site-a.com", "site-b.com", "site-c.com"];
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-700 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-semibold">
              OEM Vulnerability Dashboard
            </h1>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardData.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {data.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600">{data.value}</p>
              </div>
            ))}

            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Error Logs
              </h2>
              <ul className="space-y-3">
                {errorLogs.length > 0 ? (
                  errorLogs.map((log, index) => (
                    <li
                      key={index}
                      className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition"
                    >
                      <span className="text-gray-600">{log}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No errors found!</p>
                )}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Websites Included
              </h2>
              <ul className="space-y-3">
                {includedWebsites.map((site, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2 text-blue-600">🌐</span>
                    <span className="text-sm font-medium">{site}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 OEM Vulnerability Dashboard</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default AdminPage;
