
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Bed, Bath, Square, Home, ArrowRight, Star, TrendingUp, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const propertyTypes = ["All Types", "Plot / Land", "House / Villa", "Flat / Apartment", "Builder Floor", "Commercial Shop"];
const bedrooms = ["Any", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];
const budgetRanges = ["Any Budget", "Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹2Cr", "Above ₹2Cr"];

// Featured properties data
const featuredProperties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    type: "Flat / Apartment",
    location: "Downtown Area",
    price: "₹85,00,000",
    bedrooms: "3 BHK",
    bathrooms: 2,
    area: "1,200 sq ft",
    saleType: "For Sale",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Luxury Villa with Garden",
    type: "House / Villa",
    location: "Green Valley",
    price: "₹2,50,00,000",
    bedrooms: "4+ BHK",
    bathrooms: 3,
    area: "2,500 sq ft",
    saleType: "For Sale",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    title: "Commercial Shop Space",
    type: "Commercial Shop",
    location: "Business District",
    price: "₹45,000/month",
    bedrooms: "N/A",
    bathrooms: 1,
    area: "800 sq ft",
    saleType: "For Rent",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop"
  }
];

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBudget, setSelectedBudget] = useState("Any Budget");

  const handleSearch = () => {
    console.log("Search params:", { searchLocation, selectedType, selectedBedrooms, selectedBudget });
    // Handle search logic
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AbodeAdvisor</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-600 font-medium">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/list-property" className="text-gray-700 hover:text-blue-600">List Property</Link>
            </nav>
            <Link to="/list-property">
              <Button className="bg-blue-600 hover:bg-blue-700">List Your Property</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect
              <span className="text-blue-600 block">Dream Home</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best properties for sale and rent. From apartments to villas, 
              commercial spaces to plots - we have it all.
            </p>
          </div>

          {/* Smart Search */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBedrooms} onValueChange={setSelectedBedrooms}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {bedrooms.map((bedroom) => (
                    <SelectItem key={bedroom} value={bedroom}>{bedroom}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Link to="/properties">
              <Button 
                onClick={handleSearch}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties that offer the best value and location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      property.saleType === 'For Sale' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                  >
                    {property.saleType}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900 text-lg">{property.title}</h3>
                    <span className="text-xl font-bold text-blue-600">{property.price}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <Link to={`/property/${property.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties">
              <Button variant="outline" className="px-8 py-3">
                View All Properties
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different types of properties available for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Apartments", count: "1,200+ Properties", icon: "🏢", color: "bg-blue-50 text-blue-600" },
              { name: "Houses & Villas", count: "800+ Properties", icon: "🏡", color: "bg-green-50 text-green-600" },
              { name: "Commercial", count: "300+ Properties", icon: "🏪", color: "bg-purple-50 text-purple-600" },
              { name: "Plots & Land", count: "450+ Properties", icon: "🌾", color: "bg-yellow-50 text-yellow-600" },
              { name: "Builder Floors", count: "200+ Properties", icon: "🏘️", color: "bg-red-50 text-red-600" },
              { name: "Studio Apartments", count: "150+ Properties", icon: "🏠", color: "bg-indigo-50 text-indigo-600" }
            ].map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" variant="secondary" className="px-8">
                Browse Properties
              </Button>
            </Link>
            <Link to="/list-property">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">AbodeAdvisor</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect property. We make real estate simple and accessible.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link to="/list-property" className="hover:text-white">List Property</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Property Types</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Apartments</li>
                <li>Houses & Villas</li>
                <li>Commercial</li>
                <li>Plots & Land</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 9876543210</li>
                <li>📧 info@abodeadvisor.com</li>
                <li>📍 123 Real Estate Street, City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AbodeAdvisor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
