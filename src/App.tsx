import React from 'react';
import { Bluetooth as Tooth, Clock, Phone, Calendar, Star, Users, Sparkles, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Tooth className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">DentalCare Plus</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">Our Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Your Smile, Our Passion
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Experience exceptional dental care with our team of experienced professionals. 
                We're committed to giving you the confident smile you deserve.
              </p>
              <div className="mt-8">
                <a href="#appointment" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern dental clinic" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Extended Hours</h3>
              <p className="mt-2 text-gray-600">Open early and late to accommodate your busy schedule</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Sparkles className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Modern Technology</h3>
              <p className="mt-2 text-gray-600">State-of-the-art equipment for the best possible care</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Star className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Expert Care</h3>
              <p className="mt-2 text-gray-600">Experienced team of dental professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'General Dentistry',
              'Cosmetic Dentistry',
              'Orthodontics',
              'Dental Implants',
              'Teeth Whitening',
              'Emergency Care'
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">{service}</h3>
                <ChevronRight className="mt-4 h-5 w-5 text-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Lead Dentist',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Orthodontist',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300'
              },
              {
                name: 'Dr. Emily Martinez',
                role: 'Cosmetic Specialist',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300'
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Mon-Fri: 8am-7pm, Sat: 9am-4pm</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-600">
                  123 Dental Street<br />
                  Healthcare City, ST 12345
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Request Appointment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Tooth className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-semibold">DentalCare Plus</span>
              </div>
              <p className="mt-4 text-gray-400">
                Providing quality dental care for over 20 years
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white">Our Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency?</h3>
              <p className="text-gray-400">
                Call our 24/7 emergency hotline:<br />
                <span className="text-white font-semibold">(555) 999-9999</span>
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 DentalCare Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;