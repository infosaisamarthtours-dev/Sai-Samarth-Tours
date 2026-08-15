import React from 'react';
import { CheckCircle, Users, Award, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="flex-grow bg-[#FBF9F5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#114088] mb-4 font-serif">About Sai Samarth Tours</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dedicated to providing spiritually enriching journeys and unforgettable holiday experiences across India and the globe.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#114088] mb-6 font-serif">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a deep devotion to providing seamless and comfortable spiritual journeys, 
                Sai Samarth Tours has grown into a trusted name in pilgrimage and holiday travel. 
                Our flagship Shirdi packages are crafted to give devotees the peace of mind they need 
                to focus entirely on their spiritual experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have expanded our horizons beyond sacred destinations. Today, we 
                proudly offer comprehensive domestic holidays to Kashmir, Rajasthan, and Andaman, as 
                well as exotic international getaways to Bhutan, Nepal, and beyond. Every itinerary 
                is meticulously planned to ensure maximum comfort, safety, and joy.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop" 
                alt="Devotion and Travel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-[#114088] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#114088] mb-2">Trust & Safety</h3>
            <p className="text-sm text-gray-600">Your security and comfort are our highest priorities on every journey.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-[#114088] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#114088] mb-2">Quality Service</h3>
            <p className="text-sm text-gray-600">Premium accommodations, AC transport, and expert guides.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-[#114088] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#114088] mb-2">Family Friendly</h3>
            <p className="text-sm text-gray-600">Itineraries designed for all age groups, ensuring a hassle-free family trip.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-50 text-[#114088] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#114088] mb-2">Expert Planning</h3>
            <p className="text-sm text-gray-600">Decades of experience in curating flawless travel logistics.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
