import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Bell className="h-6 w-6 text-gray-500" />
        <User className="h-6 w-6 text-gray-500" />
      </div>
    </header>
  );
}
