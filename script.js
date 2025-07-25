// Fake data for properties, agents, and other content
const PROPERTIES_DATA = [
    {
        id: 1,
        title: "Luxury 3BHK Apartment in Bandra West",
        location: "Bandra West, Mumbai",
        city: "mumbai",
        price: 28500000,
        type: "flat",
        bhk: 3,
        area: 1250,
        carpetArea: 1100,
        furnishing: "fully-furnished",
        availability: "immediate",
        postedBy: "dealer",
        floor: "12th of 25",
        facing: "East",
        description: "Stunning 3BHK apartment with sea view in prime Bandra West location. This property features modern amenities, spacious rooms, and excellent connectivity to business districts.",
        amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Garden", "Clubhouse", "Lift", "Power Backup"],
        images: [
            "https://via.placeholder.com/800x500?text=Living+Room",
            "https://via.placeholder.com/800x500?text=Bedroom",
            "https://via.placeholder.com/800x500?text=Kitchen",
            "https://via.placeholder.com/800x500?text=Bathroom",
            "https://via.placeholder.com/800x500?text=Balcony"
        ],
        agent: {
            name: "Rajesh Kumar",
            photo: "https://via.placeholder.com/80x80?text=Agent+1",
            title: "Senior Property Consultant",
            rating: 4.5,
            reviews: 127,
            phone: "+91 98765 43210",
            email: "rajesh@property99.com"
        },
        postedDate: "2024-01-15"
    },
    {
        id: 2,
        title: "Spacious 2BHK Flat for Rent in Koramangala",
        location: "Koramangala, Bangalore",
        city: "bangalore",
        price: 35000,
        type: "flat",
        bhk: 2,
        area: 950,
        carpetArea: 850,
        furnishing: "semi-furnished",
        availability: "within-30-days",
        postedBy: "owner",
        floor: "5th of 8",
        facing: "North",
        description: "Well-maintained 2BHK apartment in the heart of Koramangala. Perfect for working professionals with easy access to tech parks and entertainment hubs.",
        amenities: ["Parking", "Lift", "Security", "Power Backup", "Water Supply", "Maintenance Staff"],
        images: [
            "https://via.placeholder.com/800x500?text=Living+Area",
            "https://via.placeholder.com/800x500?text=Master+Bedroom",
            "https://via.placeholder.com/800x500?text=Kitchen+Area",
            "https://via.placeholder.com/800x500?text=Balcony+View"
        ],
        agent: {
            name: "Priya Sharma",
            photo: "https://via.placeholder.com/80x80?text=Agent+2",
            title: "Property Owner",
            rating: 4.8,
            reviews: 45,
            phone: "+91 98765 43211",
            email: "priya@property99.com"
        },
        postedDate: "2024-01-20"
    },
    {
        id: 3,
        title: "Independent Villa in Jubilee Hills",
        location: "Jubilee Hills, Hyderabad",
        city: "hyderabad",
        price: 45000000,
        type: "house",
        bhk: 4,
        area: 2800,
        carpetArea: 2500,
        furnishing: "unfurnished",
        availability: "within-3-months",
        postedBy: "dealer",
        floor: "Ground + 2",
        facing: "South",
        description: "Magnificent independent villa in prestigious Jubilee Hills. Features include spacious rooms, private garden, and excellent connectivity to business districts.",
        amenities: ["Swimming Pool", "Garden", "Parking", "Security", "Servant Quarter", "Terrace", "Bore Well"],
        images: [
            "https://via.placeholder.com/800x500?text=Villa+Exterior",
            "https://via.placeholder.com/800x500?text=Living+Hall",
            "https://via.placeholder.com/800x500?text=Master+Suite",
            "https://via.placeholder.com/800x500?text=Garden+View",
            "https://via.placeholder.com/800x500?text=Swimming+Pool"
        ],
        agent: {
            name: "Arun Reddy",
            photo: "https://via.placeholder.com/80x80?text=Agent+3",
            title: "Luxury Property Specialist",
            rating: 4.7,
            reviews: 89,
            phone: "+91 98765 43212",
            email: "arun@property99.com"
        },
        postedDate: "2024-01-10"
    },
    {
        id: 4,
        title: "Modern 1BHK Studio Apartment in Powai",
        location: "Powai, Mumbai",
        city: "mumbai",
        price: 15000000,
        type: "flat",
        bhk: 1,
        area: 650,
        carpetArea: 580,
        furnishing: "fully-furnished",
        availability: "immediate",
        postedBy: "owner",
        floor: "8th of 15",
        facing: "West",
        description: "Contemporary 1BHK studio apartment perfect for young professionals. Located in IT hub with excellent amenities and connectivity.",
        amenities: ["Gym", "Swimming Pool", "Parking", "Security", "Lift", "Clubhouse", "Landscaped Garden"],
        images: [
            "https://via.placeholder.com/800x500?text=Studio+Layout",
            "https://via.placeholder.com/800x500?text=Bedroom+Area",
            "https://via.placeholder.com/800x500?text=Kitchen+Counter",
            "https://via.placeholder.com/800x500?text=City+View"
        ],
        agent: {
            name: "Meera Patel",
            photo: "https://via.placeholder.com/80x80?text=Agent+4",
            title: "Residential Specialist",
            rating: 4.6,
            reviews: 67,
            phone: "+91 98765 43213",
            email: "meera@property99.com"
        },
        postedDate: "2024-01-25"
    },
    {
        id: 5,
        title: "Commercial Office Space in Connaught Place",
        location: "Connaught Place, Delhi",
        city: "delhi",
        price: 85000000,
        type: "commercial",
        bhk: 0,
        area: 3500,
        carpetArea: 3200,
        furnishing: "unfurnished",
        availability: "immediate",
        postedBy: "dealer",
        floor: "3rd of 6",
        facing: "North",
        description: "Prime commercial office space in the heart of Delhi's business district. Perfect for corporate offices with excellent foot traffic and accessibility.",
        amenities: ["Central AC", "Lift", "Parking", "Security", "Power Backup", "Conference Room", "Reception Area"],
        images: [
            "https://via.placeholder.com/800x500?text=Office+Space",
            "https://via.placeholder.com/800x500?text=Conference+Room",
            "https://via.placeholder.com/800x500?text=Work+Area",
            "https://via.placeholder.com/800x500?text=Reception"
        ],
        agent: {
            name: "Vikram Singh",
            photo: "https://via.placeholder.com/80x80?text=Agent+5",
            title: "Commercial Property Expert",
            rating: 4.4,
            reviews: 156,
            phone: "+91 98765 43214",
            email: "vikram@property99.com"
        },
        postedDate: "2024-01-18"
    },
    {
        id: 6,
        title: "Affordable 2BHK in Wakad",
        location: "Wakad, Pune",
        city: "pune",
        price: 7500000,
        type: "flat",
        bhk: 2,
        area: 850,
        carpetArea: 750,
        furnishing: "semi-furnished",
        availability: "within-30-days",
        postedBy: "owner",
        floor: "4th of 12",
        facing: "East",
        description: "Well-planned 2BHK apartment in rapidly developing Wakad area. Great for first-time buyers with good appreciation potential.",
        amenities: ["Parking", "Lift", "Security", "Garden", "Playground", "24x7 Water Supply"],
        images: [
            "https://via.placeholder.com/800x500?text=Living+Room",
            "https://via.placeholder.com/800x500?text=Bedroom+1",
            "https://via.placeholder.com/800x500?text=Bedroom+2",
            "https://via.placeholder.com/800x500?text=Kitchen"
        ],
        agent: {
            name: "Sunita Joshi",
            photo: "https://via.placeholder.com/80x80?text=Agent+6",
            title: "Residential Advisor",
            rating: 4.3,
            reviews: 78,
            phone: "+91 98765 43215",
            email: "sunita@property99.com"
        },
        postedDate: "2024-01-22"
    }
];

