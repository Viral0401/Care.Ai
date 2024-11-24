# from flask import Flask, request, jsonify
# import pandas as pd
# import joblib
 
# app = Flask(__name__)
 
# # Load your trained model
# try:
#     model = joblib.load('best_model.pkl')
# except Exception as e:
#     print(f"Error loading the model: {str(e)}")
#     model = None
 
# # Define the mapping dictionary
# label_mapping = {
#     0: 'Alcohol use disorder',
#     1: 'Acute stress disorder',
#     2: 'Depressive disorder',
#     3: 'Healthy control',
#     4: 'Behavioral addiction disorder',
#     5: 'Obsessive compulsive disorder',
#     6: 'Schizophrenia',
#     7: 'Panic disorder',
#     8: 'Social anxiety disorder',
#     9: 'Posttraumatic stress disorder',
#     10: 'Adjustment disorder',
#     11: 'Bipolar disorder'
# }
 
# @app.route('/predict', methods=['POST'])
# def predict():
#     if model is None:
#         return jsonify({'error': 'Model not loaded'})
 
#     try:
#         # Receive data from client
#         data = request.json
#         # Assuming data is received as a list of values
#         feature_values = data['features']
 
#         # Create a DataFrame for the input features
#         feature_names = ['age', 'IQ', 'COH.B.theta.c.F7.s.O2', 'AB.D.beta.h.T3', 'COH.B.theta.e.Fz.h.T3',
#                          'AB.F.gamma.p.P4', 'AB.A.delta.q.T6', 'sex', 'COH.A.delta.c.F7.g.F8',
#                          'COH.B.theta.h.T3.i.C3', 'COH.A.delta.a.FP1.e.Fz', 'AB.D.beta.q.T6',
#                          'COH.A.delta.m.T5.r.O1', 'COH.A.delta.b.FP2.r.O1', 'COH.D.beta.m.T5.r.O1']
#         input_features = pd.DataFrame([feature_values], columns=feature_names)
 
#         # Predict the disorder
#         prediction = model.predict(input_features)
 
#         # Map the predicted output to its label
#         mapped_prediction = label_mapping.get(prediction[0], 'Unknown')
 
#         # Return the prediction
#         return jsonify({'specific.disorder': mapped_prediction})
#     except Exception as e:
#         return jsonify({'error': f'Error predicting: {str(e)}'})
 
# if __name__ == '__main__':
#     # Use threaded=True to avoid the "Restarting with watchdog" issue in IPython
#     app.run(debug=True, threaded=True)
 
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS module
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)  # Apply CORS to your Flask app

# Load your trained model
try:
    model = joblib.load('best_model.pkl')
except Exception as e:
    print(f"Error loading the model: {str(e)}")
    model = None

# Define the mapping dictionary
label_mapping = {
    0: 'Alcohol use disorder',
    1: 'Acute stress disorder',
    2: 'Depressive disorder',
    3: 'Healthy control',
    4: 'Behavioral addiction disorder',
    5: 'Obsessive compulsive disorder',
    6: 'Schizophrenia',
    7: 'Panic disorder',
    8: 'Social anxiety disorder',
    9: 'Posttraumatic stress disorder',
    10: 'Adjustment disorder',
    11: 'Bipolar disorder'
}

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'})

    try:
        # Receive data from client
        data = request.json
        # Assuming data is received as a list of values
        feature_values = data['features']

        # Create a DataFrame for the input features
        feature_names = ['age', 'IQ', 'COH.B.theta.c.F7.s.O2', 'AB.D.beta.h.T3', 'COH.B.theta.e.Fz.h.T3',
                         'AB.F.gamma.p.P4', 'AB.A.delta.q.T6', 'sex', 'COH.A.delta.c.F7.g.F8',
                         'COH.B.theta.h.T3.i.C3', 'COH.A.delta.a.FP1.e.Fz', 'AB.D.beta.q.T6',
                         'COH.A.delta.m.T5.r.O1', 'COH.A.delta.b.FP2.r.O1', 'COH.D.beta.m.T5.r.O1']
        input_features = pd.DataFrame([feature_values], columns=feature_names)

        # Predict the disorder
        prediction = model.predict(input_features)

        # Map the predicted output to its label
        mapped_prediction = label_mapping.get(prediction[0], 'Unknown')

        # Return the prediction
        return jsonify({'specific.disorder': mapped_prediction})
    except Exception as e:
        return jsonify({'error': f'Error predicting: {str(e)}'})

if __name__ == '__main__':
    # Use threaded=True to avoid the "Restarting with watchdog" issue in IPython
    app.run(debug=True, threaded=True)
