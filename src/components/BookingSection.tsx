import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Clock, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    contact: '',
    checkIn: '',
    checkOut: '',
    members: '',
    timeSlot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    { value: 'morning-pool', label: 'Morning Pool (9:00 AM - 1:00 PM)', price: 2500 },
    { value: 'afternoon-garden', label: 'Afternoon Garden (2:00 PM - 6:00 PM)', price: 2000 },
    { value: 'evening-premium', label: 'Evening Premium (6:00 PM - 10:00 PM)', price: 3500 },
    { value: 'full-day', label: 'Full Day Experience (9:00 AM - 10:00 PM)', price: 20000 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.customerName || !formData.contact || !formData.checkIn || !formData.checkOut || !formData.members || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate payment processing
    try {
      // Here you would integrate with Razorpay
      toast({
        title: "Booking Initiated",
        description: "Redirecting to payment gateway...",
      });
      
      // Simulate payment success after 2 seconds
      setTimeout(() => {
        toast({
          title: "Booking Confirmed! 🎉",
          description: "Your reservation has been successfully created. You will receive a confirmation email shortly.",
        });
        
        // Reset form
        setFormData({
          customerName: '',
          contact: '',
          checkIn: '',
          checkOut: '',
          members: '',
          timeSlot: ''
        });
        
        setIsSubmitting(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const selectedSlot = timeSlots.find(slot => slot.value === formData.timeSlot);

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Book Your <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Stay</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reserve your perfect getaway at MADRAS VILLA. Choose your preferred dates and experience luxury like never before.
            </p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center bg-gradient-to-r from-teal-600 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Make a Reservation</CardTitle>
              <CardDescription className="text-teal-100">
                Fill in your details and select your preferred experience
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="customerName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="customerName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      className="border-2 border-gray-200 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-gray-700 font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="contact"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                      className="border-2 border-gray-200 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check-in Date *
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      className="border-2 border-gray-200 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check-out Date *
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      className="border-2 border-gray-200 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="members" className="text-gray-700 font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Guests *
                    </Label>
                    <Select value={formData.members} onValueChange={(value) => handleInputChange('members', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-teal-500">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Guest{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeSlot" className="text-gray-700 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Experience Package *
                  </Label>
                  <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-teal-500">
                      <SelectValue placeholder="Choose your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(slot => (
                        <SelectItem key={slot.value} value={slot.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{slot.label}</span>
                            <span className="ml-4 font-semibold text-teal-600">₹{slot.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {selectedSlot && (
                  <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl border-2 border-teal-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">{selectedSlot.label}</h4>
                        <p className="text-gray-600">Perfect for creating unforgettable memories</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-teal-600">₹{selectedSlot.price}</p>
                        <p className="text-sm text-gray-500">per day</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Book Now & Pay 
                    </div>
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Secure payment powered by Razorpay • All major cards accepted
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
