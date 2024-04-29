request.args()

request.form()

session.get()


when getting response info from a POST request: 
- response = client.post(*endpoint*)

to get data as JSON and not HTML: 
- data = response.get_json()