const AGENTS_DATA = [
    {
        id: 1,
        name: "Rajesh Kumar",
        photo: "https://via.placeholder.com/120x120?text=Rajesh",
        agency: "Elite Properties",
        city: "mumbai",
        specialties: ["residential", "luxury"],
        experience: 8,
        properties: 145,
        rating: 4.5,
        reviews: 127,
        phone: "+91 98765 43210",
        email: "rajesh@property99.com",
        description: "Experienced real estate professional specializing in luxury residential properties in Mumbai."
    },
    {
        id: 2,
        name: "Priya Sharma",
        photo: "https://via.placeholder.com/120x120?text=Priya",
        agency: "Urban Spaces",
        city: "bangalore",
        specialties: ["residential", "rental"],
        experience: 5,
        properties: 89,
        rating: 4.8,
        reviews: 95,
        phone: "+91 98765 43211",
        email: "priya@property99.com",
        description: "Dedicated to helping clients find perfect rental and residential properties in Bangalore."
    },
    {
        id: 3,
        name: "Arun Reddy",
        photo: "https://via.placeholder.com/120x120?text=Arun",
        agency: "Premium Realty",
        city: "hyderabad",
        specialties: ["luxury", "commercial"],
        experience: 12,
        properties: 267,
        rating: 4.7,
        reviews: 203,
        phone: "+91 98765 43212",
        email: "arun@property99.com",
        description: "Senior consultant specializing in luxury villas and commercial properties in Hyderabad."
    },
    {
        id: 4,
        name: "Meera Patel",
        photo: "https://via.placeholder.com/120x120?text=Meera",
        agency: "Smart Homes",
        city: "mumbai",
        specialties: ["residential"],
        experience: 6,
        properties: 134,
        rating: 4.6,
        reviews: 112,
        phone: "+91 98765 43213",
        email: "meera@property99.com",
        description: "Passionate about helping young professionals find their dream homes in Mumbai."
    },
    {
        id: 5,
        name: "Vikram Singh",
        photo: "https://via.placeholder.com/120x120?text=Vikram",
        agency: "Corporate Spaces",
        city: "delhi",
        specialties: ["commercial"],
        experience: 10,
        properties: 298,
        rating: 4.4,
        reviews: 187,
        phone: "+91 98765 43214",
        email: "vikram@property99.com",
        description: "Expert in commercial real estate with extensive experience in Delhi NCR region."
    },
    {
        id: 6,
        name: "Sunita Joshi",
        photo: "https://via.placeholder.com/120x120?text=Sunita",
        agency: "Family Homes",
        city: "pune",
        specialties: ["residential"],
        experience: 4,
        properties: 76,
        rating: 4.3,
        reviews: 68,
        phone: "+91 98765 43215",
        email: "sunita@property99.com",
        description: "Helping families find affordable and comfortable homes in Pune's growing suburbs."
    }
];

// Global variables
let currentProperties = [...PROPERTIES_DATA];
let currentAgents = [...AGENTS_DATA];
let currentPropertyIndex = 0;
let currentImageIndex = 0;
let currentProperty = null;

