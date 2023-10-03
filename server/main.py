from flask import Flask
from flask import jsonify
import numpy as np  
import model
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def Home():
    return "Welcome to IRIS API"

@app.route('/predict/<string:test_data>')
def Predict(test_data):
    input_value_list = test_data.split(',')
    input_value_list = list(map(str, input_value_list))
    test_data = [np.array(input_value_list)]
    predicted_crop = model.makePrediction(test_data).ravel()
    print(predicted_crop)
    
    res = predicted_crop[0]
    print(res)

    return jsonify(res)


app.run(debug=True)
