# Portfolio Backend API Contracts

## Overview
This document defines the API contracts for Hardik Harsh's portfolio website, outlining the backend endpoints and data structures needed to replace the current mock data implementation.

## Current Mock Data Structure
The frontend currently uses mock data from `/app/frontend/src/data/mock.js` with the following sections:
- Hero section data
- About section data  
- Skills data with categories and progress levels
- Featured projects (4 projects including Kaggle competitions and Power BI project)
- Work experience and education timeline
- Professional recommendations/testimonials
- Contact information

## Backend API Endpoints

### 1. Portfolio Data Endpoints

#### GET /api/portfolio/hero
**Purpose**: Get hero section data
**Response**:
```json
{
  "name": "HARDIK HARSH",
  "title": "Data Scientist & ML Engineer", 
  "description": "Analytical and motivated Data Scientist...",
  "social": {
    "github": "https://github.com/Hard2290",
    "linkedin": "https://linkedin.com/in/hardik-harsh-bb5819169",
    "email": "rrhrdikh@gmail.com"
  }
}
```

#### GET /api/portfolio/about
**Purpose**: Get about section information
**Response**:
```json
{
  "intro": "IIT Kanpur graduate specializing in...",
  "description": "With a strong foundation in Civil Engineering...",
  "expertise": "I excel in feature engineering..."
}
```

#### GET /api/portfolio/skills
**Purpose**: Get skills data with categories and levels
**Response**:
```json
{
  "programming": [
    {"name": "Python", "level": 95},
    {"name": "SQL", "level": 90}
  ],
  "machineLearning": [...],
  "dataAnalytics": [...],
  "visualization": [...],
  "deepLearning": [...],
  "statistics": [...]
}
```

#### GET /api/portfolio/projects
**Purpose**: Get featured projects
**Response**:
```json
{
  "featured": [
    {
      "title": "Housing Prices Competition",
      "platform": "KAGGLE",
      "type": "competition", 
      "rank": "53",
      "total": "5,823",
      "percentile": "1",
      "accuracy": "0.1332",
      "description": "Developed end-to-end pipeline...",
      "highlights": [...],
      "technologies": [...],
      "github": "https://github.com/Hard2290/House_price_prediction",
      "kaggle": "https://www.kaggle.com/competitions/home-data-for-ml-course/overview"
    }
  ]
}
```

#### GET /api/portfolio/experience
**Purpose**: Get work experience and education data
**Response**:
```json
{
  "work": [
    {
      "title": "Digital Marketing Strategist",
      "company": "PropertyPistol Realty Pvt. Ltd.",
      "location": "Remote",
      "period": "Sep-Nov 2020",
      "achievements": [...],
      "skills": [...]
    }
  ],
  "education": [
    {
      "year": "2020",
      "level": "Bachelor's Degree", 
      "degree": "B.Tech (Civil Engineering)",
      "institution": "Indian Institute of Technology Kanpur",
      "board": "",
      "gpa": "CGPA: 7.1/10.0",
      "awards": []
    }
  ],
  "achievements": [...]
}
```

#### GET /api/portfolio/recommendations
**Purpose**: Get professional recommendations
**Response**:
```json
[
  {
    "name": "Ajish G Habib",
    "title": "Founder & CEO",
    "company": "Tuttifrutti Interactive",
    "date": "December 15, 2020", 
    "relationship": "Ajish G managed Hardik directly",
    "text": "Hardik was a critical member..."
  }
]
```

#### GET /api/portfolio/contact
**Purpose**: Get contact information
**Response**:
```json
{
  "email": "rrhrdikh@gmail.com",
  "phone": "+917992352249",
  "location": "India (Remote Ready)",
  "social": {
    "linkedin": "https://linkedin.com/in/hardik-harsh-bb5819169",
    "github": "https://github.com/Hard2290"
  }
}
```

### 2. Contact Form Endpoint

#### POST /api/contact/message
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Data Science Opportunity",
  "message": "Hi Hardik, I'd like to discuss..."
}
```
**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_message_id"
}
```

## Database Models

### 1. Portfolio Collection
**Collection**: `portfolio_data`
**Purpose**: Store all portfolio information in a single document for easy retrieval
**Schema**:
```json
{
  "_id": "hardik_portfolio",
  "hero": {...},
  "about": {...}, 
  "skills": {...},
  "projects": {...},
  "experience": {...},
  "recommendations": [...],
  "contact": {...},
  "updated_at": "2024-01-01T00:00:00Z"
}
```

### 2. Contact Messages Collection
**Collection**: `contact_messages`
**Purpose**: Store incoming contact form messages
**Schema**:
```json
{
  "_id": ObjectId,
  "name": "string",
  "email": "string",
  "subject": "string", 
  "message": "string",
  "created_at": "datetime",
  "status": "new|read|replied",
  "ip_address": "string"
}
```

## Frontend Integration Plan

### Phase 1: Backend Setup
1. Create MongoDB models and seed data
2. Implement portfolio data endpoints
3. Add contact form endpoint with validation
4. Test all endpoints

### Phase 2: Frontend Integration  
1. Create API service layer in frontend
2. Replace mock data imports with API calls
3. Add loading states and error handling
4. Update components to use real data
5. Implement contact form functionality

### Phase 3: Testing & Optimization
1. Test all frontend-backend integration
2. Add proper error handling
3. Optimize API responses
4. Test contact form submission

## Current Mock Data Locations to Replace
- `/app/frontend/src/data/mock.js` - Complete mock data structure
- Components importing mock data:
  - `Portfolio.jsx` - Main data orchestration
  - `Hero.jsx` - Hero section data
  - `About.jsx` - About information
  - `Skills.jsx` - Skills with levels
  - `Projects.jsx` - Featured projects
  - `Experience.jsx` - Work and education
  - `Recommendations.jsx` - Testimonials  
  - `Contact.jsx` - Contact info

## API Integration Notes
- All API calls will use the existing `REACT_APP_BACKEND_URL` environment variable
- API endpoints will be prefixed with `/api` as per current setup
- Frontend will maintain loading states during API calls
- Error handling will gracefully fall back to cached data or show appropriate messages
- Contact form will provide success/error feedback to users

## Success Criteria
1. ✅ All mock data replaced with real API calls
2. ✅ Contact form functional and storing messages in database
3. ✅ Portfolio data easily manageable through database
4. ✅ Fast loading times with proper data structure
5. ✅ Error handling for all failure scenarios
6. ✅ Responsive design maintained throughout integration