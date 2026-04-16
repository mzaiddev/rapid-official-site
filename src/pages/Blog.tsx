import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const posts = [
    {
      title: 'The Future of ERP: AI and Machine Learning Integration',
      excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing enterprise resource planning systems, making them more predictive and automated.',
      category: 'Technology',
      date: 'Oct 15, 2023',
      author: 'Sarah Jenkins',
      image: 'https://picsum.photos/seed/tech1/800/600'
    },
    {
      title: '5 Signs Your Business Needs a Custom Software Solution',
      excerpt: 'Off-the-shelf software might not be enough for your growing business. Learn the key indicators that it\'s time to invest in custom development.',
      category: 'Business Strategy',
      date: 'Sep 28, 2023',
      author: 'Michael Chen',
      image: 'https://picsum.photos/seed/business1/800/600'
    },
    {
      title: 'Securing Your Enterprise Data in the Cloud Era',
      excerpt: 'As more businesses move their operations to the cloud, data security becomes paramount. Explore best practices for keeping your enterprise data safe.',
      category: 'Security',
      date: 'Sep 12, 2023',
      author: 'David Rodriguez',
      image: 'https://picsum.photos/seed/security1/800/600'
    },
    {
      title: 'How Retail ERP Transforms Customer Experience',
      excerpt: 'Learn how modern retail ERP systems go beyond inventory management to deliver personalized and seamless experiences for your customers.',
      category: 'Retail',
      date: 'Aug 30, 2023',
      author: 'Emily Watson',
      image: 'https://picsum.photos/seed/retail1/800/600'
    },
    {
      title: 'The Role of IoT in Manufacturing ERP',
      excerpt: 'Internet of Things (IoT) devices are providing real-time data to manufacturing ERPs, enabling predictive maintenance and optimized production lines.',
      category: 'Manufacturing',
      date: 'Aug 15, 2023',
      author: 'James Wilson',
      image: 'https://picsum.photos/seed/manufacturing1/800/600'
    },
    {
      title: 'Navigating Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Digital transformation can be daunting. Follow our comprehensive guide to ensure a smooth transition for your organization.',
      category: 'Digital Transformation',
      date: 'Jul 22, 2023',
      author: 'Sarah Jenkins',
      image: 'https://picsum.photos/seed/digital1/800/600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/blog/1920/500" alt="Blog Hero" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-widest uppercase">Latest News</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Our Blog</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Insights, news, and expert opinions on software development, ERP solutions, and digital transformation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#d32f2f]">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#d32f2f] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="text-[#d32f2f] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-slate-800 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Read More Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 p-4 flex justify-end border-b border-slate-100">
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            
            <div className="h-64 sm:h-80 w-full relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#d32f2f]">
                {selectedPost.category}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {selectedPost.author}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">
                {selectedPost.title}
              </h2>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                  {selectedPost.excerpt}
                </p>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">The Impact on Business</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <blockquote className="border-l-4 border-[#d32f2f] pl-4 my-8 italic text-slate-700 text-lg bg-red-50 py-4 pr-4 rounded-r-lg">
                  "The integration of these new technologies is not just an upgrade; it's a fundamental shift in how we approach enterprise resource planning."
                </blockquote>
                
                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Looking Ahead</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
