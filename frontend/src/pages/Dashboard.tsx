import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
          <div className="p-4 bg-white border rounded-lg">
            <p>This is where your main content will go.</p>
          </div>
        </main>
      </div>
    </div>
  );
}