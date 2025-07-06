import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-sm rounded-lg p-8 mb-8">
          <div className="border-l-4 border-blue-600 pl-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Your privacy is important. As of July 6, 2025 we have updated our
              Privacy Policy to include additional detail about our data
              processing.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Tigrina Kids Bible Privacy Policy
            </h1>
            <p className="text-gray-600">Effective as of July 6, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-8 py-6">
            <div className="prose max-w-none">
              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  Information We Don't Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not collect, store, or share any personal information
                  from users of this app. We do not require account creation,
                  email addresses, or any personal details.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  Device Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This app does not access or collect device information such as
                  your device ID, IP address, or location data.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  Usage Analytics
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not track how you use the app or collect analytics about
                  your Bible reading habits.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </span>
                  Third-Party Services
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This app does not integrate with any third-party analytics,
                  advertising, or tracking services.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    5
                  </span>
                  Local Storage Only
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  After loading the PDF for the first time, it will be cached
                  locally on your device and not transmitted to our servers.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    6
                  </span>
                  Internet Connection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This app requires an internet connection initially for loading
                  the PDF content.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    7
                  </span>
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Since we collect no information whatsoever, this app is safe
                  for users of all ages.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    8
                  </span>
                  Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If we ever change our data practices, we will update this
                  policy and the app listing.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    9
                  </span>
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this privacy policy, contact us
                  at:
                </p>
                <div className="bg-white rounded-md p-4 border border-gray-200">
                  <a
                    href="mailto:leo.ragual@ragpiestudio.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    leo.ragual@ragpiestudio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 Tigrina Kids Bible. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
