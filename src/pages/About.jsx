// About Us Page
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Banner Section */}
      <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/72/78/4b/72784bb6f10ca526a0e14c8b0ba161b6.jpg')] bg-blend-overlay bg-black bg-opacity-70 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Empowering Sports Enthusiasts Worldwide</p>
      </div>

      {/* Mission and Vision */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At our core, we strive to bring the best sports equipment, apparel, and accessories to enthusiasts of all ages and skill levels. 
              Our mission is to inspire and empower people to stay active, embrace their passions, and achieve their athletic goals.
            </p>
          </div>
          <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/f6/74/5f/f6745fcef1c8cf39efe7a757cc66e027.jpg')] h-64 rounded shadow-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/736x/66/93/25/6693255eee051ffa5b24f2d1d32e1d51.jpg')] h-64 rounded shadow-md"></div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where everyone has access to quality sports gear and resources. 
              By combining innovation, sustainability, and community engagement, we aim to build a future where sports connect people, foster well-being, and celebrate diversity.
            </p>
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-6">Our Journey</h2>
          <p className="text-gray-700 text-center text-lg mb-12 max-w-4xl mx-auto">
            Founded in 2010, our company started as a small local shop catering to cricket lovers. 
            Over the years, we expanded to include a wide range of sports, from football to basketball, and even sportswear. 
            Today, we are proud to serve customers across the globe, delivering products that fuel their passion for sports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-3xl font-bold text-[#69e61c]">13+</h3>
              <p className="text-gray-700 text-lg">Years in Business</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-3xl font-bold text-[#69e61c]">50K+</h3>
              <p className="text-gray-700 text-lg">Happy Customers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-3xl font-bold text-[#69e61c]">30+</h3>
              <p className="text-gray-700 text-lg">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://i.pinimg.com/236x/60/fd/90/60fd901d93ff985aae17209c4318003f.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.pinimg.com/236x/ee/d3/03/eed303679e96d27a96cd4850f4e3fb4c.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.pinimg.com/236x/d1/d9/d8/d1d9d85b65bfb79ba328e7c3b66e5564.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Sam Wilson</h3>
              <p className="text-gray-600">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1a500d] text-white text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">Stay updated with the latest trends, products, and events. Be part of a global sports family!</p>
        {/* <button className="bg-[#69e61c] text-black px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#69e61c] transition">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default About;
