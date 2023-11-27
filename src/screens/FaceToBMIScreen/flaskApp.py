from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)

# Load the trained ViT_BMI_model.keras model
model = tf.keras.models.load_model("./ViT_BMI_model.keras")

@app.route("/predict_bmi", methods=["POST"])
def predict_bmi():
    try:
        # Receive the image from the React Native app
        image = request.files["image"]
        img = Image.open(image)
        
        # Preprocess the image (resize, normalize, etc.)
        img = img.resize((224, 224))
        img = np.array(img) / 255.0
        
        # Perform BMI prediction
        bmi = model.predict(np.expand_dims(img, axis=0))[0][0]
        
        # Return the BMI prediction
        return jsonify({"bmi": bmi})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
