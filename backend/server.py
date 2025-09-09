from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Hardik Harsh Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Pydantic Models
class ContactMessage(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")
    ip_address: Optional[str] = None

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr  
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# Portfolio Data Routes
@api_router.get("/portfolio/hero")
async def get_hero_data():
    """Get hero section data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("hero", {})
    except Exception as e:
        logging.error(f"Error fetching hero data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/about")
async def get_about_data():
    """Get about section data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("about", {})
    except Exception as e:
        logging.error(f"Error fetching about data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/skills")
async def get_skills_data():
    """Get skills data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("skills", {})
    except Exception as e:
        logging.error(f"Error fetching skills data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/projects")
async def get_projects_data():
    """Get projects data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("projects", {})
    except Exception as e:
        logging.error(f"Error fetching projects data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/experience")
async def get_experience_data():
    """Get experience and education data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("experience", {})
    except Exception as e:
        logging.error(f"Error fetching experience data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/recommendations")
async def get_recommendations_data():
    """Get recommendations data"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("recommendations", [])
    except Exception as e:
        logging.error(f"Error fetching recommendations data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/contact")
async def get_contact_data():
    """Get contact information"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        return portfolio.get("contact", {})
    except Exception as e:
        logging.error(f"Error fetching contact data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/portfolio/all")
async def get_all_portfolio_data():
    """Get all portfolio data at once"""
    try:
        portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        if not portfolio:
            raise HTTPException(status_code=404, detail="Portfolio data not found")
        
        # Remove MongoDB specific fields
        portfolio.pop("_id", None)
        portfolio.pop("updated_at", None)
        
        return portfolio
    except Exception as e:
        logging.error(f"Error fetching portfolio data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact Form Route
@api_router.post("/contact/message", response_model=ContactResponse)
async def submit_contact_message(contact_data: ContactMessageCreate):
    """Handle contact form submissions"""
    try:
        # Create contact message
        contact_message = ContactMessage(**contact_data.dict())
        message_dict = contact_message.dict()
        
        # Store in database
        result = await db.contact_messages.insert_one(message_dict)
        
        if result.inserted_id:
            return ContactResponse(
                success=True,
                message="Message sent successfully! Thank you for reaching out.",
                id=contact_message.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save message")
            
    except Exception as e:
        logging.error(f"Error saving contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message")

# Health check and existing routes
@api_router.get("/")
async def root():
    return {"message": "Hardik Harsh Portfolio API is running", "version": "1.0.0"}

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Test database connection
        await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        logging.error(f"Health check failed: {e}")
        return {"status": "unhealthy", "database": "disconnected"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize database with portfolio data if not exists"""
    try:
        # Check if portfolio data exists
        existing_portfolio = await db.portfolio_data.find_one({"_id": "hardik_portfolio"})
        
        if not existing_portfolio:
            logger.info("Initializing portfolio data...")
            await seed_portfolio_data()
            logger.info("Portfolio data initialized successfully")
        else:
            logger.info("Portfolio data already exists")
            
    except Exception as e:
        logger.error(f"Error during startup: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

async def seed_portfolio_data():
    """Seed the database with initial portfolio data"""
    portfolio_data = {
        "_id": "hardik_portfolio",
        "hero": {
            "name": "HARDIK HARSH",
            "title": "Data Scientist & ML Engineer",
            "description": "Analytical and motivated Data Scientist with expertise in Python, SQL, Machine Learning, and Deep Learning. Top 1% Kaggle performer with end-to-end ML pipeline experience.",
            "social": {
                "github": "https://github.com/Hard2290",
                "linkedin": "https://linkedin.com/in/hardik-harsh-bb5819169",
                "email": "rrhrdikh@gmail.com"
            }
        },
        "about": {
            "intro": "IIT Kanpur graduate specializing in end-to-end machine learning solutions with proven track record in competitive data science.",
            "description": "With a strong foundation in Civil Engineering from IIT Kanpur and a passion for data science, I've transitioned into building sophisticated ML models that solve real-world problems. My expertise spans the entire data science pipeline from data preprocessing to model deployment.",
            "expertise": "I excel in feature engineering, hyperparameter optimization, and model validation. My competitive programming background with 50+ LeetCode solutions complements my analytical approach to machine learning challenges."
        },
        "skills": {
            "programming": [
                {"name": "Python", "level": 95},
                {"name": "SQL", "level": 90},
                {"name": "Git/GitHub", "level": 85},
                {"name": "Jupyter Notebooks", "level": 95},
                {"name": "Google Colab", "level": 90}
            ],
            "machineLearning": [
                {"name": "Feature Engineering", "level": 95},
                {"name": "Model Validation", "level": 90},
                {"name": "Hyperparameter Tuning", "level": 95},
                {"name": "Time Series Forecasting", "level": 80},
                {"name": "Ensemble Methods", "level": 90}
            ],
            "dataAnalytics": [
                {"name": "Data Cleaning", "level": 95},
                {"name": "EDA", "level": 90},
                {"name": "Statistical Analysis", "level": 85},
                {"name": "A/B Testing", "level": 80},
                {"name": "Hypothesis Testing", "level": 85}
            ],
            "visualization": [
                {"name": "Power BI", "level": 90},
                {"name": "Matplotlib", "level": 85},
                {"name": "Seaborn", "level": 85},
                {"name": "DAX", "level": 80}
            ],
            "deepLearning": [
                {"name": "TensorFlow", "level": 85},
                {"name": "PyTorch", "level": 80},
                {"name": "CNN", "level": 85},
                {"name": "RNN", "level": 80},
                {"name": "Computer Vision", "level": 80}
            ],
            "statistics": [
                {"name": "Descriptive Statistics", "level": 90},
                {"name": "Inferential Statistics", "level": 85},
                {"name": "ANOVA", "level": 80},
                {"name": "Chi-Square Tests", "level": 80},
                {"name": "Confidence Intervals", "level": 85}
            ]
        },
        "projects": {
            "featured": [
                {
                    "title": "Housing Prices Competition",
                    "platform": "KAGGLE",
                    "type": "competition",
                    "rank": "53",
                    "total": "5,823",
                    "percentile": "1",
                    "accuracy": "0.1332",
                    "description": "Developed end-to-end pipeline with consistent 5-fold CV and predictive imputation. Achieved top 1% ranking through advanced feature engineering and ensemble methods.",
                    "highlights": [
                        "Created engineered features for bathrooms, porches, remodeling age",
                        "Applied encoding strategies across RF, GB, and XGBoost models",
                        "Hyperparameter tuning via Optuna and Grid Search",
                        "Blended top 3 regressors for final predictions"
                    ],
                    "technologies": ["Python", "XGBoost", "Random Forest", "Optuna", "Feature Engineering"],
                    "github": "https://github.com/Hard2290/House_price_prediction",
                    "kaggle": "https://www.kaggle.com/competitions/home-data-for-ml-course/overview"
                },
                {
                    "title": "Titanic Survival Prediction",
                    "platform": "KAGGLE",
                    "type": "prediction",
                    "rank": "407",
                    "total": "13,256",
                    "percentile": "3",
                    "accuracy": "0.8038",
                    "description": "Applied Stratified 5-Fold CV to preserve class distribution. Engineered multiple features and tested 20 model-encoding combinations.",
                    "highlights": [
                        "Handled missing values with advanced imputation techniques",
                        "Predicted Age using Kernel Ridge Regression",
                        "Engineered features: ticket_type, cabin_type, title, family_size",
                        "Ensembled top 3 classifiers for final submission"
                    ],
                    "technologies": ["Python", "Scikit-learn", "Kernel Ridge", "Feature Engineering", "Ensemble"],
                    "github": "https://github.com/Hard2290/titanic_survived",
                    "kaggle": "https://www.kaggle.com/competitions/titanic"
                },
                {
                    "title": "Housing Prices Advanced",
                    "platform": "KAGGLE",
                    "type": "competition",
                    "rank": "295",
                    "total": "4,132",
                    "percentile": "7",
                    "accuracy": "0.12045",
                    "description": "Built regression model using 80+ features with advanced preprocessing and feature engineering. Applied KMeans clustering and PCA for dimensionality.",
                    "highlights": [
                        "Preprocessed data by correcting categorical typos and invalid values",
                        "Engineered features: LivLotRatio, Spaciousness, VarFromMed",
                        "Applied KMeans clustering and PCA for feature reduction",
                        "Tuned XGBoost Regressor via Optuna optimization"
                    ],
                    "technologies": ["Python", "XGBoost", "KMeans", "PCA", "Optuna"],
                    "github": "https://github.com/Hard2290/House_price_prediction_advanced",
                    "kaggle": "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques"
                },
                {
                    "title": "Superstore Sales Analytics",
                    "platform": "POWER BI",
                    "type": "analytics",
                    "rank": "Business",
                    "total": "Analytics",
                    "percentile": None,
                    "accuracy": None,
                    "description": "Built interactive dashboard analyzing sales, profit, and returns (2020-2023). Designed KPIs for sales, profit, % returns with comprehensive business insights.",
                    "highlights": [
                        "Applied DAX measures for YOY growth and profit margins",
                        "Implemented slicers for region, segment, and product filters",
                        "Derived insights: $2.33M sales (+47%), $292K profit (+49%)",
                        "Identified profitable products (Copiers +$56K) and loss-makers (Tables -$17K)"
                    ],
                    "technologies": ["Power BI", "DAX", "Data Analytics", "Business Intelligence", "KPI Design"],
                    "github": "https://github.com/Hard2290/superstore_analytics_PowerBI",
                    "kaggle": None
                }
            ]
        },
        "experience": {
            "work": [
                {
                    "title": "Digital Marketing Strategist",
                    "company": "PropertyPistol Realty Pvt. Ltd.",
                    "location": "Remote",
                    "period": "Sep-Nov 2020",
                    "achievements": [
                        "Designed and optimized Google Ads campaigns, achieving top-3 Google rankings",
                        "Conducted ROI and lead quality analysis, reducing acquisition costs",
                        "Segmented landing pages by income groups, increasing engagement",
                        "Onboarded clients such as Godrej, Prestige, Shapoorji Pallonji, and Hiranandani"
                    ],
                    "skills": ["Google Ads", "ROI Analysis", "Landing Page Optimization", "Client Management"]
                },
                {
                    "title": "Game Developer",
                    "company": "Tuttifrutti Interactive Pvt. Ltd.",
                    "location": "Remote",
                    "period": "May-Jul 2018",
                    "achievements": [
                        "Built automated localization engine for multi-language support",
                        "Debugged and stabilized 200K+ lines of code, enhancing performance",
                        "Managed translation of 300+ visuals and 41 videos, launching on BigFish",
                        "Developed JSON-based automation engine to port game into 5 languages"
                    ],
                    "skills": ["Game Development", "Localization", "Code Debugging", "JSON", "Multi-language Support"]
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
                },
                {
                    "year": "2015",
                    "level": "Class XII",
                    "degree": "Class XII",
                    "institution": "S.H. Intercollege, Tulsia, Kishanganj",
                    "board": "BSEB",
                    "gpa": "77.4%",
                    "awards": [
                        {
                            "title": "Pratibha Samman",
                            "issuer": "Live Hindustan",
                            "date": "Jan 2015",
                            "description": "Secured top position in district in Intermediate Exam organised by BSEB"
                        }
                    ]
                },
                {
                    "year": "2013",
                    "level": "Class X",
                    "degree": "Class X",
                    "institution": "Bal Mandir Sr. Sec. School, Kishanganj",
                    "board": "CBSE",
                    "gpa": "10.0/10.0",
                    "awards": [
                        {
                            "title": "Best Drummer",
                            "issuer": "Bal Mandir Senior Secondary School",
                            "date": "Jan 2013",
                            "description": "Outstanding performance in school cultural activities"
                        },
                        {
                            "title": "Pratibha Samman",
                            "issuer": "Prabhat Khabar",
                            "date": "Jan 2013",
                            "description": "Secured 10 CGPA in Matriculation Exam organised by CBSE"
                        }
                    ]
                }
            ],
            "achievements": [
                {
                    "title": "GATE 2024 (Civil)",
                    "detail": "AIR 835, Score: 694"
                },
                {
                    "title": "ESE 2024 (Civil)",
                    "detail": "Qualified Preliminary"
                },
                {
                    "title": "JEE Advanced 2016",
                    "detail": "AIR 5876 (GEN), AIR 1055 (OBC)"
                },
                {
                    "title": "Pratibha Samman 2016",
                    "detail": "Recognized for JEE Performance"
                }
            ]
        },
        "recommendations": [
            {
                "name": "Ajish G Habib",
                "title": "Founder & CEO",
                "company": "Tuttifrutti Interactive",
                "date": "December 15, 2020",
                "relationship": "Ajish G managed Hardik directly",
                "text": "Hardik was a critical member of the 7 bubbling IITK interns, who worked together with us inside the trenches - in one of the most aspiring projects in our lives. Those were tough days with almost negligible light inside the dark tunnel! We were slowly transitioning from a Bootstrapped home-brew village startup to a Infopark IT game studio, and needless to mention these super-charged youngsters were super-critical assets. They altogether delivered amazing results in the digital marketing-engineering assignments, with very little management supervision. Also know Hardik personally as a kind caring human. We would whole-heartedly recommend Hardik to any organisation."
            },
            {
                "name": "Huzaifa Kazi",
                "title": "Senior Manager - Digital Marketing",
                "company": "PROPERTYPISTOL.com",
                "date": "December 1, 2020",
                "relationship": "Huzaifa managed Hardik directly",
                "text": "Hardik has been a great asset for us with his strong analytical and observation skills. He is a great learner and with such composed and focused attitude, he has a great future ahead. I wish him all the best for his future endeavour and he earns my highest recommendation hands down."
            }
        ],
        "contact": {
            "email": "rrhrdikh@gmail.com",
            "phone": "+917992352249",
            "location": "India (Remote Ready)",
            "social": {
                "linkedin": "https://linkedin.com/in/hardik-harsh-bb5819169",
                "github": "https://github.com/Hard2290"
            }
        },
        "updated_at": datetime.utcnow()
    }
    
    await db.portfolio_data.insert_one(portfolio_data)
