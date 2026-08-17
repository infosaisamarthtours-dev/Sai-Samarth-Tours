import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Ultimate Guide to Shirdi Sai Baba VIP Darshan & 3 Jyotirlingas Yatra",
      excerpt: "Planning your sacred yatra to Shirdi, Bhimashankar, Trimbakeshwar, and Ghrishneshwar? Read our step-by-step guide on VIP darshan passes, best travel seasons, and itinerary tips.",
      author: "Sai Samarth Travel Experts",
      date: "August 15, 2026",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      category: "Pilgrimage Guide"
    },
    {
      id: 2,
      title: "Top 10 Sacred Shrines & Ghat Experience in Kashi, Ayodhya, and Prayagraj",
      excerpt: "Discover the spiritual essence of Varanasi Kashi Vishwanath Corridor, Sarnath, Shri Ram Janmabhoomi temple in Ayodhya, and Triveni Sangam in Prayagraj.",
      author: "Pilgrimage Team",
      date: "August 10, 2026",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
      category: "Heritage & Faith"
    },
    {
      id: 3,
      title: "Malaysia & Singapore Twin Country Tour Guide for Indian Families",
      excerpt: "Everything you need to know about flying from Bangalore to Malaysia and Singapore: visa on arrival, Universal Studios theme park tips, Batu Caves, and Genting Cable Car.",
      author: "International Travel Desk",
      date: "August 05, 2026",
      image: "https://images.unsplash.com/photo-1596422846543-75c6ff816766?q=80&w=1200&auto=format&fit=crop",
      category: "International Holidays"
    }
  ];

  return (
    <div className="flex-grow bg-[#FBF9F5] font-sans pb-24">
      {/* Hero Banner */}
      <div className="bg-[#0B1E3F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-200">Blog</span>
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            Travel Articles & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif-brand mb-4">
            Sai Samarth Travel Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Inspirational travel stories, spiritual yatra guides, and insider tips for domestic & international holidays.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#F59E0B]" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#2563EB]" /> {post.author}</span>
                </div>

                <h3 className="text-lg font-bold font-serif-brand text-[#114088] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#114088] group-hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <BookOpen className="w-4 h-4 text-gray-300 group-hover:text-[#F59E0B] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
