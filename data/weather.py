import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
import re

GOOGLE_GEMINI_API_KEY = "AIzaSyByHEptfNNtxFaYru3RgHce3wfwwKijWy4"
genai.configure(api_key=GOOGLE_GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/api/location', methods=['POST'])
def get_weather():
    data = request.get_json()
    location = data.get("location", "")

location = input("Your Location")
prompt = f"Give me the approximate mean temperature and mean humidity for the this year in: {location}, answer in this form: mean temp, mean humidity. Dont need to be exact, just approximation is fine. Use any resource"
response_text = model.generate_content(prompt)  
response_text = response_text.text

match = re.search(r'([\d.]+)°C,\s*([\d.]+)%', response_text)
if match:
    temperature = float(match.group(1))
    humidity = float(match.group(2))

print(f"{temperature}\n{humidity}")