// Utility functions
function formatPrice(price) {
    if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
        return `₹${(price / 100000).toFixed(1)} Lakh`;
    } else {
        return `₹${price.toLocaleString()}`;
    }
}

function formatArea(area) {
    return `${area} sq ft`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

function getPropertyTypeLabel(type) {
    const types = {
        'flat': 'Apartment',
        'house': 'Independent House',
        'plot': 'Plot/Land',
        'commercial': 'Commercial',
        'pg': 'PG/Hostel'
    };
    return types[type] || type;
}

function getBHKLabel(bhk) {
    if (bhk === 0) return 'Commercial';
    if (bhk >= 5) return '5+ BHK';
    return `${bhk} BHK`;
}

// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize based on current page
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'listings':
            initializeListingsPage();
            break;
        case 'property-details':
            initializePropertyDetailsPage();
            break;
        case 'agents':
            initializeAgentsPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
        case 'login':
            initializeLoginPage();
            break;
    }
    
    // Initialize common functionality
    initializeCommonFeatures();
}

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename.includes('listings')) return 'listings';
    if (filename.includes('property-details')) return 'property-details';
    if (filename.includes('agents')) return 'agents';
    if (filename.includes('contact')) return 'contact';
    if (filename.includes('login')) return 'login';
    return 'index';
}

function initializeCommonFeatures() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });
    
    // Search form (hero section)
    const heroSearchForm = document.querySelector('.hero .search-inputs');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', handleHeroSearch);
    }
    
    // Search tabs
    const searchTabs = document.querySelectorAll('.tab-btn');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', handleSearchTabClick);
    });
}

function initializeHomePage() {
    loadFeaturedProperties();
}

function initializeListingsPage() {
    setupListingsPage();
    loadProperties();
    setupFilters();
    setupSorting();
    setupPagination();
}

function initializePropertyDetailsPage() {
    loadPropertyDetails();
    setupPropertyGallery();
    setupEMICalculator();
    setupContactForm();
}

function initializeAgentsPage() {
    loadAgents();
    setupAgentFilters();
}

function initializeContactPage() {
    setupContactForm();
}

// Home page functions
function loadFeaturedProperties() {
    const container = document.getElementById('featuredProperties');
    if (!container) return;
    
    const featuredProperties = PROPERTIES_DATA.slice(0, 6);
    
    container.innerHTML = featuredProperties.map(property => `
        <div class="property-card" onclick="goToPropertyDetails(${property.id})">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
                <div class="property-type-badge">${getPropertyTypeLabel(property.type)}</div>
            </div>
            <div class="property-details">
                <div class="property-price">${formatPrice(property.price)}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-features">
                    <span>${getBHKLabel(property.bhk)}</span>
                    <span>${formatArea(property.area)}</span>
                    <span>${property.furnishing}</span>
                </div>
                <button class="contact-btn" onclick="event.stopPropagation(); contactAgent(${property.agent.phone})">
                    Contact Agent
                </button>
            </div>
        </div>
    `).join('');
}

// Listings page functions
function setupListingsPage() {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const city = urlParams.get('city');
    
    // Set initial filters based on URL
    if (type) {
        const typeCheckboxes = document.querySelectorAll('input[name="propertyType"]');
        typeCheckboxes.forEach(checkbox => {
            if (checkbox.value === type) {
                checkbox.checked = true;
            }
        });
    }
    
    if (city) {
        const citySelect = document.getElementById('filterCity');
        if (citySelect) {
            citySelect.value = city;
        }
    }
}

function loadProperties() {
    const container = document.getElementById('propertiesList');
    const resultsCount = document.getElementById('resultsCount');
    const resultsLocation = document.getElementById('resultsLocation');
    
    if (!container) return;
    
    // Apply filters
    const filteredProperties = applyFilters(currentProperties);
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${filteredProperties.length} Properties Found`;
    }
    
    // Display properties
    container.innerHTML = filteredProperties.map(property => `
        <div class="property-list-item" onclick="goToPropertyDetails(${property.id})">
            <div class="property-list-image">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="property-list-details">
                <div class="property-list-header">
                    <div class="property-list-title">${property.title}</div>
                    <div class="property-list-location">📍 ${property.location}</div>
                </div>
                <div class="property-list-price">${formatPrice(property.price)}</div>
                <div class="property-list-features">
                    <span><strong>Type:</strong> ${getPropertyTypeLabel(property.type)}</span>
                    <span><strong>Area:</strong> ${formatArea(property.area)}</span>
                    <span><strong>Config:</strong> ${getBHKLabel(property.bhk)}</span>
                    <span><strong>Floor:</strong> ${property.floor}</span>
                    <span><strong>Facing:</strong> ${property.facing}</span>
                    <span><strong>Posted:</strong> ${formatDate(property.postedDate)}</span>
                </div>
                <div class="property-list-actions">
                    <button class="contact-btn" onclick="event.stopPropagation(); contactAgent('${property.agent.phone}')">
                        📞 Contact
                    </button>
                    <button class="contact-btn secondary" onclick="event.stopPropagation(); emailAgent('${property.agent.email}')">
                        ✉️ Email
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // City filter
    const cityFilter = document.getElementById('filterCity');
    if (cityFilter) {
        cityFilter.addEventListener('change', loadProperties);
    }
    
    // Checkbox filters
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', loadProperties);
    });
}

function setupSorting() {
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }
}

function setupPagination() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProperties);
    }
}

