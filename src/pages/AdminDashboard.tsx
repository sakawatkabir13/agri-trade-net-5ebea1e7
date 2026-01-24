import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  Warehouse,
  Leaf,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data for admin dashboard
const stats = [
  {
    title: 'Total Revenue',
    value: '৳4,52,890',
    change: '+12.5%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    title: 'Active Orders',
    value: '156',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'Inventory Items',
    value: '48',
    change: '-2',
    trend: 'down',
    icon: Warehouse,
  },
  {
    title: 'Registered Buyers',
    value: '2,847',
    change: '+24',
    trend: 'up',
    icon: Users,
  },
];

const recentOrders = [
  { id: 'ORD-001', buyer: 'Rahim Uddin', total: '৳12,500', status: 'pending', date: 'Today' },
  { id: 'ORD-002', buyer: 'Fatima Begum', total: '৳8,200', status: 'dispatched', date: 'Today' },
  { id: 'ORD-003', buyer: 'Kamal Hossain', total: '৳25,000', status: 'paid', date: 'Yesterday' },
  { id: 'ORD-004', buyer: 'Sharmin Akter', total: '৳5,600', status: 'delivered', date: 'Yesterday' },
];

const recentProcurements = [
  { farmer: 'Abdul Karim', crop: 'Tomatoes', qty: '500 kg', price: '৳17,500', region: 'Dhaka' },
  { farmer: 'Mohammad Ali', crop: 'Potatoes', qty: '1000 kg', price: '৳22,000', region: 'Rajshahi' },
  { farmer: 'Jamal Uddin', crop: 'Rice', qty: '2000 kg', price: '৳1,90,000', region: 'Rangpur' },
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, 'default' | 'secondary' | 'success' | 'destructive' | 'outline' | 'accent' | 'wholesale'> = {
    pending: 'secondary',
    paid: 'accent',
    dispatched: 'wholesale',
    delivered: 'success',
    cancelled: 'destructive',
  };
  return variants[status] || 'default';
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-bold">
                  Agri<span className="text-primary">Link</span>
                </span>
              </Link>
              <Badge variant="secondary">Admin</Badge>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/admin" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
              <Link to="/admin/procurement" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Procurement
              </Link>
              <Link to="/admin/inventory" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Inventory
              </Link>
              <Link to="/admin/orders" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Orders
              </Link>
            </nav>

            <Link to="/">
              <Button variant="outline" size="sm">
                Exit Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of AgriLink operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-serif">Recent Orders</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{order.buyer}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.id} • {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{order.total}</p>
                      <Badge variant={getStatusBadge(order.status)} className="capitalize">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Procurements */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-serif">Recent Procurements</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProcurements.map((proc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Package className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">{proc.farmer}</p>
                        <p className="text-sm text-muted-foreground">
                          {proc.crop} • {proc.qty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{proc.price}</p>
                      <p className="text-xs text-muted-foreground">{proc.region}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-serif font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-6 flex-col gap-2">
              <Package className="w-6 h-6" />
              <span>Add Procurement</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex-col gap-2">
              <Warehouse className="w-6 h-6" />
              <span>Manage Inventory</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex-col gap-2">
              <ShoppingCart className="w-6 h-6" />
              <span>View Orders</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex-col gap-2">
              <Users className="w-6 h-6" />
              <span>Buyer Reports</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
