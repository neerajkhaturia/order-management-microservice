# Order Management Microservice

The service manages the state of orders. Major funcitonality includes 
  - Create Order
  - Cancel Order
  - Check Order status

                                                Order Created
                                                      | 
                                      --------------- | ---------------
                                      |                                 |
                                  Order Confirmed -------------- Order Cancelled
                                      | 
                                  Order Delivered

## Getting Started

For payment processing, payment-service has been used.

### Project Structure

Here is the order-service directory structure. Please refer directoryList.md file for details.  
|-- microservice_client_demo  
    |-- .gitignore  
    |-- README.md  
    |-- directoryList.md  
    |-- env  
    |-- env.example  
    |-- package-lock.json  
    |-- package.json  
    |-- test.md  
    |-- integration-test  
    |   |-- index.js  
    |-- src  
        |-- index.js  
        |-- api  
        |   |-- order.js  
        |   |-- order.spec.js  
        |-- config  
        |   |-- config.js  
        |   |-- index.di.spec.js  
        |   |-- index.js  
        |   |-- db  
        |   |   |-- index.js  
        |   |   |-- mongo.js  
        |   |   |-- mongo.spec.js  
        |   |-- di  
        |       |-- di.js  
        |       |-- di.proto.js  
        |       |-- index.js  
        |-- models  
        |   |-- index.js  
        |   |-- index.spec.js  
        |   |-- order.model.js  
        |   |-- user.model.js  
        |-- repository  
        |   |-- repository.js  
        |   |-- repository.spec.js  
        |-- server  
        |   |-- server.js  
        |   |-- server.spec.js  
        |-- services  
            |-- index.js  
            |-- payment.service.js  

### Installation
Below are the steps to start the server.  
  - git clone: git clone URL  
  - cd order-service  
  - npm install  
  - npm run start  

### Scripts 
  - test  : Run unit test cases  
  - start : Start server  
  - lint  : To check for linting.  
  - node-debug : To run in debug mode.  
  - coverage : Check the code coverage for test cases.  
  - int-test : To run integration test cases.  
