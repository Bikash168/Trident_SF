import React from 'react';

const FinancialSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Financial Details */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-purple-600 text-3xl font-bold mb-4">Financial Details</h2>
            <div className="bg-white shadow-lg p-6 rounded-md">
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Registration No</td>
                    <td className="py-2">274409</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">PAN No</td>
                    <td className="py-2">AAHCR1346N</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">License Number</td>
                    <td className="py-2">104625</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">80G Registration Number</td>
                    <td className="py-2">DEL-RE28502-27042018/9939</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">12A Registration Number</td>
                    <td className="py-2">DEL-RR27075-27042018/8245</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">NITI Aayog Reg.</td>
                    <td className="py-2">ID U85100DL2014NPL274409</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-yellow-600 text-3xl font-bold mb-4">Donor's Testimonial</h2>
            <div className="bg-white shadow-lg p-6 rounded-md">
              <p className="text-gray-700 text-lg mb-4">
                "I am privileged to be part of Raise India Foundation and really happy to see outstanding work done by them.
                It is a best way to stay connected with the noble cause and have the feeling of doing something for society.
                The best part is, you don't need huge money to contribute for such noble causes, even a small amount can
                make a massive difference."
              </p>
              <p className="font-semibold text-gray-900">Mr. Sachin Sharma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;
