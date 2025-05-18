import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image 
            src="/images/about-hero.jpg" 
            alt="Tailor at work" 
            fill
            className="object-cover"
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Master Stitch</h1>
            <p className="text-xl max-w-2xl mx-auto">Quality tailoring in Cubao, Quezon City since 2010</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/images/tailor-shop.jpg" 
                    alt="Our shop in Cubao" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Master Stitch Tailoring was founded in 2010 by Master Tailor Roberto Santos in Cubao, Quezon City. With over 20 years of experience working in Manila's premier fashion houses, Roberto wanted to bring high-quality tailoring services to the local community.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small shop with just one sewing machine has grown into a trusted tailoring service known for precision craftsmanship and personalized attention to detail. While we've expanded our services and team over the years, we've never compromised on the quality that earned us our reputation.
                </p>
                <p className="text-gray-700 mb-6">
                  Located at 123 Aurora Blvd in Cubao, we've been serving clients from across Quezon City and Metro Manila for over a decade. Our clients range from business professionals needing perfectly fitted suits to brides wanting dream wedding attire, to families looking to extend the life of their favorite garments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Tailors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The skilled hands behind your perfectly fitted garments</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/tailor-roberto.jpg" 
                    alt="Roberto Santos" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Roberto Santos</h3>
                  <p className="text-blue-600 font-medium mb-3">Master Tailor & Founder</p>
                  <p className="text-gray-700 mb-4">
                    With 30+ years in the industry, Roberto specializes in custom suiting and complex alterations. Trained in London and Milan, he brings international techniques to local clients.
                  </p>
                  <p className="text-sm text-gray-500">"Every stitch tells a story - make yours perfect."</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/tailor-maria.jpg" 
                    alt="Maria Lopez" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Maria Lopez</h3>
                  <p className="text-blue-600 font-medium mb-3">Senior Seamstress</p>
                  <p className="text-gray-700 mb-4">
                    Maria has been with Master Stitch since 2012. She excels in delicate fabrics, bridal alterations, and intricate hand-sewing techniques.
                  </p>
                  <p className="text-sm text-gray-500">"The right fit can transform how you feel in your clothes."</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src="/images/tailor-juan.jpg" 
                    alt="Juan dela Cruz" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Juan dela Cruz</h3>
                  <p className="text-blue-600 font-medium mb-3">Tailoring Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Juan focuses on repairs and restyling, bringing new life to well-loved garments. His expertise includes leatherwork and denim reconstruction.
                  </p>
                  <p className="text-sm text-gray-500">"Every repair is a chance to extend a garment's story."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our work</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-blue-600 text-5xl mb-4">✂️</div>
                <h3 className="text-xl font-semibold mb-3">Craftsmanship</h3>
                <p className="text-gray-700">
                  We take pride in traditional tailoring techniques while incorporating modern innovations. Every garment receives the same careful attention, whether it's a simple hem or custom creation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-blue-600 text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
                <p className="text-gray-700">
                  We listen carefully to understand your needs and preferences. Our consultations ensure we deliver results that match your vision and lifestyle.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-blue-600 text-5xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We're honest about what's possible and provide fair pricing. If we can't do something to our high standards, we'll tell you upfront and suggest alternatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Visit Our Shop in Cubao</h2>
                <div className="space-y-4 mb-6">
                  <p className="flex items-center">
                    <span className="inline-block mr-3">📍</span>
                    <span>123 Aurora Blvd, Cubao, Quezon City, Metro Manila</span>
                  </p>
                  <p className="flex items-center">
                    <span className="inline-block mr-3">🕒</span>
                    <span>Monday-Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</span>
                  </p>
                  <p className="flex items-center">
                    <span className="inline-block mr-3">📞</span>
                    <span>(02) 8912-3456</span>
                  </p>
                </div>
                <p className="mb-6">
                  Walk-ins are welcome, but we recommend calling ahead for complex projects or to ensure our master tailor is available.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-medium transition duration-300"
                >
                  Get Directions
                </Link>
              </div>
              
              <div className="lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.287800034332!2d121.05286031530118!3d14.58365898163545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c835c5a0a5a5%3A0x6a0c9a0b4a5b5a5a!2sAurora%20Blvd%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;