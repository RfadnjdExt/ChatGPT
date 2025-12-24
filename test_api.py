import requests
import json

url = "http://localhost:6969/conversation"
headers = {"Content-Type": "application/json"}
data = {
    "message": "Mensos Sebut Besaran Jaminan Hidup Korban Bencana Tunggu Arahan Presiden"
}

try:
    print(f"Sending request to {url}...")
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        print("Success!")
        print("Response:", json.dumps(response.json(), indent=2))
    else:
        print(f"Failed with status {response.status_code}")
        print("Response:", response.text)
except Exception as e:
    print(f"Error: {e}")
