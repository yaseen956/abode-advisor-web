
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Upload, MapPin, DollarSign, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const propertyTypes = [
  "Plot / Land",
  "House / Villa", 
  "Flat / Apartment",
  "Builder Floor",
  "Commercial Shop"
];

const bedrooms = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK", "Studio"];
const constructionStatus = ["Under Construction", "Ready to Move", "New Launch"];
const furnishingStatus = ["Furnished", "Semi-Furnished", "Unfurnished"];

const ListProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    saleType: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    constructionStatus: "",
    furnishing: "",
    location: "",
    description: "",
    features: [] as string[],
    ownerName: "",
    ownerPhone: "",
    ownerEmail: ""
  });

  const availableFeatures = [
    "Parking Space",
    "24/7 Security",
    "Elevator",
    "Power Backup",
    "Water Supply",
    "Gym",
    "Swimming Pool",
    "Children's Play Area",
    "Garden",
    "Club House",
    "Balcony",
    "Terrace"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        features: [...formData.features, feature]
      });
    } else {
      setFormData({
        ...formData,
        features: formData.features.filter(f => f !== feature)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property listing submitted:", formData);
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
              <Link to="/list-property" className="text-blue-600 font-medium">List Property</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">List Your Property</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to list your property. Our team will review and publish it within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Property Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Modern 3BHK Apartment in City Center"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleSelectChange('propertyType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="saleType">Listing Type *</Label>
                  <Select value={formData.saleType} onValueChange={(value) => handleSelectChange('saleType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select listing type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="For Sale">For Sale</SelectItem>
                      <SelectItem value="For Rent">For Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Property Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="₹ Enter price"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="area">Area (sq ft) *</Label>
                  <Input
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g., 1200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select value={formData.bedrooms} onValueChange={(value) => handleSelectChange('bedrooms', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      {bedrooms.map((bedroom) => (
                        <SelectItem key={bedroom} value={bedroom}>{bedroom}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    placeholder="e.g., 2"
                  />
                </div>

                <div>
                  <Label htmlFor="constructionStatus">Construction Status</Label>
                  <Select value={formData.constructionStatus} onValueChange={(value) => handleSelectChange('constructionStatus', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {constructionStatus.map((status) => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="furnishing">Furnishing Status</Label>
                <Select value={formData.furnishing} onValueChange={(value) => handleSelectChange('furnishing', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select furnishing status" />
                  </SelectTrigger>
                  <SelectContent>
                    {furnishingStatus.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="location">Complete Address *</Label>
                <Textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter complete address with city, state, and pincode"
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="description">Property Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your property, its features, and what makes it special..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Features & Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Features & Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {availableFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                    />
                    <Label htmlFor={feature} className="text-sm">{feature}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="h-5 w-5 mr-2" />
                Property Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Upload property images</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB each (Max 10 images)</p>
                <Button type="button" variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card>
            <CardHeader>
              <CardTitle>Owner Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ownerName">Owner Name *</Label>
                <Input
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ownerPhone">Phone Number *</Label>
                  <Input
                    id="ownerPhone"
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="ownerEmail">Email Address *</Label>
                  <Input
                    id="ownerEmail"
                    name="ownerEmail"
                    type="email"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-12 py-3 text-lg">
              Submit Property Listing
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Your property will be reviewed and published within 24 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListProperty;
