## Authentication 
- **What?** 
	- Answers the question of "WHO ARE YOU?"
	- Alice is at the front door. How do we know it's really Alice and not Bob wearing an Alice wig? 
- **Why?** 
	- To ensure that the person entering is who they say they are 
- **How?** 
	- Login: username/password 
	- 2 factor authentication 
	- Tokens: 
		- JWTs
			- [ Disadvantages ](https://medium.com/@codealfi/understanding-jwt-authentication-benefits-and-limitations-3c388dba172e#:~:text=Disadvantages%20of%20JWT%20Authentication%3A&text=Limited%20Token%20Expiry%20Control%3A%20Once,attackers%20can%20create%20forged%20tokens.)
				- Token size - increases with the amount of info it contains 
				- Limited Token Expiry Control 
					- Not so easy to revoke JWT token 
					- It's basically valid until it expires 
				- Security Risk 
					- if secret key is compromised, attackers can create forged tokens 
				- Tokens are immutable 
					- if user's authorization changed, they will need to login again to get updated token 
		- OAuth 

## Authorization 
- **What?** 
	- Answers the question of "WHAT CAN YOU DO?"
	- Are you allowed to be in this house at all? Are you allowed to be in this specific room?
- **Why?** 
	- To manage permissions and only allow users to enter certain areas/perform certain actions only if they are allowed to 
	- Example: in CVM - only certain users could access parts of the app or have write permissions based on role 
- **How?** 
	- Role-based access control (RBAC)
	- Attribute-based access control (ABAC)
	- Access control lists (ACLs)