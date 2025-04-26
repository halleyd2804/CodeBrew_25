import pandas as pd
import numpy as np
import joblib
# Split the data into train and test set
from sklearn.model_selection import train_test_split, cross_val_score

df = pd.read_csv("Crop_recommendation.csv")

features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']
labels = df['label'].unique()
X_train, X_test, Y_train, Y_test = train_test_split(features,target,test_size = 0.2,random_state = 42)

# Random Forest
from sklearn.ensemble import RandomForestClassifier
modelRF = RandomForestClassifier(n_estimators=20, random_state=42)
modelRF.fit(X_train,Y_train)

from sklearn.model_selection import RandomizedSearchCV

param_grid = {
    'n_estimators': [50, 100, 200, 300],
    'max_depth': [None, 10, 20, 30, 40],
    'min_samples_split': [2, 5, 10, 20],
    'min_samples_leaf': [1, 2, 4, 8],
    'max_features': ['sqrt', 'log2', None, 0.5],
    'criterion': ['gini', 'entropy'],
    'bootstrap': [True, False]  
}

random_search = RandomizedSearchCV(
    estimator=modelRF,
    param_distributions=param_grid,
    n_iter=20, 
    cv=5,
    scoring='accuracy',
    n_jobs=-1,
    random_state=0,
    verbose=1
)
random_search.fit(X_train, Y_train)

joblib.dump(random_search.best_estimator_, 'best_random_forest_model.pkl')