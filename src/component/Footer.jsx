
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top row: Brokerage links */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <a
              href="#"
              className="text-sm mb-2 sm:mb-0 sm:mr-6 hover:underline"
            >
              Brokerage Customer Relationship Summary
            </a>
            <a href="#" className="text-sm hover:underline">
              FINRA’s BrokerCheck
            </a>
          </div>
          <div className="mt-4 sm:mt-0">
            {/* Social Icons Row (replace # with real links) */}
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="Twitter (X)" className="hover:opacity-70">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-70"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" aria-label="TikTok" className="hover:opacity-70">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-70">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle row: Columns */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Invest
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Credit Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gold
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Crypto
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Retirement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Futures
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Robinhood Legend
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Learn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Snacks
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Commitments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Regulatory Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Regulatory</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclosures
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Law Enforcement Requests
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  Your Privacy Choices
                  <span className="ml-1 bg-gray-600 rounded-full px-2 py-1 text-xs">
                    ✓✗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Extra Column (if needed) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ESG & More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  ESG
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Index
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Robinhood Merch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row: Address and copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-sm mb-2 md:mb-0">
            Robinhood, 85 Willow Road, Menlo Park, CA 94025.
          </div>
          <div className="text-sm">© 2025 Robinhood. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
