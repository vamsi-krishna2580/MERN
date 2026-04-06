import requests

url = "http://10.13.223.82:11434/api/generate"

res = requests.post(url, json={
    "model": "dhenu2-farming",
    "prompt": "Best crops for summer in India?",
    "stream": False
})

print(res.json())