function applyFilters(properties) {
    let filtered = [...properties];
    
    // City filter
    const cityFilter = document.getElementById('filterCity');
    if (cityFilter && cityFilter.value) {
        filtered = filtered.filter(p => p.city === cityFilter.value);
    }
    
    // Property type filter
    const typeFilters = Array.from(document.querySelectorAll('input[name="propertyType"]:checked'))
        .map(cb => cb.value);
    if (typeFilters.length > 0) {
        filtered = filtered.filter(p => typeFilters.includes(p.type));
    }
    
    // Budget filter
    const budgetFilters = Array.from(document.querySelectorAll('input[name="budget"]:checked'))
        .map(cb => cb.value);
    if (budgetFilters.length > 0) {
        filtered = filtered.filter(p => {
            return budgetFilters.some(budget => {
                const [min, max] = budget.split('-').map(val => 
                    val === '500+' ? Infinity : 
                    val === '0' ? 0 : 
                    parseInt(val) * 1000000
                );
                return p.price >= (min || 0) && p.price <= (max || Infinity);
            });
        });
    }
    
    // BHK filter
    const bhkFilters = Array.from(document.querySelectorAll('input[name="bhk"]:checked'))
        .map(cb => cb.value);
    if (bhkFilters.length > 0) {
        filtered = filtered.filter(p => {
            return bhkFilters.some(bhk => {
                if (bhk === '5+') return p.bhk >= 5;
                return p.bhk.toString() === bhk;
            });
        });
    }
    
    // Furnishing filter
    const furnishingFilters = Array.from(document.querySelectorAll('input[name="furnishing"]:checked'))
        .map(cb => cb.value);
    if (furnishingFilters.length > 0) {
        filtered = filtered.filter(p => furnishingFilters.includes(p.furnishing));
    }
    
    // Availability filter
    const availabilityFilters = Array.from(document.querySelectorAll('input[name="availability"]:checked'))
        .map(cb => cb.value);
    if (availabilityFilters.length > 0) {
        filtered = filtered.filter(p => availabilityFilters.includes(p.availability));
    }
    
    // Posted by filter
    const postedByFilters = Array.from(document.querySelectorAll('input[name="postedBy"]:checked'))
        .map(cb => cb.value);
    if (postedByFilters.length > 0) {
        filtered = filtered.filter(p => postedByFilters.includes(p.postedBy));
    }
    
    return filtered;
}

function clearAllFilters() {
    // Clear all checkboxes
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear city filter
    const cityFilter = document.getElementById('filterCity');
    if (cityFilter) {
        cityFilter.value = '';
    }
    
    // Reload properties
    loadProperties();
}

function handleSortChange() {
    const sortSelect = document.getElementById('sortBy');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    let sorted = [...applyFilters(currentProperties)];
    
    switch(sortValue) {
        case 'price-low-high':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
            break;
        case 'area-high-low':
            sorted.sort((a, b) => b.area - a.area);
            break;
        default: // relevance
            // Keep original order
            break;
    }
    
    // Update display
    const container = document.getElementById('propertiesList');
    if (container) {
        container.innerHTML = sorted.map(property => `
            <div class="property-list-item" onclick="goToPropertyDetails(${property.id})">
                <div class="property-list-image">
                    <img src="${property.images[0]}" alt="${property.title}">
                </div>
                <div class="property-list-details">
                    <div class="property-list-header">
                        <div class="property-list-title">${property.title}</div>
                        <div class="property-list-location">📍 ${property.location}</div>
                    </div>
                    <div class="property-list-price">${formatPrice(property.price)}</div>
                    <div class="property-list-features">
                        <span><strong>Type:</strong> ${getPropertyTypeLabel(property.type)}</span>
                        <span><strong>Area:</strong> ${formatArea(property.area)}</span>
                        <span><strong>Config:</strong> ${getBHKLabel(property.bhk)}</span>
                        <span><strong>Floor:</strong> ${property.floor}</span>
                        <span><strong>Facing:</strong> ${property.facing}</span>
                        <span><strong>Posted:</strong> ${formatDate(property.postedDate)}</span>
                    </div>
                    <div class="property-list-actions">
                        <button class="contact-btn" onclick="event.stopPropagation(); contactAgent('${property.agent.phone}')">
                            📞 Contact
                        </button>
                        <button class="contact-btn secondary" onclick="event.stopPropagation(); emailAgent('${property.agent.email}')">
                            ✉️ Email
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadMoreProperties() {
    // Simulate loading more properties
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.textContent = 'Loading...';
        setTimeout(() => {
            loadMoreBtn.textContent = 'Load More Properties';
            // You can add more properties here
        }, 1000);
    }
}

// Property details page functions
function loadPropertyDetails() {
    // Get property ID from URL or use default
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id')) || 1;
    
    currentProperty = PROPERTIES_DATA.find(p => p.id === propertyId) || PROPERTIES_DATA[0];
    
    if (!currentProperty) return;
    
    // Update page content
    updatePropertyDetailsContent(currentProperty);
    setupPropertyGallery();
    loadSimilarProperties();
}

function updatePropertyDetailsContent(property) {
    // Update title and meta information
    const elements = {
        'propertyTitle': property.title,
        'detailPropertyTitle': property.title,
        'detailPropertyLocation': property.location,
        'detailPropertyId': `ID: ${property.id}`,
        'detailPostedDate': `Posted: ${formatDate(property.postedDate)}`,
        'detailPropertyPrice': formatPrice(property.price),
        'detailPricePerSqft': `₹${Math.round(property.price / property.area).toLocaleString()} per sq ft`,
        'detailPropertyType': getPropertyTypeLabel(property.type),
        'detailConfiguration': getBHKLabel(property.bhk),
        'detailBuiltupArea': formatArea(property.area),
        'detailCarpetArea': formatArea(property.carpetArea),
        'detailFloor': property.floor,
        'detailFacing': property.facing,
        'detailFurnishing': property.furnishing,
        'detailAvailability': property.availability,
        'detailDescription': property.description,
        'detailFullAddress': property.location,
        'agentName': property.agent.name,
        'agentTitle': property.agent.title,
        'agentRating': '★'.repeat(Math.floor(property.agent.rating)) + '☆'.repeat(5 - Math.floor(property.agent.rating)),
        'agentRatingCount': `(${property.agent.reviews} reviews)`
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
    
    // Update agent photo
    const agentPhoto = document.getElementById('agentPhoto');
    if (agentPhoto) {
        agentPhoto.src = property.agent.photo;
    }
    
    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = property.images[0];
    }
    
    // Update amenities
    const amenitiesContainer = document.getElementById('detailAmenities');
    if (amenitiesContainer) {
        amenitiesContainer.innerHTML = property.amenities.map(amenity => `
            <div class="amenity-item">
                <span>✓</span>
                <span>${amenity}</span>
            </div>
        `).join('');
    }
    
    // Set default loan amount for EMI calculator
    const loanAmountInput = document.getElementById('loanAmount');
    if (loanAmountInput) {
        loanAmountInput.value = Math.round(property.price * 0.8); // 80% of property price
    }
}

function setupPropertyGallery() {
    if (!currentProperty) return;
    
    const thumbnailContainer = document.getElementById('thumbnailGallery');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = currentProperty.images.map((image, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(${index})">
                <img src="${image}" alt="Property image ${index + 1}">
            </div>
        `).join('');
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeMainImage(-1, true));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeMainImage(1, true));
    }
}

