
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Square, Home, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Mock property data
  const property = {
    id: 1,
    title: "Modern 3BHK Apartment",
    type: "Flat / Apartment",
    location: "Downtown Area, City Center",
    price: "₹85,00,000",
    bedrooms: "3 BHK",
    bathrooms: 2,
    area: "1,200 sq ft",
    status: "Ready to Move",
    saleType: "For Sale",
    furnishing: "Semi-Furnished",
    description: "This modern 3BHK apartment offers contemporary living in the heart of the city. With spacious rooms, modern amenities, and a prime location, this property is perfect for families looking for comfort and convenience.",
    features: [
      "Parking Space",
      "24/7 Security",
      "Elevator",
      "Power Backup",
      "Water Supply",
      "Gym",
      "Swimming Pool",
      "Children's Play Area"
    ],
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=500&fit=crop"
    ],
    agent: {
      name: "John Smith",
      phone: "+91 9876543210",
      email: "john.smith@realestate.com"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AbodeAdvisor</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/list-property" className="text-gray-700 hover:text-blue-600">List Property</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/properties" className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg"
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
              <div className="flex gap-2 mt-4">
                {property.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Property ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded cursor-pointer ${
                      currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{property.title}</CardTitle>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{property.price}</div>
                    <Badge variant="outline" className="mt-2">{property.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <div className="font-semibold">{property.bedrooms}</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <div className="font-semibold">{property.bathrooms}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <div className="font-semibold">{property.area}</div>
                      <div className="text-sm text-gray-600">Area</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{property.status}</div>
                    <div className="text-sm text-gray-600">Status</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{property.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">Furnishing:</span>
                      <span className="ml-2 font-semibold">{property.furnishing}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Property Type:</span>
                      <span className="ml-2 font-semibold">{property.type}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="justify-start">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Map integration coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <h4 className="font-semibold">{property.agent.name}</h4>
                  <p className="text-sm text-gray-600">Property Agent</p>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">{property.agent.email}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="I'm interested in this property..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
