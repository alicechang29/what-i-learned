**- Design a messaging app (think Facebook messenger)
- Backend system 
- Web frontend

- 1:1 messaging for now
- Presence (online/offline indicators)
- Selection of multiple threads
- Click into a thread - show chat history
    
## Database schema

Note: 
- be clear about the namings 
- Dont say “i dont know” 
- Go through the fields at the end to make sure you haven’t missed any (like message content)
- Clarify if i’m using SQL or NoSQL DB (mention that I’m looking at this as a relational DB at the beginning bc I haven't worked with NoSQL DB’s before) 
- People might say that NoSQL is easily scalable but this takes work 
- SQL db will meet needs for an initial product launch, can consider scaling later
- STICK WITH CONCEPTS I’M COMFY WITH, don’t give opportunity for them to push me on the topic 
    
User: 
- User id 
- Full Name
- Photo ** 
    
User and Threads (Many to Many) 
- User ID  
- Thread ID 
    

Thread (1 thread to Many messages) – can’t put user id on here bc there are multiple users in threads 
- Thread ID 
    

Message (1 message to 1 thread) 
- Message ID 
- Message Content 
- Date / Time 
- Thread ID 
- User ID 
    

  

## API 

Notes: 
- DO CHECKINS AS I GO (do i need more details or move on) 
- Learn what is pagination 
- This is old thread with 20k messages. Don’t need to return all 20k messages on the endpoint 
- Given a message id (as an anchor) and how many more beyond that do i want to load 
- This would be passed as params to the get Request 
- Want to start by most recent message by default 
- Message ID + offset 
- Pagination Token – caller of API doesn’t know what the token means (taking Message ID + offset and concatenating into string and call it “pagination token) 
	- Part of payload would be pagination token 
	- Benefits: on the creator’s responsibility (on the API itself to generate the token, all the pagination logic lives inside the API server and caller of API doesn’t need to know how it works) 
- On the caller’s responsibility: 
	- Request with no Params = 100 latest messages 
	- To get 100 more messages, just do message ID prev 100 and add the offset 
    

- GET   (don’t need to include user-id in URL bc when user is authenticated it will be implied) 
	- /threads 
	- /threads/thread-id
	- /threads/thread-id/messages 
		-  “there could be a lot of messages here and we would want to paginate it” 
	- /threads/thread-id/users 

- POST 
	- /threads 
	- /threads/thread-id
    

- PATCH (refresh the reason patch over put – can gloss over the definitions )  
	- /threads/thread-id 
    

  
## Cache 

“What are the most common requests that we get into that will always return the same answer?” 

How to keep the cache fresh?? 

  

- Frontend cache = load list of threads once and never update it again until you yourself create a new thread 
	- If user was removed from thread, user wouldn’t even know they were removed 
	- local -storage or in-memory cache 
    

- Backend cache:
	- could have cache between API and the DB 
	- Could have cache between client and API
    

**Run the system first, find out what the performance issues are** 

- If cache is introduced too early, things cached might not solve the issues 
- If there are performance issues, can propose a cache 
- Skip over cache if possible (don’t need to have it on first pass of design - can cache last 10 messages vs doing a DB call to lookup last 10 messages) 
    

  

### Client
**"Messages are coming in, how do I update the UI?"** 

- Learn Websockets 
    
- **Option 1:** Brute Force that nobody does: Force reload every 1 second 
- **Option 2:** Using websockets - client can always be listening for incoming requests 
	- Force reload if any new requests 
	- (React) The state of the app changes when new requests come in, which would result in new message components being rendered 
    
Websocket sends signal to client, it doesn’t know what changed but something changed 

Client does a refresh 

- **Option 3 (and Best):** Encode the differences into the push notifications happening over web socket 
	- (React) The state of the app changes when new requests come in, which would result in new message components being rendered 
	- In this thread, this exact message changed, so there is no need to pull everything, just update the state 

**Think of App state and UI state as 2 different concepts** 

- React is responsible for keeping app and UI state in sync 

- **Hard problem to solve is efficiently syncing up Server and Client State (read later)** 
    
- Versioning concept between client and server but not always reliable 
    
	- V11 = V10 + changes (normally, server just sends the differences of what changed between 10 and 11) 
	- If at V10 and get the diff for V13, client will need to ask server for V13 (with everything on it)

- OR client could ask for differences between V 10-13 and apply those changes to get to V13 (this is a smaller payload but harder to implement - “synchronization”) 
    

  
  

App state  ===>   UI state

                 ⇐==    User input

  
  

Brute force - 

- Signal on websocket says “something changed”
- We re-pull all app state
- React determines what needs to change in the UI state
    

  

Incremental -

- Signal on websocket says “you received this new message”
- We add the message into app state
- React determines what needs to change in the UI state
    

  
  

#### Notes about Read:Write 

- If something is read heavy, good use case for caching (news website, few writes but tons of reads) 
- In messaging, read:write is write heavy – not as much need for caching, cache profile pic 
    


# Interview Tips:

- Be clear about what I’ve worked in vs what I’ve read about 
- Don’t invite more questions with unfamiliar things 
- Review DB schema Design – i should know this 
- Review API design 
	- What are the operations that someone needs to do 
	- What are the API requests for ^^ 

- Good thing to mention pagination bc it will be large response (don’t say more) 
- Don’t get into too many details about GET/POST without confirming with interviewer 
- Review Websockets and Benefits (don’t have to pull data every second, only pull when something has changed) 

- Review trade off between payload and complexity (all changes vs differences only)**