function changeMainImage(index, isNavigation = false) {
    if (!currentProperty) return;
    
    if (isNavigation) {
        currentImageIndex += index;
        if (currentImageIndex < 0) currentImageIndex = currentProperty.images.length - 1;
        if (currentImageIndex >= currentProperty.images.length) currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }
    
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = currentProperty.images[currentImageIndex];
    }
    
    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentImageIndex);
    });
}

function loadSimilarProperties() {
    if (!currentProperty) return;
    
    const container = document.getElementById('similarProperties');
    if (!container) return;
    
    // Get similar properties (same city, similar price range)
    const similar = PROPERTIES_DATA
        .filter(p => p.id !== currentProperty.id && p.city === currentProperty.city)
        .slice(0, 3);
    
    container.innerHTML = similar.map(property => `
        <div class="property-card" onclick="goToPropertyDetails(${property.id})">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
                <div class="property-type-badge">${getPropertyTypeLabel(property.type)}</div>
            </div>
            <div class="property-details">
                <div class="property-price">${formatPrice(property.price)}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-features">
                    <span>${getBHKLabel(property.bhk)}</span>
                    <span>${formatArea(property.area)}</span>
                    <span>${property.furnishing}</span>
                </div>
                <button class="contact-btn" onclick="event.stopPropagation(); contactAgent('${property.agent.phone}')">
                    Contact Agent
                </button>
            </div>
        </div>
    `).join('');
}

function setupEMICalculator() {
    const calculateBtn = document.getElementById('calculateEMI');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateEMI);
    }
}

function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);
    
    if (!loanAmount || !interestRate || !loanTenure) {
        alert('Please fill in all EMI calculator fields');
        return;
    }
    
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;
    
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - loanAmount;
    
    // Display results
    document.getElementById('emiAmount').textContent = `₹${Math.round(emi).toLocaleString()}`;
    document.getElementById('totalAmount').textContent = `₹${Math.round(totalAmount).toLocaleString()}`;
    document.getElementById('totalInterest').textContent = `₹${Math.round(totalInterest).toLocaleString()}`;
    
    const resultDiv = document.getElementById('emiResult');
    if (resultDiv) {
        resultDiv.style.display = 'block';
    }
}

// Agents page functions
function loadAgents() {
    const container = document.getElementById('agentsGrid');
    const resultsCount = document.getElementById('agentsResultCount');
    
    if (!container) return;
    
    const filteredAgents = applyAgentFilters(currentAgents);
    
    if (resultsCount) {
        resultsCount.textContent = `${filteredAgents.length} Agents Found`;
    }
    
    container.innerHTML = filteredAgents.map(agent => `
        <div class="agent-card">
            <div class="agent-card-header">
                <div class="agent-card-avatar">
                    <img src="${agent.photo}" alt="${agent.name}">
                </div>
                <div class="agent-card-info">
                    <h4>${agent.name}</h4>
                    <p>${agent.agency}</p>
                    <p>${agent.city.charAt(0).toUpperCase() + agent.city.slice(1)}</p>
                    <div class="agent-rating">
                        <span class="rating">${'★'.repeat(Math.floor(agent.rating))}${'☆'.repeat(5 - Math.floor(agent.rating))}</span>
                        <span class="rating-count">(${agent.reviews} reviews)</span>
                    </div>
                </div>
            </div>
            
            <div class="agent-specialties">
                ${agent.specialties.map(specialty => `
                    <span class="specialty-badge">${specialty.charAt(0).toUpperCase() + specialty.slice(1)}</span>
                `).join('')}
            </div>
            
            <div class="agent-stats">
                <div class="stat-item">
                    <span class="stat-number">${agent.experience}</span>
                    <span class="stat-label">Years Experience</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${agent.properties}</span>
                    <span class="stat-label">Properties Sold</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${agent.rating}</span>
                    <span class="stat-label">Rating</span>
                </div>
            </div>
            
            <div class="agent-actions">
                <button class="agent-contact-btn primary" onclick="contactAgent('${agent.phone}')">
                    📞 Call
                </button>
                <button class="agent-contact-btn secondary" onclick="emailAgent('${agent.email}')">
                    ✉️ Email
                </button>
            </div>
        </div>
    `).join('');
}

