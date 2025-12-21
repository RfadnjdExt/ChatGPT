from curl_cffi  import requests
from ..logger   import Log
from ..runtime  import Utils


class IP_Info:
    
    @staticmethod
    def fetch_info(session: requests.session.Session) -> list:
        try:
            response = session.get('http://ip-api.com/json/', timeout=5)
            if response.status_code == 200:
                data = response.json()
                return [
                    data.get('query', '1.1.1.1'),
                    data.get('city', 'Los Angeles'),
                    data.get('regionName', 'California'),
                    str(data.get('lat', '34.0522')),
                    str(data.get('lon', '-118.2437')),
                    data.get('timezone', 'UTC')
                ]
        except Exception as e:
            Log.Error(f"Failed to fetch IP info: {e}. Using default values.")
            
        # Fallback values
        return [
            "1.1.1.1",
            "Los Angeles",
            "California",
            "34.0522",
            "-118.2437",
            "UTC"
        ]