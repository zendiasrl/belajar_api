const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between ms-5 p-4">
        <h5 className="text-lg font-bold">Sidebar</h5>
        <button className="text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="ms-5">
        <ul className="px-4 py-2">
          <li className="py-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M3 12l9 9.01M9 21h.01"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2m-4 0a2 2 0 00-2 2v3"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
