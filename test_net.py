
import urllib.request
try:
    with urllib.request.urlopen('http://ip-api.com/json/', timeout=10) as response:
        print(response.read().decode('utf-8'))
except Exception as e:
    print(f"Error: {e}")
