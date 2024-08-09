import React, { useState } from 'react';
import './Brandname.css';
import Navbar from '../../Components/Navbar/Navbar';

const Brandname = () => {
  const [keyword, setKeyword] = useState('');
  const [industry, setIndustry] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const industries = {
    Technology: [
      'Tech', 'Systems', 'Software', 'Solutions', 'Innovations', 'Dynamics', 'Labs', 'Networks', 
      'Digital', 'Engineering', 'Analytics', 'Computing', 'Automation', 'Robotics', 'Data', 'Cloud',
      'AI', 'IoT', 'Devices', 'Security', 'Cyber', 'IT', 'Integration', 'Web', 'Apps', 'Platforms',
      'Smart', 'Gadgets', 'Virtual', 'Augmented', 'Interactive', 'Mobile', 'Programming', 'SaaS',
      'Hardware', 'Firmware', 'Blockchain', 'Cryptography', 'Interfaces', 'Processors', 'Microchips',
      'Technologies', 'Wearables', 'Technics', 'Coding', 'E-commerce', 'Infrastructure', 'Networking', 'Wireless'
    ],
    Fashion: [
      'Style', 'Couture', 'Threads', 'Designs', 'Wear', 'Boutique', 'Fashion', 'Glamour', 'Trends', 
      'Chic', 'Apparel', 'Clothing', 'Accessories', 'Runway', 'Vogue', 'Models', 'Elegance', 'Fabric', 
      'Pattern', 'Seam', 'Textiles', 'Tailoring', 'Wardrobe', 'Outfits', 'Haute', 'Couture', 'Silhouettes', 
      'Runway', 'Trendsetters', 'Looks', 'Ensembles', 'Chic', 'Garments', 'Streetwear', 'Dresses', 'Shoes', 
      'Handbags', 'Jewelry', 'Lingerie', 'Styles', 'Hairstyles', 'Beauty', 'Cosmetics', 'Makeup', 'Skincare', 
      'Fashionista', 'Runway', 'Closet', 'Dress'
    ],
    Food: [
      'Cuisine', 'Delights', 'Eats', 'Bites', 'Dishes', 'Gourmet', 'Feast', 'Treats', 'Flavors', 'Savories',
      'Culinary', 'Meals', 'Recipes', 'Dining', 'Gastronomy', 'Nourishment', 'Fares', 'Platters', 'Buffet',
      'Catering', 'Bistro', 'Café', 'Taste', 'Ingredients', 'Herbs', 'Spices', 'Fresh', 'Organic', 'Fruits',
      'Vegetables', 'Grains', 'Meats', 'Seafood', 'Bakery', 'Pastries', 'Desserts', 'Appetizers', 'Entrees', 
      'Beverages', 'Cocktails', 'Brunch', 'Lunch', 'Dinner', 'Snacks', 'Salads', 'Soup', 'Garnish', 'Sauces', 
      'Chefs'
    ],
    Health: [
      'Wellness', 'Care', 'Health', 'Fitness', 'Vitality', 'Nutrition', 'Healing', 'Remedies', 'Therapy', 
      'Rejuvenation', 'Medicine', 'Clinic', 'Hospital', 'Pharmacy', 'Exercise', 'Workout', 'Hygiene', 
      'Diet', 'Mental', 'Physical', 'Emotional', 'Spiritual', 'Healthcare', 'Detox', 'Wellbeing', 'Prevention', 
      'Recovery', 'Rehabilitation', 'Yoga', 'Meditation', 'Holistic', 'Physiotherapy', 'Chiropractic', 'Massage', 
      'Acupuncture', 'Immunity', 'Cardio', 'Strength', 'Endurance', 'Flexibility', 'Supplements', 'Vitamins', 
      'Minerals', 'Healthfood', 'Fitness', 'Training', 'Gym', 'Athletic', 'Wellbeing'
    ],
    Finance: [
      'Capital', 'Wealth', 'Investments', 'Funds', 'Banking', 'Assets', 'Economics', 'Holdings', 'Savings', 
      'Advisors', 'Brokers', 'Trading', 'Stocks', 'Bonds', 'Markets', 'Equity', 'Portfolio', 'Securities', 
      'Dividends', 'Loans', 'Credit', 'Cash', 'Accounting', 'Auditing', 'Valuation', 'Budgeting', 'Planning', 
      'Forecasting', 'Taxation', 'Consulting', 'Advisory', 'Insurance', 'Risk', 'Compliance', 'Regulations', 
      'Audit', 'Financial', 'Statements', 'Revenues', 'Profits', 'Expenses', 'Assets', 'Liabilities', 'Equity', 
      'Bank', 'Finance', 'Currency', 'Exchange', 'Investments', 'Management'
    ],
    Education: [
      'Academy', 'Institute', 'Learning', 'School', 'College', 'University', 'Tutors', 'Scholars', 'Studies', 
      'Knowledge', 'Courses', 'Classes', 'Teaching', 'Training', 'Curriculum', 'Programs', 'Lectures', 'Seminars', 
      'Workshops', 'Certificates', 'Degrees', 'Diplomas', 'Online', 'Education', 'Tutoring', 'Mentorship', 'Guidance', 
      'Counseling', 'Students', 'Faculty', 'Campus', 'Library', 'Research', 'Study', 'Lessons', 'Homework', 'Exams', 
      'Quizzes', 'Assignments', 'Grades', 'Textbooks', 'E-learning', 'Virtual', 'Classrooms', 'Educators', 'Pedagogy', 
      'Education', 'Schooling', 'Studies', 'Learning'
    ],
    Entertainment: [
      'Media', 'Productions', 'Shows', 'Events', 'Studios', 'Cinema', 'Films', 'Theater', 'Broadcast', 'Concerts',
      'Music', 'Songs', 'Dance', 'Drama', 'Acting', 'Performances', 'Festivals', 'Gala', 'Parties', 'Television',
      'Radio', 'Streaming', 'Podcasts', 'Comedy', 'Standup', 'Magic', 'Illusion', 'Circus', 'Carnival', 'Exhibition',
      'Gallery', 'Gaming', 'Esports', 'Sports', 'Athletics', 'Competitions', 'Races', 'Tournaments', 'Matches',
      'Contests', 'Pageants', 'Awards', 'Ceremonies', 'Premieres', 'Entertainment', 'Fun', 'Leisure', 'Hobbies',
      'Recreation', 'Nightlife', 'Entertainment'
    ],
    Automotive: [
      'Motors', 'Cars', 'Vehicles', 'Auto', 'Rides', 'Engines', 'Wheels', 'Garage', 'Speed', 'Drives', 'Racing',
      'Trucks', 'SUVs', 'Electric', 'Hybrid', 'Fuel', 'Gas', 'Oil', 'Transmission', 'Brakes', 'Tires', 'Wipers',
      'Seats', 'Steering', 'Gear', 'Clutch', 'Pedals', 'Mirrors', 'Windows', 'Lights', 'Headlights', 'Taillights',
      'Indicators', 'Horn', 'Dashboard', 'Radio', 'GPS', 'Navigation', 'Bluetooth', 'Interior', 'Exterior', 'Body',
      'Repair', 'Maintenance', 'Service', 'Inspection', 'Tuning', 'Modifications'
    ],
    RealEstate: [
      'Properties', 'Homes', 'Estates', 'Residences', 'Housing', 'Mansions', 'Realty', 'Developments', 'Land', 
      'Buildings', 'Condos', 'Apartments', 'Flats', 'Villas', 'Cottages', 'Bungalows', 'Townhouses', 'Lofts', 
      'Penthouse', 'Commercial', 'Retail', 'Office', 'Industrial', 'Plots', 'Construction', 'Renovation', 'Architecture', 
      'Design', 'Decor', 'Interior', 'Exterior', 'Landscaping', 'Gardening', 'Pools', 'Garages', 'Parking', 'Lease', 
      'Rent', 'Sell', 'Buy', 'Investment', 'Property', 'Management', 'Real', 'Estate', 'Realtors', 'Agents', 'Brokers'
    ],
    Travel: [
      'Journeys', 'Adventures', 'Tours', 'Trips', 'Travels', 'Expeditions', 'Vacations', 'Getaways', 'Escapes', 
      'Destinations', 'Excursions', 'Holidays', 'Resorts', 'Hotels', 'Bookings', 'Flights', 'Cruises', 'Roadtrips', 
      'Safaris', 'Backpacking', 'Trekking', 'Hiking', 'Beaches', 'Mountains', 'Lakes', 'Rivers', 'Islands', 'Camping', 
      'Sailing', 'Boating', 'Diving', 'Snorkeling', 'Surfing', 'Skiing', 'Snowboarding', 'Travel', 'Guides', 'Maps', 
      'Itineraries', 'Passports', 'Visas', 'Tourism', 'Cultural', 'Heritage', 'Adventure', 'Traveling', 'Sightseeing', 
      'Exploring', 'Wanderlust'
    ],
    Sports: [
      'Athletics', 'Games', 'Fitness', 'Leagues', 'Teams', 'Championships', 'Matches', 'Competitions', 'Play', 
      'Sportswear', 'Gear', 'Equipment', 'Training', 'Coaching', 'Stadiums', 'Arenas', 'Courts', 'Fields', 'Tracks', 
      'Gyms', 'Clubs', 'Associations', 'Federations', 'Olympics', 'Paralympics', 'World', 'Cups', 'Trophies', 'Medals', 
      'Awards', 'Sportsmanship', 'Endurance', 'Strength', 'Speed', 'Agility', 'Skill', 'Teamwork', 'Strategy', 'Tactics', 
      'Sports', 'Athletes', 'Fitness', 'Health', 'Wellness', 'Exercise', 'Recreation', 'Sports', 'Games', 'Competition'
    ],
    Beauty: [
      'Cosmetics', 'Skincare', 'Makeup', 'Beauty', 'Glow', 'Radiance', 'Elegance', 'Charm', 'Glam', 'Blush',
      'Foundation', 'Mascara', 'Lipstick', 'Eyeliner', 'Blush', 'Bronzer', 'Highlighter', 'Concealer', 'Serum',
      'Moisturizer', 'Cleanser', 'Toner', 'Exfoliant', 'Mask', 'Peel', 'Oil', 'Cream', 'Gel', 'Balm', 'Scrub',
      'Perfume', 'Fragrance', 'Aromatherapy', 'Haircare', 'Shampoo', 'Conditioner', 'Styling', 'Nails', 'Manicure',
      'Pedicure', 'Spa', 'Salon', 'Treatment', 'Wellness', 'Beauty', 'Aesthetics', 'Cosmetology', 'Beauty', 'Care'
    ],
    Home: [
      'Furniture', 'Decor', 'Living', 'Home', 'Interiors', 'Furnishings', 'Design', 'Comfort', 'Space', 'Residence',
      'Household', 'Appliances', 'Lighting', 'Carpets', 'Rugs', 'Curtains', 'Blinds', 'Beds', 'Sofas', 'Chairs',
      'Tables', 'Wardrobes', 'Cabinets', 'Shelves', 'Storage', 'Kitchens', 'Bathrooms', 'Bedrooms', 'Living',
      'Dining', 'Rooms', 'Spaces', 'Gardens', 'Patios', 'Balconies', 'Terraces', 'Pools', 'Garages', 'Workshop',
      'Home', 'Cleaning', 'Maintenance', 'Repairs', 'Renovation', 'Home', 'Improvement', 'Decoration'
    ],
    Music: [
      'Sounds', 'Harmony', 'Beats', 'Rhythm', 'Melody', 'Tunes', 'Notes', 'Chords', 'Symphony', 'Band',
      'Orchestra', 'Concert', 'Gig', 'Festival', 'Album', 'Track', 'Song', 'Single', 'Record', 'Recording',
      'Studio', 'Producer', 'DJ', 'Remix', 'Mix', 'Performance', 'Live', 'Stage', 'Tour', 'Venue',
      'Singer', 'Vocalist', 'Guitarist', 'Drummer', 'Bassist', 'Keyboardist', 'Composer', 'Lyricist', 'Musician',
      'Music', 'Genre', 'Rock', 'Pop', 'Jazz', 'Classical', 'Hip-hop', 'Rap', 'Electronic', 'Dance'
    ],
    Fitness: [
      'Workouts', 'Training', 'Exercises', 'Fitness', 'Gym', 'Strength', 'Wellness', 'Conditioning', 'Endurance', 
      'Performance', 'Cardio', 'Aerobics', 'HIIT', 'Pilates', 'Yoga', 'Stretching', 'Weightlifting', 'Bodybuilding', 
      'Crossfit', 'Martial', 'Arts', 'Boxing', 'Kickboxing', 'Running', 'Jogging', 'Cycling', 'Swimming', 'Rowing', 
      'Climbing', 'Hiking', 'Sports', 'Games', 'Fitness', 'Health', 'Nutrition', 'Diet', 'Hydration', 'Supplements', 
      'Vitamins', 'Minerals', 'Protein', 'Shakes', 'Recovery', 'Massage', 'Therapy', 'Fitness', 'Trainers', 'Coaches'
    ],
    Pets: [
      'Animals', 'Pets', 'Companions', 'Critters', 'Creatures', 'Furry', 'Pals', 'Tails', 'Paws', 'Friends', 
      'Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles', 'Small', 'Mammals', 'Hamsters', 'Rabbits', 'Guinea', 
      'Pigs', 'Pets', 'Care', 'Pet', 'Food', 'Grooming', 'Veterinary', 'Clinic', 'Shelter', 'Adoption', 'Rescue', 
      'Training', 'Obedience', 'Toys', 'Accessories', 'Bedding', 'Cages', 'Aquariums', 'Habitats', 'Leashes', 
      'Collars', 'Treats', 'Supplies', 'Health', 'Wellness', 'Nutrition', 'Exercise', 'Parks', 'Pet', 'Sitters'
    ],
    Grocery:[
      'Fresh', 'Organic', 'Market', 'Produce', 'Pantry', 'Essentials', 'Groceries', 'Goods', 'Store', 'Shop', 'Supermarket', 
      'Basket', 'Cart', 'Shopping', 'Healthy', 'Food', 'Snacks', 'Meals', 'Dairy', 'Bakery', 'Butcher', 'Deli', 'Seafood', 
      'Vegetables', 'Fruits', 'Grains', 'Cereals', 'Beverages', 'Drinks', 'Water', 'Juices', 'Teas', 'Coffee', 
      'Sweets', 'Treats', 'Candies', 'Chocolates', 
      'Spices', 'Herbs', 'Condiments', 'Sauces', 'Oils', 'Vinegars', 'Canned',
       'Frozen', 'Packaged', 'Bulk', 'Convenience', 'Discount', 'Savings'
    ],
    Print:[
      'Printing', 'Press', 'Graphics', 'Design', 'Publications', 'Media', 'Printshop', 'Copies', 
      'Flyers', 'Brochures', 'Posters', 'Banners', 'Signs', 'Labels', 'Packaging', 'Ink', 'Paper', 
      'Stationery', 'Cards', 'Invitations', 'Announcements', 'Books', 'Magazines', 'Journals', 'Catalogs',
       'Newsletters', 'Reports', 'Manuals', 'Blueprints', 'Artprints', 'Photos', 'Calendars', 'Envelopes', 
       'Postcards', 'Stickers', 'Decals', 'T-shirts', 'Apparel', 
      'Merchandise', 'Custom', 'Digital', 'Offset', 'Screen', 'Laser', '3D', 'Sublimation', 'Embossing', 'Engraving', 'Foil', 'Die-cutting'
    ],
    Software:[
      'Solutions', 'Apps', 'Programs', 'Code', 'Development', 'Platforms', 'Systems', 'Digital', 'Tools',
       'Tech', 'Automation', 'Data', 'Analytics', 'Cloud', 'AI', 'Machine Learning', 'IoT', 'Security', 'Cyber', 
       'Networking', 'Integration', 'Database', 'Frontend', 'Backend', 'Fullstack', 'DevOps', 'UX/UI', 'SaaS', 'PaaS', 
       'APIs', 'Microservices', 'Agile', 'Scrum', 'Codebase', 'Repositories', 'Algorithms', 'Frameworks', 'Libraries', 
       'Plugins', 'Extensions', 'Modules', 'Deployment', 
      'Versioning', 'Debugging', 'Testing', 'Compliance', 'Optimization', 'Performance', 'Scalability', 'Maintenance'
    ],
    Art:[
      'Creativity', 'Expression', 'Paintings', 'Drawings', 'Sculptures', 'Installations', 'Exhibits', 
      'Galleries', 'Studios', 'Canvas', 'Brush', 'Colors', 'Abstract', 'Realism', 'Surrealism', 'Contemporary', 
      'Modern', 'Traditional', 'Digital', 'Multimedia', 'Photography', 'Film', 'Prints', 'Graphics', 'Illustrations', 
      'Animation', 'Design', 'Visual', 'Performances', 'Theater', 'Dance', 'Music', 'Literature', 'Poetry', 'Crafts',
       'Pottery', 'Jewelry', 'Textiles', 'Fashion', 'Murals', 'Street Art', 
      'Carvings', 'Woodwork', 'Metalwork', 'Glasswork', 'Mixed Media', 'Calligraphy', 'Collage', 'Graffiti', 'Installations'
    ],
    Animals:[
      'Wildlife', 'Pets', 'Mammals', 'Birds', 'Fish', 'Reptiles', 'Amphibians', 'Insects', 
      'Creatures', 'Critters', 'Beasts', 'Domestics', 'Livestock', 'Farm', 'Zoo', 'Sanctuary',
       'Conservation', 'Habitats', 'Nature', 'Ecology', 'Biodiversity', 'Marine', 'Aquatic', 'Aviary', 
       'Terrarium', 'Jungle', 'Forest', 'Savanna', 'Desert', 'Tundra', 'Wetlands', 'Rivers', 'Lakes', 
       'Oceans', 'Mountains', 'Plains', 'Valleys', 
      'Urban', 'Rural', 'Exotic', 'Endangered', 'Extinct', 'Furry', 'Scaly', 'Feathery', 
      'Fins', 'Paws', 'Hooves', 'Wings', 'Tails'
    ],
    Architecture:[
      'Design', 'Structures', 'Buildings', 'Constructions', 'Plans', 
      'Blueprints', 'Models', 'Projects', 'Developments', 'Urban', 'Residential',
       'Commercial', 'Industrial', 'Public', 'Infrastructure', 'Interiors', 'Exteriors', 
       'Landscape', 'Sustainable', 'Green', 'Smart', 'Modern', 'Classic', 'Contemporary', 
       'Historical', 'Restoration', 'Renovation', 'Engineering', 'Materials', 'Concrete', 
       'Steel', 'Wood', 'Glass', 'Brick', 'Stone', 'Façade', 'Roof', 'Foundation', 'Elevation', 'Space', 'Light', 
      'Ventilation', 'Acoustics', 'Ergonomics', 'Functionality', 'Aesthetics', 'Heritage', 'Zoning', 'Permits', 'Safety'
    ],
    // Add more industries as needed
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const generateBrandNames = () => {
    if (!keyword || !industry) {
      alert('Please enter a keyword and select an industry.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const industryNouns = industries[industry];
      const uniqueNames = new Set();

      while (uniqueNames.size < 35) { 
        const randomNoun = industryNouns[Math.floor(Math.random() * industryNouns.length)];
        uniqueNames.add(`${keyword} ${randomNoun}`);
      }

      setGeneratedNames(Array.from(uniqueNames));
      setLoading(false);
    }, 1000); 
  };

  return (
    <div>
      <Navbar />
      <div className="brandnameheader">
        <h1>Design your own brand name</h1>
        <p>Brandspark AI-powered platform to create your own brand name</p>
        <input
          className='bname'
          type="text"
          placeholder='Start typing keyword or industry'
          value={keyword}
          onChange={handleInputChange}
        />
        <select className='getstart industrySelect' value={industry} onChange={handleIndustryChange}>
          <option value="" disabled>Select Industry</option>
          {Object.keys(industries).map((ind, index) => (
            <option key={index} value={ind}>{ind}</option>
          ))}
        </select>
        <button className='getstart' onClick={generateBrandNames} disabled={loading}>
          {loading ? 'Generating...' : 'Generate brand names'}
        </button>
        {generatedNames.length > 0 && (
          <div className="generatedNames">
            <h2>Generated Brand Names:</h2>
            <div className="nameRow">
              {generatedNames.map((name, index) => (
                <span key={index} className="nameItem">{name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="brandbox">
        <div className="box1">
          <div className="textb1">
          <h1>Generate brand names </h1>
          </div>
          <div className="textg1">
            <h1>unique keywords</h1>
          </div>
          <div className="keybutton">
            <button>smart</button>
            <button>beautiful</button>
            <button>creativity</button>
            <button>blod</button>
            <button>great</button>
            <button>Glam</button>
            <button>Fresh</button>
            <button>Trendy</button>
            <button>Innovate</button>
            <button>Adventure</button>
            <button>Bright</button>
            <button>Quality</button>
            <button>Creative</button>
            <button>Reliable</button>
            <button>Elegant</button>
            <button>Simplicity</button>
            <button>Fresh</button>
            <button>Trust</button>
            <button>Eco-friendly</button>
            <button>Glam</button>
            <button>Tasty</button>
            <button>Modern</button>
            <button>Legal</button>
            <button>Agile</button>


          </div>
         
        </div>
        <div className="box1">
          <div className="textb1">
          <h1>Generate brand names </h1>
          </div>
          <div className="textg2">
            <h1>with your industry</h1>
          </div>
          <div className="keybutton">
            <button>Education</button>
            <button>Technology</button>
            <button>Fashion</button>
            <button>Printing</button>
            <button>Agency</button>
            <button>Architecture</button>
            <button>Animals</button>
            <button>Software</button>
            <button>Art</button>
            <button>Adventure</button>
            <button>Grocery</button>
            <button>Pets</button>
            <button>Fitness</button>
            <button>Travel</button>
            <button>Beauty</button>
            <button>Home</button>
            <button>Music</button>
            <button>Finance</button>
            <button>Sport</button>
            <button>Food</button>
            <button>Automotive</button>
            <button>Modern</button>
            <button>Airline</button>
            <button>Alcohol</button>


          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Brandname;
