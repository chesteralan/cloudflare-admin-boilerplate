import { Home, Settings, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">My App</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700">
              <Home className="h-6 w-6" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700">
              <Users className="h-6 w-6" />
              <span className="ml-3">Users</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700">
              <Settings className="h-6 w-6" />
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
