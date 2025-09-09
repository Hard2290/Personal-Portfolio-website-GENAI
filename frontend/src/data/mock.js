export const mockData = {
  hero: {
    name: "HARDIK HARSH",
    title: "Data Scientist & ML Engineer",
    description: "Analytical and motivated Data Scientist with expertise in Python, SQL, Machine Learning, and Deep Learning. Top 1% Kaggle performer with end-to-end ML pipeline experience.",
    social: {
      github: "https://github.com/Hard2290",
      linkedin: "https://linkedin.com/in/hardik-harsh-bb5819169",
      email: "rrhrdikh@gmail.com"
    }
  },

  about: {
    intro: "IIT Kanpur graduate specializing in end-to-end machine learning solutions with proven track record in competitive data science.",
    description: "With a strong foundation in Civil Engineering from IIT Kanpur and a passion for data science, I've transitioned into building sophisticated ML models that solve real-world problems. My expertise spans the entire data science pipeline from data preprocessing to model deployment.",
    expertise: "I excel in feature engineering, hyperparameter optimization, and model validation. My competitive programming background with 50+ LeetCode solutions complements my analytical approach to machine learning challenges."
  },

  skills: {
    programming: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "Jupyter Notebooks", level: 95 },
      { name: "Google Colab", level: 90 }
    ],
    machineLearning: [
      { name: "Feature Engineering", level: 95 },
      { name: "Model Validation", level: 90 },
      { name: "Hyperparameter Tuning", level: 95 },
      { name: "Time Series Forecasting", level: 80 },
      { name: "Ensemble Methods", level: 90 }
    ],
    dataAnalytics: [
      { name: "Data Cleaning", level: 95 },
      { name: "EDA", level: 90 },
      { name: "Statistical Analysis", level: 85 },
      { name: "A/B Testing", level: 80 },
      { name: "Hypothesis Testing", level: 85 }
    ],
    visualization: [
      { name: "Power BI", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 85 },
      { name: "DAX", level: 80 }
    ],
    deepLearning: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "CNN", level: 85 },
      { name: "RNN", level: 80 },
      { name: "Computer Vision", level: 80 }
    ],
    statistics: [
      { name: "Descriptive Statistics", level: 90 },
      { name: "Inferential Statistics", level: 85 },
      { name: "ANOVA", level: 80 },
      { name: "Chi-Square Tests", level: 80 },
      { name: "Confidence Intervals", level: 85 }
    ]
  },

  projects: {
    featured: [
      {
        title: "Housing Prices Competition",
        platform: "KAGGLE",
        type: "competition",
        rank: "53",
        total: "5,823",
        percentile: "1",
        accuracy: "0.1332",
        description: "Developed end-to-end pipeline with consistent 5-fold CV and predictive imputation. Achieved top 1% ranking through advanced feature engineering and ensemble methods.",
        highlights: [
          "Created engineered features for bathrooms, porches, remodeling age",
          "Applied encoding strategies across RF, GB, and XGBoost models",
          "Hyperparameter tuning via Optuna and Grid Search",
          "Blended top 3 regressors for final predictions"
        ],
        technologies: ["Python", "XGBoost", "Random Forest", "Optuna", "Feature Engineering"],
        github: "https://github.com/Hard2290/House_price_prediction",
        kaggle: "https://www.kaggle.com/competitions/home-data-for-ml-course/overview"
      },
      {
        title: "Titanic Survival Prediction",
        platform: "KAGGLE", 
        type: "prediction",
        rank: "407",
        total: "13,256",
        percentile: "3",
        accuracy: "0.8038",
        description: "Applied Stratified 5-Fold CV to preserve class distribution. Engineered multiple features and tested 20 model-encoding combinations.",
        highlights: [
          "Handled missing values with advanced imputation techniques",
          "Predicted Age using Kernel Ridge Regression",
          "Engineered features: ticket_type, cabin_type, title, family_size",
          "Ensembled top 3 classifiers for final submission"
        ],
        technologies: ["Python", "Scikit-learn", "Kernel Ridge", "Feature Engineering", "Ensemble"],
        github: "https://github.com/Hard2290/titanic_survived",
        kaggle: "https://www.kaggle.com/competitions/titanic"
      },
      {
        title: "Housing Prices Advanced",
        platform: "KAGGLE",
        type: "competition", 
        rank: "295",
        total: "4,132",
        percentile: "7",
        accuracy: "0.12045",
        description: "Built regression model using 80+ features with advanced preprocessing and feature engineering. Applied KMeans clustering and PCA for dimensionality.",
        highlights: [
          "Preprocessed data by correcting categorical typos and invalid values",
          "Engineered features: LivLotRatio, Spaciousness, VarFromMed",
          "Applied KMeans clustering and PCA for feature reduction",
          "Tuned XGBoost Regressor via Optuna optimization"
        ],
        technologies: ["Python", "XGBoost", "KMeans", "PCA", "Optuna"],
        github: "https://github.com/Hard2290/House_price_prediction_advanced",
        kaggle: "https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques"
      },
      {
        title: "Superstore Sales Analytics",
        platform: "POWER BI",
        type: "analytics",
        rank: "Business",
        total: "Analytics",
        percentile: null,
        accuracy: null,
        description: "Built interactive dashboard analyzing sales, profit, and returns (2020-2023). Designed KPIs for sales, profit, % returns with comprehensive business insights.",
        highlights: [
          "Applied DAX measures for YOY growth and profit margins",
          "Implemented slicers for region, segment, and product filters",
          "Derived insights: $2.33M sales (+47%), $292K profit (+49%)",
          "Identified profitable products (Copiers +$56K) and loss-makers (Tables -$17K)"
        ],
        technologies: ["Power BI", "DAX", "Data Analytics", "Business Intelligence", "KPI Design"],
        github: "https://github.com/Hard2290/superstore_analytics_PowerBI",
        kaggle: null
      }
    ]
  },

  experience: {
    work: [
      {
        title: "Digital Marketing Strategist",
        company: "PropertyPistol Realty Pvt. Ltd.",
        location: "Remote",
        period: "Sep-Nov 2020",
        achievements: [
          "Designed and optimized Google Ads campaigns, achieving top-3 Google rankings",
          "Conducted ROI and lead quality analysis, reducing acquisition costs",
          "Segmented landing pages by income groups, increasing engagement",
          "Onboarded clients such as Godrej, Prestige, Shapoorji Pallonji, and Hiranandani"
        ],
        skills: ["Google Ads", "ROI Analysis", "Landing Page Optimization", "Client Management"]
      },
      {
        title: "Game Developer",
        company: "Tuttifrutti Interactive Pvt. Ltd.",
        location: "Remote", 
        period: "May-Jul 2018",
        achievements: [
          "Built automated localization engine for multi-language support",
          "Debugged and stabilized 200K+ lines of code, enhancing performance",
          "Managed translation of 300+ visuals and 41 videos, launching on BigFish",
          "Developed JSON-based automation engine to port game into 5 languages"
        ],
        skills: ["Game Development", "Localization", "Code Debugging", "JSON", "Multi-language Support"]
      }
    ],
    education: {
      degree: "B.Tech (Civil Engineering)",
      institution: "Indian Institute of Technology Kanpur",
      year: "2020",
      gpa: "CGPA: 7.1/10.0"
    },
    achievements: [
      {
        title: "GATE 2024 (Civil)",
        detail: "AIR 835, Score: 694"
      },
      {
        title: "ESE 2024 (Civil)", 
        detail: "Qualified Preliminary"
      },
      {
        title: "JEE Advanced 2016",
        detail: "AIR 5876 (GEN), AIR 1055 (OBC)"
      },
      {
        title: "Pratibha Samman 2016",
        detail: "Recognized for JEE Performance"
      }
    ]
  },

  contact: {
    email: "rrhrdikh@gmail.com",
    phone: "+917992352249",
    location: "India (Remote Ready)",
    social: {
      linkedin: "https://linkedin.com/in/hardik-harsh-bb5819169",
      github: "https://github.com/Hard2290"
    }
  }
};