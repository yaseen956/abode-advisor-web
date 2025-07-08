
import { useState } from "react";
import { MapPin, Calendar, Building, Home, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Green Valley Residences",
    developer: "ABC Developers",
    location: "Sector 15, New Town",
    type: "Residential Apartments",
    status: "Ongoing",
    timeline: "Dec 2024 - Jun 2026",
    price: "₹45 Lakh - ₹85 Lakh",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    amenities: ["Swimming Pool", "Gym", "Club House", "Garden"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop",
    progress: 35
  },
  {
    id: 2,
    name: "Skyline Towers",
    developer: "XYZ Constructions",
    location: "Business District",
    type: "Commercial Complex",
    status: "Completed",
    timeline: "Jan 2020 - Dec 2023",
    price: "₹25 Lakh - ₹50 Lakh",
    configurations: ["Office Spaces", "Retail Shops"],
    amenities: ["24/7 Security", "Parking", "Power Backup", "Elevator"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop",
    progress: 100
  },
  {
    id: 3,
    name: "Luxury Villas Estate",
    developer: "Premium Homes",
    location: "Hill View Area",
    type: "Independent Villas",
    status: "Ongoing",
    timeline: "Mar 2024 - Dec 2025",
    price: "₹1.2 Cr - ₹2.5 Cr",
    configurations: ["3 BHK", "4 BHK", "5 BHK"],
    amenities: ["Private Garden", "Garage", "Security", "Club House"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop",
    progress: 60
  }
];

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = selectedStatus === "All" 
    ? projects 
    : projects.filter(project => project.status === selectedStatus);

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
              <Link to="/projects" className="text-blue-600 font-medium">Projects</Link>
              <Link to="/list-property" className="text-gray-700 hover:text-blue-600">List Property</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Real Estate Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest residential and commercial projects with modern amenities and prime locations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Ongoing", "Completed"].map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "default" : "outline"}
              onClick={() => setSelectedStatus(status)}
              className={selectedStatus === status ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {status}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Completed' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {project.status}
                </Badge>
                {project.status === 'Ongoing' && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.name}</CardTitle>
                <div className="flex items-center text-gray-600">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.developer}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{project.timeline}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Type</h4>
                  <Badge variant="outline">{project.type}</Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Price Range</h4>
                  <span className="text-lg font-bold text-blue-600">{project.price}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Configurations</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.configurations.map((config, index) => (
                      <Badge key={index} variant="secondary">{config}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{amenity}</Badge>
                    ))}
                    {project.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{project.amenities.length - 3} more</Badge>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enquire Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for a Custom Project?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We can help you find the perfect project that matches your requirements and budget. 
            Get in touch with our experts for personalized recommendations.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            Contact Our Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
