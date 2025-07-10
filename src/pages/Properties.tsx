import { useState } from "react";
import { Search, Filter, MapPin, Bed, Bath, Square, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const propertyTypes = [
  "All Types",
  "Plot / Land",
  "House / Villa", 
  "Flat / Apartment",
  "Builder Floor",
  "Commercial Shop"
];

const bedrooms = ["Any", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"];
const constructionStatus = ["Any", "Under Construction", "Ready to Move", "New Launch"];
const saleTypes = ["All", "For Sale", "For Rent"];

// Mock property data
const properties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    type: "Flat / Apartment",
    location: "Downtown Area",
    price: "₹85,00,000",
    bedrooms: "3 BHK",
    bathrooms: 2,
    area: "1,200 sq ft",
    status: "Ready to Move",
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
    status: "Ready to Move",
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
    status: "Ready to Move",
    saleType: "For Rent",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop"
  }
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedStatus, setSelectedStatus] = useState("Any");
  const [selectedSaleType, setSelectedSaleType] = useState("All");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">makan360</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-blue-600 font-medium">Properties</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/list-property" className="text-gray-700 hover:text-blue-600">List Property</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Find Your Perfect Property</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBedrooms} onValueChange={setSelectedBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                {bedrooms.map((bedroom) => (
                  <SelectItem key={bedroom} value={bedroom}>{bedroom}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Construction Status" />
              </SelectTrigger>
              <SelectContent>
                {constructionStatus.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-2">
              <Input
                placeholder="Min Budget"
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
              />
              <Input
                placeholder="Max Budget"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
              />
            </div>

            <Select value={selectedSaleType} onValueChange={setSelectedSaleType}>
              <SelectTrigger>
                <SelectValue placeholder="For Sale/Rent" />
              </SelectTrigger>
              <SelectContent>
                {saleTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Search Properties
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${
                    property.saleType === 'For Sale' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {property.saleType}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{property.title}</h3>
                  <span className="text-lg font-bold text-blue-600">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
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

                <div className="flex justify-between items-center">
                  <Badge variant="outline">{property.status}</Badge>
                  <Link to={`/property/${property.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
