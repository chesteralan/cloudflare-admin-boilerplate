import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-x-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  );
}
