## Overview 

AWS Lambda functions are functions that can be executed without managing own servers.

how a lambda can access things in an s3 bucket without the s3 bucket being public

## How it works 

Data is stored within the **event** object of the lambda function. 

The **event** object is a json file. 
```json
{
"length": "10", 
"width": "5"
}
```

1. Write the function (get data out of the event object)
	1. Note: since event is json, need to handle the value types 
```python 
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # TODO implement
    length = int(event['length'])
    width = int(event['width'])
    
    area = calculate_area(length, width)
    print(f"The area is {area}")
    
    logger.info(f"CloudWatch logs group: {context.log_group_name}")
    
    data = {"area": area} 
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }

def calculate_area(length,width):
    return length * width 
```
2. Hit "Deploy" to update the function 
3. Test it 


### Using S3 Trigger to Invoke Lambda Fn 

Goal: Given S3 link to a word doc, convert it to PDF with a lambda function. 



