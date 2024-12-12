import React, { useEffect, useState } from "react";

const MoreDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            product_name_version: "MacBook Air Vulnerability",
            vendor: "ABC",
            severity_level: "Critical",
            vulnerability: "no",
            remediation: "yes",
            published_date: "2022-01-01",
            scraped_date: "2023-12-01",
            cvss_score: "8.5/10",
            reference: "https://example.com",
            impact: "Potential system compromise and data breach."
          }
        ];
        setProducts(mockData);
        setLoading(false);
      }, 1000);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-gray-600">Loading...</div>;
  }

  const renderCVSSScore = (cvss) => {
    const [score] = cvss.split("/").map(Number);
    const percentage = (score / 10) * 100;

    return (
      <div className="w-full">
        <div className="relative w-full bg-gray-200 rounded-full h-2">
          <div
            className={`absolute top-0 left-0 h-2 rounded-full ${
              percentage >= 70 ? "bg-red-600" : percentage >= 40 ? "bg-yellow-500" : "bg-green-500"
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-center text-gray-700 mt-1">{cvss}</p>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-1 text-center">
        Vulnerability Details
      </h1>
      <h3 className="text-center text-lg mb-8 text-gray-700">CV ID: #123455666</h3>

      <table className="w-[90%] m-auto bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product.id} className="bg-white">
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Product Name & Version</td>
              <td className="border border-gray-300 px-4 py-2">{product.product_name_version}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Vendor</td>
              <td className="border border-gray-300 px-4 py-2">{product.vendor}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Impact</td>
              <td className="border border-gray-300 px-4 py-2">{product.impact}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Severity Level</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`inline-block px-4 py-2 text-white font-bold rounded-lg ${
                    product.severity_level === "Critical"
                      ? "bg-red-600"
                      : product.severity_level === "High"
                      ? "bg-yellow-500"
                      : "bg-green-600"
                  }`}
                >
                  {product.severity_level}
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">CVSS Score</td>
              <td className="border border-gray-300 px-4 py-2">{renderCVSSScore(product.cvss_score)}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Published Date</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(product.published_date).toLocaleDateString()}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Scraped Date</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(product.scraped_date).toLocaleDateString()}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-medium">Reference</td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={product.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {product.reference}
                </a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MoreDetails;