function setupAgentFilters() {
    const searchInput = document.getElementById('agentSearch');
    const cityFilter = document.getElementById('agentCity');
    const specialtyFilter = document.getElementById('agentSpecialty');
    const sortFilter = document.getElementById('agentSort');
    const searchBtn = document.getElementById('searchAgentsBtn');
    const loadMoreBtn = document.getElementById('loadMoreAgents');
    
    if (searchInput) {
        searchInput.addEventListener('input', loadAgents);
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', loadAgents);
    }
    
    if (cityFilter) {
        cityFilter.addEventListener('change', loadAgents);
    }
    
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', loadAgents);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', handleAgentSort);
    }
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreAgents);
    }
}

function applyAgentFilters(agents) {
    let filtered = [...agents];
    
    // Search filter
    const searchInput = document.getElementById('agentSearch');
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(agent => 
            agent.name.toLowerCase().includes(searchTerm) ||
            agent.agency.toLowerCase().includes(searchTerm)
        );
    }
    
    // City filter
    const cityFilter = document.getElementById('agentCity');
    if (cityFilter && cityFilter.value) {
        filtered = filtered.filter(agent => agent.city === cityFilter.value);
    }
    
    // Specialty filter
    const specialtyFilter = document.getElementById('agentSpecialty');
    if (specialtyFilter && specialtyFilter.value) {
        filtered = filtered.filter(agent => 
            agent.specialties.includes(specialtyFilter.value)
        );
    }
    
    return filtered;
}

