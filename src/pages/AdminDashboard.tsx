
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { LogOut, Calendar, Users, Settings, DollarSign } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [bookings] = useState([
    {
      id: 1,
      customerName: 'Rahul Sharma',
      contact: '+91 9876543210',
      checkIn: '2024-01-15',
      checkOut: '2024-01-17',
      members: 4,
      slot: 'Morning Pool',
      amount: 5000,
      status: 'Confirmed'
    },
    {
      id: 2,
      customerName: 'Priya Patel',
      contact: '+91 8765432109',
      checkIn: '2024-01-20',
      checkOut: '2024-01-22',
      members: 2,
      slot: 'Evening Garden',
      amount: 3500,
      status: 'Pending'
    },
    {
      id: 3,
      customerName: 'Amit Kumar',
      contact: '+91 7654321098',
      checkIn: '2024-01-25',
      checkOut: '2024-01-27',
      members: 6,
      slot: 'Full Day',
      amount: 8000,
      status: 'Confirmed'
    }
  ]);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate('/admin');
  };

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.amount, 0);
  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50">
      <header className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">MADRASS VILLA</h1>
            <p className="text-sm text-gray-600">Admin Dashboard</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings.length}</div>
              <p className="text-xs text-teal-100">+2 from last week</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{confirmedBookings}</div>
              <p className="text-xs text-orange-100">Active reservations</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-emerald-100">This month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="settings">Resort Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>
                  Manage and view all resort reservations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{booking.customerName}</div>
                        <div className="text-sm text-gray-600">{booking.contact}</div>
                        <div className="text-sm text-gray-500">
                          {booking.checkIn} to {booking.checkOut} • {booking.members} guests
                        </div>
                        <div className="text-sm font-medium text-teal-600">{booking.slot}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">₹{booking.amount}</div>
                        <Badge 
                          variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}
                          className={booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Resort Management</CardTitle>
                <CardDescription>
                  Configure resort details and availability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Resort Details
                    </h3>
                    <p className="text-sm text-gray-600">Update resort information, amenities, and descriptions</p>
                    <Button className="mt-3" variant="outline">Edit Details</Button>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Time Slots
                    </h3>
                    <p className="text-sm text-gray-600">Manage available booking time slots and pricing</p>
                    <Button className="mt-3" variant="outline">Manage Slots</Button>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
