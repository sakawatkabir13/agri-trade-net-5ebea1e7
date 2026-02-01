import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Bell,
  Package,
  Wallet,
  Truck,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
  Calendar,
  Leaf,
  Users,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Star,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { regions } from '@/data/products';

// Mock data for farmer dashboard
const livePrices = [
  { crop: 'Tomatoes', price: 45, change: 5.2, unit: 'kg', trend: 'up' },
  { crop: 'Potatoes', price: 30, change: -2.1, unit: 'kg', trend: 'down' },
  { crop: 'Rice (Basmati)', price: 120, change: 3.8, unit: 'kg', trend: 'up' },
  { crop: 'Carrots', price: 55, change: 0, unit: 'kg', trend: 'stable' },
  { crop: 'Wheat', price: 35, change: 1.5, unit: 'kg', trend: 'up' },
  { crop: 'Spinach', price: 40, change: -1.2, unit: 'kg', trend: 'down' },
];

const demandAlerts = [
  {
    id: 1,
    crop: 'Tomatoes',
    location: 'Dhaka',
    quantity: '500 kg',
    urgency: 'high',
    buyerCount: 12,
    priceRange: '42-48',
  },
  {
    id: 2,
    crop: 'Potatoes',
    location: 'Chittagong',
    quantity: '1000 kg',
    urgency: 'medium',
    buyerCount: 8,
    priceRange: '28-32',
  },
  {
    id: 3,
    crop: 'Rice',
    location: 'Sylhet',
    quantity: '2000 kg',
    urgency: 'high',
    buyerCount: 15,
    priceRange: '110-125',
  },
  {
    id: 4,
    crop: 'Carrots',
    location: 'Rajshahi',
    quantity: '300 kg',
    urgency: 'low',
    buyerCount: 5,
    priceRange: '50-58',
  },
];

const supplyHistory = [
  {
    id: 'SUP001',
    date: '2024-01-28',
    crop: 'Tomatoes',
    quantity: '200 kg',
    buyer: 'Fresh Mart Ltd',
    amount: 9000,
    status: 'delivered',
  },
  {
    id: 'SUP002',
    date: '2024-01-25',
    crop: 'Potatoes',
    quantity: '500 kg',
    buyer: 'City Grocers',
    amount: 15000,
    status: 'delivered',
  },
  {
    id: 'SUP003',
    date: '2024-01-22',
    crop: 'Rice',
    quantity: '1000 kg',
    buyer: 'Wholesale Hub',
    amount: 95000,
    status: 'delivered',
  },
  {
    id: 'SUP004',
    date: '2024-01-30',
    crop: 'Carrots',
    quantity: '150 kg',
    buyer: 'Green Valley',
    amount: 8250,
    status: 'in_transit',
  },
];

const performanceStats = {
  totalSales: 245000,
  ordersCompleted: 48,
  avgRating: 4.8,
  responseRate: 95,
  onTimeDelivery: 98,
  repeatBuyers: 23,
};

