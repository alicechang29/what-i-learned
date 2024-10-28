
- Why would you even use S3? don't servers have hard drives? can't you just save things on the server?
	- Benefits of S3 are that (even though all this could be manually managed on hard drives), S3 helps with:  
	- Scalability: where you don't have to worry about managing space, just pay for what you use. Vs in hard drive, you will have to worry about the size of the hard drive, and managing the storage.  
	- Reliability and Data Sync: S3 can sync files across multiple servers and handle backups  
	- Security: can manage permissions using AWS's IAM roles vs handling the authorizing and authenticating yourself  
	- Load Balancing: determines what happens if multiple clients are reading/writing at the same time for you and ensures that the data is accessible even with heavy load

- How can a lambda can access things in an s3 bucket without the s3 bucket being public
	- Assign IAM Roles to the Lambda function 
	- s3 can also have roles attached to only allow that Lambda function / any other IAM role you want 