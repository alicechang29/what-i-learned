![[Pasted image 20240903101910.png]]
- "Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
- Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
	- handles filtering data 
- Views (templates) used by the controllers to render the data.


### Controller 

**The controller only:**
- Accepts requests 
- Performs validation to determine that the request is legal, 
- Returns a response. 

A controller does not talk to a model, it always goes through the service layer.

### Service 

**A service doesn’t:** 
- consume requests, that’s up to the Controllers. 
- access the data entities, that’s up to the models. 
- have a 1-1 relationship with a model 

#### Service relationship with Models 
- A service can call many models --> **1 Service : Many models** 
- A model can be called by many services --> **1 Model : Many services** 
- A service can be designed without any database design decisions 

To research: BDD behavior driven development 