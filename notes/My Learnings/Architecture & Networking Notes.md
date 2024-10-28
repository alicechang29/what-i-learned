

![[Screenshot 2024-10-25 at 10.30.11 AM.png]]
1. **Client Sends Request**:
    - The client, built with React/TypeScript, sends a request to the **ALB (Application Load Balancer)**.
2. **ALB Routes to EC2 Instance**:
    - The ALB forwards the request to an **EC2 instance** hosting a **monolithic application**.
    - This monolith runs **Nginx**, which handles both:
        - **Serving static files** to the client.
        - **Proxying API requests** to the backend service
3. **Nginx Proxies to Backend Service**:
    - Nginx forwards dynamic or API requests to the **backend service**, built in **Java and Spring
4. **Backend Service Retrieves Data**:
    - The backend service fetches data from:
        - **Redis ElastiCache** for caching.
        - **AWS RDS (PostgreSQL)** for persistent data storage.
    - Both the backend and the frontend are tightly integrated, forming a single deployable unit.
5. **Response Sent Back to Client**:
    - The backend service processes the request and returns the response. Nginx proxies the response back through EC2 and the ALB to the client.
6. **Analytics and CloudFront**:
    - Outside of the main request flow:
        - Both the client and backend send data to **Analytics (Amplitude)**.
        - **AWS CloudFront Proxy** may be used for distributing or caching static content.


### CI/CD Process
(only sort of doing CI process but not CD)

**Frontend deployments**
- CI portion
	- merge onto release branch 
	- Release branch goes into Dev 
	- Tests/deploy are running on every commit 
- Merging onto release branch triggers a Github Action to be created 
- Someone manually handles the deployment to production 

**Backend deployments** 
- testing/deploying are always manually handled - running migrations 


==**To read later...** ==

OSI Model 
https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/
https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/#
https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/

ALBs and NLBs run at different layers of the networking stack and so give you different capabilities in exchange for different performance/cost.  like the ALB lets you make rules to route traffic based on URLs because the ALB operates at layer 7, whereas the NLB operates at layer 4 so you can only make rules based on hosts & ports because the NLB doesn't know anything about HTTP



https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature
![[Pasted image 20241025103848.png]]