export default function FarmerDashboard() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold">
                  Krishok<span className="text-accent">Hub</span>
                </span>
                <span className="text-[10px] text-primary-foreground/70 -mt-1">
                  by AgriLink
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Bell className="w-5 h-5" />
              </Button>
              <Badge className="bg-accent text-accent-foreground">
                <ShieldCheck className="w-3 h-3 mr-1" />
                Verified Farmer
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Welcome to KrishokHub
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Your all-in-one platform for live prices, instant buyer access, demand alerts, and logistics support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Package className="w-4 h-4" />
                  List New Supply
                </Button>
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  <Truck className="w-4 h-4" />
                  Request Pickup
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70">This Month</p>
                      <p className="text-xl font-bold text-primary-foreground">৳{performanceStats.totalSales.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70">Orders Done</p>
                      <p className="text-xl font-bold text-primary-foreground">{performanceStats.ordersCompleted}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70">Rating</p>
                      <p className="text-xl font-bold text-primary-foreground">{performanceStats.avgRating}/5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/70">Repeat Buyers</p>
                      <p className="text-xl font-bold text-primary-foreground">{performanceStats.repeatBuyers}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="prices" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Live Prices</span>
            </TabsTrigger>
            <TabsTrigger value="demand" className="gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Demand Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">Supply History</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Performance</span>
            </TabsTrigger>
          </TabsList>

          {/* Live Prices Tab */}
          <TabsContent value="prices" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold">Live Market Prices</h2>
                <p className="text-muted-foreground">Real-time prices across all regions</p>
              </div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-card text-foreground"
              >
                <option>All Regions</option>
                {regions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {livePrices.map((item) => (
                <Card key={item.crop} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.crop}</h3>
                        <p className="text-sm text-muted-foreground">per {item.unit}</p>
                      </div>
                      <Badge
                        variant={item.trend === 'up' ? 'default' : item.trend === 'down' ? 'destructive' : 'secondary'}
                        className="gap-1"
                      >
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : item.trend === 'down' ? (
                          <TrendingDown className="w-3 h-3" />
                        ) : null}
                        {item.change > 0 ? '+' : ''}{item.change}%
                      </Badge>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-serif font-bold text-primary">৳{item.price}</span>
                      <span className="text-sm text-muted-foreground mb-1">/{item.unit}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Price History
                      </Button>
                      <Button size="sm" className="flex-1 gap-1">
                        Sell Now
                        <ArrowUpRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Smart Pricing Suggestions */}
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="w-5 h-5 text-accent" />
                  Smart Pricing Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <p className="font-medium text-foreground">Tomatoes</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Prices expected to rise 8% next week due to seasonal demand.
                    </p>
                    <Badge className="mt-2 bg-primary/10 text-primary">Best time to sell</Badge>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <p className="font-medium text-foreground">Rice (Basmati)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Stable prices. Consider bulk supply for better margins.
                    </p>
                    <Badge variant="secondary" className="mt-2">Stable market</Badge>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <p className="font-medium text-foreground">Potatoes</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Price dip expected. Consider storage if possible.
                    </p>
                    <Badge variant="destructive" className="mt-2">Hold if possible</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Demand Alerts Tab */}
          <TabsContent value="demand" className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold">Demand Alerts</h2>
              <p className="text-muted-foreground">Know exactly what to supply, where, and when</p>
            </div>

            <div className="grid gap-4">
              {demandAlerts.map((alert) => (
                <Card key={alert.id} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          alert.urgency === 'high' ? 'bg-destructive/10' :
                          alert.urgency === 'medium' ? 'bg-accent/20' : 'bg-muted'
                        }`}>
                          <AlertCircle className={`w-6 h-6 ${
                            alert.urgency === 'high' ? 'text-destructive' :
                            alert.urgency === 'medium' ? 'text-accent' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{alert.crop}</h3>
                            <Badge variant={
                              alert.urgency === 'high' ? 'destructive' :
                              alert.urgency === 'medium' ? 'default' : 'secondary'
                            }>
                              {alert.urgency} demand
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {alert.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Package className="w-3 h-3" />
                              {alert.quantity}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {alert.buyerCount} buyers
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              ৳{alert.priceRange}/kg
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button className="gap-2 shrink-0">
                        Fulfill Demand
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Supply History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold">Supply History</h2>
                <p className="text-muted-foreground">Track your supplies, payments, and performance</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Filter by Date
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-medium text-muted-foreground">Order ID</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Crop</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Quantity</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Buyer</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                        <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplyHistory.map((supply) => (
                        <tr key={supply.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                          <td className="p-4 font-mono text-sm">{supply.id}</td>
                          <td className="p-4 text-muted-foreground">{supply.date}</td>
                          <td className="p-4 font-medium">{supply.crop}</td>
                          <td className="p-4">{supply.quantity}</td>
                          <td className="p-4">{supply.buyer}</td>
                          <td className="p-4 font-semibold text-primary">৳{supply.amount.toLocaleString()}</td>
                          <td className="p-4">
                            <Badge variant={supply.status === 'delivered' ? 'default' : 'secondary'} className="gap-1">
                              {supply.status === 'delivered' ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <Truck className="w-3 h-3" />
                              )}
                              {supply.status === 'delivered' ? 'Delivered' : 'In Transit'}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Payment Summary */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Total Earned</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-foreground">৳127,250</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">Pending Payment</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-foreground">৳8,250</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">Paid This Month</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-foreground">৳119,000</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold">Your Performance</h2>
              <p className="text-muted-foreground">Build trust and unlock better opportunities</p>
            </div>

            {/* Verification Status */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Verified Supplier</h3>
                    <p className="text-muted-foreground">Your profile is verified and trusted by buyers</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Identity Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Farm Location Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Bank Account Linked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">Quality Certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Response Rate</span>
                    <Badge variant="default">{performanceStats.responseRate}%</Badge>
                  </div>
                  <Progress value={performanceStats.responseRate} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">On-time Delivery</span>
                    <Badge variant="default">{performanceStats.onTimeDelivery}%</Badge>
                  </div>
                  <Progress value={performanceStats.onTimeDelivery} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Buyer Rating</span>
                    <Badge variant="default">{performanceStats.avgRating}/5</Badge>
                  </div>
                  <Progress value={performanceStats.avgRating * 20} className="h-2" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-muted-foreground">Repeat Buyers</span>
                    <Badge variant="secondary">{performanceStats.repeatBuyers}</Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Users key={i} className="w-4 h-4 text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips for Better Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips to Improve Your Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-accent">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Respond within 2 hours</p>
                      <p className="text-sm text-muted-foreground">Quick responses lead to 40% more sales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-accent">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Add quality photos</p>
                      <p className="text-sm text-muted-foreground">Listings with photos get 3x more views</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-accent">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Maintain consistent supply</p>
                      <p className="text-sm text-muted-foreground">Regular suppliers get priority matching</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-accent">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Keep quality consistent</p>
                      <p className="text-sm text-muted-foreground">High ratings unlock premium buyers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom CTA */}
      <div className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-serif font-bold text-foreground">Need logistics support?</h3>
              <p className="text-muted-foreground">We'll pick up from your farm and deliver to buyers</p>
            </div>
            <Button variant="hero" size="lg" className="gap-2">
              <Truck className="w-5 h-5" />
              Request Transport
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
