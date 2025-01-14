import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout';

export default function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the booking
    // For now, we'll just simulate it and navigate
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    
    // Navigate to confirmation page with booking details
    navigate('/booking-confirmation', { 
      state: { 
        ...formData,
        date: selectedDate,
        time: selectedTime
      }
    });
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-[#E6F4F1] to-white">

      <main className="max-w-3xl mx-auto px-6 py-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 mb-8"
        >
          <span className="mr-2">←</span> Back
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Client Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      🔒
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Add Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </form>
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium">Ankit Rao</p>
                <p className="text-sm text-gray-600">
                  {selectedDate?.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} at {selectedTime}
                </p>
                <p className="text-sm text-gray-600">Online</p>
                <p className="text-sm text-gray-600">Staff Member #1</p>
                <p className="text-sm text-gray-600">1 hr</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <div className="flex justify-between items-center border-t pt-4">
                <span>Total</span>
                <span className="font-medium">₹4</span>
              </div>
            </section>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-lg font-medium mt-6"
            >
              Book Now
            </button>
          </div>
        </div>
      </main>
    </div>

    </Layout>
  );
}