function handleAgentSort() {
    const sortSelect = document.getElementById('agentSort');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    let sorted = [...applyAgentFilters(currentAgents)];
    
    switch(sortValue) {
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'experience':
            sorted.sort((a, b) => b.experience - a.experience);
            break;
        case 'properties':
            sorted.sort((a, b) => b.properties - a.properties);
            break;
        case 'recent':
            // Keep original order (assuming it's by join date)
            break;
    }
    
    // Update display
    const container = document.getElementById('agentsGrid');
    if (container) {
        container.innerHTML = sorted.map(agent => `
            <div class="agent-card">
                <div class="agent-card-header">
                    <div class="agent-card-avatar">
                        <img src="${agent.photo}" alt="${agent.name}">
                    </div>
                    <div class="agent-card-info">
                        <h4>${agent.name}</h4>
                        <p>${agent.agency}</p>
                        <p>${agent.city.charAt(0).toUpperCase() + agent.city.slice(1)}</p>
                        <div class="agent-rating">
                            <span class="rating">${'★'.repeat(Math.floor(agent.rating))}${'☆'.repeat(5 - Math.floor(agent.rating))}</span>
                            <span class="rating-count">(${agent.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
                
                <div class="agent-specialties">
                    ${agent.specialties.map(specialty => `
                        <span class="specialty-badge">${specialty.charAt(0).toUpperCase() + specialty.slice(1)}</span>
                    `).join('')}
                </div>
                
                <div class="agent-stats">
                    <div class="stat-item">
                        <span class="stat-number">${agent.experience}</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${agent.properties}</span>
                        <span class="stat-label">Properties Sold</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${agent.rating}</span>
                        <span class="stat-label">Rating</span>
                    </div>
                </div>
                
                <div class="agent-actions">
                    <button class="agent-contact-btn primary" onclick="contactAgent('${agent.phone}')">
                        📞 Call
                    </button>
                    <button class="agent-contact-btn secondary" onclick="emailAgent('${agent.email}')">
                        ✉️ Email
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function loadMoreAgents() {
    const loadMoreBtn = document.getElementById('loadMoreAgents');
    if (loadMoreBtn) {
        loadMoreBtn.textContent = 'Loading...';
        setTimeout(() => {
            loadMoreBtn.textContent = 'Load More Agents';
        }, 1000);
    }
}

// Contact and form functions
function setupContactForm() {
    const contactForms = document.querySelectorAll('#contactForm, #propertyContactForm');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactFormSubmit);
    });
    
    // Contact buttons in property details
    const callBtn = document.getElementById('callOwnerBtn');
    const emailBtn = document.getElementById('emailOwnerBtn');
    
    if (callBtn && currentProperty) {
        callBtn.addEventListener('click', () => contactAgent(currentProperty.agent.phone));
    }
    
    if (emailBtn && currentProperty) {
        emailBtn.addEventListener('click', () => emailAgent(currentProperty.agent.email));
    }
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#e74c3c';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            form.style.display = 'none';
        } else {
            alert('Message sent successfully! We will get back to you soon.');
            form.reset();
        }
    }, 2000);
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    
    if (!emailInput.value) {
        alert('Please enter your email address');
        return;
    }
    
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    }, 1500);
}

function handleHeroSearch(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Build query parameters
    const params = new URLSearchParams();
    
    if (formData.get('city')) params.set('city', formData.get('city'));
    if (formData.get('propertyType')) params.set('type', formData.get('propertyType'));
    if (formData.get('budget')) params.set('budget', formData.get('budget'));
    if (formData.get('bhk')) params.set('bhk', formData.get('bhk'));
    
    // Redirect to listings page with filters
    window.location.href = `listings.html?${params.toString()}`;
}

function handleSearchTabClick(event) {
    event.preventDefault();
    
    const clickedTab = event.target;
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');
    
    // You can add logic here to change form fields based on selected tab
}

// Navigation functions
function goToPropertyDetails(propertyId) {
    window.location.href = `property-details.html?id=${propertyId}`;
}

function contactAgent(phone) {
    // In a real application, this would open a phone dialer
    alert(`Calling agent at ${phone}`);
}

function emailAgent(email) {
    // In a real application, this would open an email client
    alert(`Sending email to ${email}`);
    // window.location.href = `mailto:${email}?subject=Property Inquiry`;
}

// Utility functions for animations and effects
function addFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all property cards and other animated elements
    const animatedElements = document.querySelectorAll('.property-card, .city-card, .agent-card, .project-banner');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addFadeInAnimation, 100);
});

// Login page functions
function initializeLoginPage() {
    setupAuthTabs();
    setupAuthForms();
    setupPasswordToggles();
    setupPasswordStrength();
}

function setupAuthTabs() {
    const tabs = document.querySelectorAll('.auth-tab');
    const containers = document.querySelectorAll('.auth-form-container');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding form
            containers.forEach(container => {
                container.classList.remove('active');
                if (container.id === targetTab + 'Form') {
                    container.classList.add('active');
                }
            });
        });
    });
}

function setupAuthForms() {
    // Login form
    const loginForm = document.getElementById('loginFormData');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register form
    const registerForm = document.getElementById('registerFormData');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Forgot password form
    const forgotForm = document.getElementById('forgotPasswordFormData');
    if (forgotForm) {
        forgotForm.addEventListener('submit', handleForgotPassword);
    }
    
    // Real-time validation
    setupRealTimeValidation();
}

function setupPasswordToggles() {
    // Password toggle functionality is handled by onclick in HTML
}

function setupPasswordStrength() {
    const passwordInput = document.getElementById('registerPassword');
    const strengthIndicator = document.getElementById('passwordStrength');
    
    if (passwordInput && strengthIndicator) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            strengthIndicator.className = 'password-strength ' + strength;
        });
    }
}

function calculatePasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score < 3) return 'weak';
    if (score < 5) return 'medium';
    return 'strong';
}

function setupRealTimeValidation() {
    // Email validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateEmail(this);
        });
    });
    
    // Phone validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            validatePhone(this);
        });
    }
    
    // Password confirmation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('registerPassword');
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('blur', function() {
            validatePasswordMatch(passwordInput, this);
        });
    }
}

function validateEmail(input) {
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById(input.id + 'Error');
    
    if (!email) {
        showFieldError(input, errorElement, 'Email is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showFieldError(input, errorElement, 'Please enter a valid email address');
        return false;
    } else {
        showFieldSuccess(input, errorElement);
        return true;
    }
}

function validatePhone(input) {
    const phone = input.value.trim();
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const errorElement = document.getElementById('phoneError');
    
    if (!phone) {
        showFieldError(input, errorElement, 'Phone number is required');
        return false;
    } else if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        showFieldError(input, errorElement, 'Please enter a valid Indian phone number');
        return false;
    } else {
        showFieldSuccess(input, errorElement);
        return true;
    }
}

function validatePasswordMatch(passwordInput, confirmInput) {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    const errorElement = document.getElementById('confirmPasswordError');
    
    if (confirmPassword && password !== confirmPassword) {
        showFieldError(confirmInput, errorElement, 'Passwords do not match');
        return false;
    } else if (confirmPassword) {
        showFieldSuccess(confirmInput, errorElement);
        return true;
    }
    return true;
}

function showFieldError(input, errorElement, message) {
    input.classList.remove('success');
    input.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function showFieldSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe');
    
    // Validate inputs
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    
    let isValid = true;
    
    if (!validateEmail(emailInput)) {
        isValid = false;
    }
    
    if (!password) {
        showFieldError(passwordInput, document.getElementById('loginPasswordError'), 'Password is required');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simulate login process
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Simulate successful login
        if (email === 'demo@property99.com' && password === 'demo123') {
            // Store user session
            const user = {
                email: email,
                name: 'Demo User',
                loginTime: new Date().toISOString()
            };
            
            if (rememberMe) {
                localStorage.setItem('property99User', JSON.stringify(user));
            } else {
                sessionStorage.setItem('property99User', JSON.stringify(user));
            }
            
            showModal('Login Successful!', 'Welcome back! You have been logged in successfully.', 'Continue to Dashboard');
            
            // Redirect after modal closes
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            showFieldError(passwordInput, document.getElementById('loginPasswordError'), 'Invalid email or password');
        }
    }, 2000);
}

function handleRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate all fields
    let isValid = true;
    
    // Validate first name
    const firstName = formData.get('firstName');
    const firstNameInput = document.getElementById('firstName');
    if (!firstName.trim()) {
        showFieldError(firstNameInput, document.getElementById('firstNameError'), 'First name is required');
        isValid = false;
    }
    
    // Validate last name
    const lastName = formData.get('lastName');
    const lastNameInput = document.getElementById('lastName');
    if (!lastName.trim()) {
        showFieldError(lastNameInput, document.getElementById('lastNameError'), 'Last name is required');
        isValid = false;
    }
    
    // Validate email
    const emailInput = document.getElementById('registerEmail');
    if (!validateEmail(emailInput)) {
        isValid = false;
    }
    
    // Validate phone
    const phoneInput = document.getElementById('phone');
    if (!validatePhone(phoneInput)) {
        isValid = false;
    }
    
    // Validate password
    const password = formData.get('password');
    const passwordInput = document.getElementById('registerPassword');
    if (password.length < 8) {
        showFieldError(passwordInput, document.getElementById('registerPasswordError'), 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    // Validate password confirmation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (!validatePasswordMatch(passwordInput, confirmPasswordInput)) {
        isValid = false;
    }
    
    // Validate user type
    const userType = formData.get('userType');
    const userTypeInput = document.getElementById('userType');
    if (!userType) {
        showFieldError(userTypeInput, document.getElementById('userTypeError'), 'Please select user type');
        isValid = false;
    }
    
    // Validate terms agreement
    const agreeTerms = formData.get('agreeTerms');
    if (!agreeTerms) {
        const errorElement = document.getElementById('agreeTermsError');
        if (errorElement) {
            errorElement.textContent = 'You must agree to the terms and conditions';
        }
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simulate registration process
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Create user account
        const user = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            email: formData.get('email'),
            phone: formData.get('phone'),
            userType: userType,
            newsletter: formData.get('newsletter') ? true : false,
            registrationDate: new Date().toISOString()
        };
        
        // Store user data
        localStorage.setItem('property99User', JSON.stringify(user));
        
        showModal('Account Created!', `Welcome ${firstName}! Your account has been created successfully. You can now start exploring properties.`, 'Start Browsing');
        
        // Switch to login form after successful registration
        setTimeout(() => {
            document.querySelector('[data-tab="login"]').click();
            document.getElementById('loginEmail').value = user.email;
        }, 2000);
        
    }, 2000);
}

function handleForgotPassword(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    
    // Validate email
    const emailInput = document.getElementById('forgotEmail');
    if (!validateEmail(emailInput)) {
        return;
    }
    
    // Simulate password reset
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        showModal('Reset Link Sent!', `A password reset link has been sent to ${email}. Please check your email and follow the instructions.`, 'Back to Login');
        
        // Switch back to login form
        setTimeout(() => {
            showLogin();
        }, 2000);
    }, 2000);
}

function showModal(title, message, buttonText = 'OK') {
    const modal = document.getElementById('successModal');
    const titleElement = document.getElementById('modalTitle');
    const messageElement = document.getElementById('modalMessage');
    const buttonElement = document.getElementById('modalButton');
    
    if (modal && titleElement && messageElement && buttonElement) {
        titleElement.textContent = title;
        messageElement.textContent = message;
        buttonElement.textContent = buttonText;
        
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function showForgotPassword() {
    const tabs = document.querySelectorAll('.auth-tab');
    const containers = document.querySelectorAll('.auth-form-container');
    
    // Hide tabs
    document.querySelector('.auth-tabs').style.display = 'none';
    
    // Hide all forms
    containers.forEach(container => {
        container.classList.remove('active');
    });
    
    // Show forgot password form
    document.getElementById('forgotPasswordForm').classList.add('active');
}

function showLogin() {
    const tabs = document.querySelectorAll('.auth-tab');
    const containers = document.querySelectorAll('.auth-form-container');
    
    // Show tabs
    document.querySelector('.auth-tabs').style.display = 'flex';
    
    // Reset tab states
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-tab="login"]').classList.add('active');
    
    // Show login form
    containers.forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById('loginForm').classList.add('active');
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const toggle = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
    } else {
        input.type = 'password';
        toggle.textContent = '👁️';
    }
}

function socialLogin(provider) {
    // Simulate social login
    showModal('Social Login', `${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be integrated here in a real application.`, 'OK');
}

// Check if user is already logged in
function checkUserLogin() {
    const user = localStorage.getItem('property99User') || sessionStorage.getItem('property99User');
    if (user) {
        const userData = JSON.parse(user);
        // Update header to show user is logged in
        updateHeaderForLoggedInUser(userData);
    }
}

function updateHeaderForLoggedInUser(user) {
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = `Hi, ${user.firstName}`;
        loginBtn.href = '#';
        loginBtn.onclick = showUserMenu;
    }
}

function showUserMenu() {
    // Simple user menu functionality
    const options = ['Dashboard', 'My Properties', 'Saved Searches', 'Profile', 'Logout'];
    const choice = prompt('User Menu:\n' + options.map((opt, i) => `${i + 1}. ${opt}`).join('\n') + '\n\nEnter your choice (1-5):');
    
    if (choice === '5') {
        logout();
    } else if (choice >= '1' && choice <= '4') {
        alert(`${options[choice - 1]} functionality would be implemented here.`);
    }
}

function logout() {
    localStorage.removeItem('property99User');
    sessionStorage.removeItem('property99User');
    window.location.reload();
}

// Initialize login check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
});

// Export functions for global access
window.goToPropertyDetails = goToPropertyDetails;
window.contactAgent = contactAgent;
window.emailAgent = emailAgent;
window.changeMainImage = changeMainImage;
window.calculateEMI = calculateEMI;
window.togglePassword = togglePassword;
window.socialLogin = socialLogin;
window.showForgotPassword = showForgotPassword;
window.showLogin = showLogin;
window.closeModal = closeModal;