import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
model= RandomForestClassifier()
from sklearn.preprocessing import LabelEncoder
le_gender = LabelEncoder()

def PreProcessing():
    df = pd.read_csv("covid-19-26.csv")
    print(df)

    df["sex"] = le_gender.fit_transform(df['gender'])

    df = df.drop(["gender"] , axis="columns")

    mean = df["age"].mean()
    df["age"] = df["age"].fillna(mean)

    data = df.drop(["Health_status" , "id"] , axis = "columns")
    target = df["Health_status"]

    return (data , target)


def Split_Datasets(data, target):

    x_train, x_test, y_train, y_test = train_test_split(data, target , test_size = 0.20 , random_state=50)
    return (x_train, x_test, y_train, y_test)


def Build_Model(x_train, y_train):
    model = RandomForestClassifier()
    model.fit(x_train.values, y_train.values)

    return model


def makePrediction(test_data):
    data , target = PreProcessing()
    x_train, x_test, y_train, y_test = Split_Datasets(data , target)
    model = Build_Model(x_train, y_train)

    y_pred=model.predict(x_test)
    score=accuracy_score(y_test,y_pred)
    result = model.predict(test_data)
    print("Accurancy of our model :" ,score*100,"%")

    return result
