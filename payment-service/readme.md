# Payment Microservice

Major funcitonality is to process the payment and return the payment status. 
  - Process payment
  

## Getting Started

Order service calls payment service for processing of payments

### Project Structure

Here is the payment-service directory structure. Please refer directoryList.md file for details.  
|-- microservice_client_demo  
    |-- .eslintrc.json  
    |-- .gitignore  
    |-- env  
    |-- env.example  
    |-- package-lock.json  
    |-- package.json  
    |-- coverage
    |   |-- coverage.json  
    |   |-- lcov.info  
    |   |-- lcov-report  
    |       |-- base.css  
    |       |-- index.html  
    |       |-- prettify.css  
    |       |-- prettify.js  
    |       |-- sort-arrow-sprite.png  
    |       |-- sorter.js  
    |       |-- api  
    |       |   |-- index.html  
    |       |   |-- payment.js.html  
    |       |   |-- payment.spec.js.html  
    |       |-- config  
    |       |   |-- config.js.html  
    |       |   |-- index.di.spec.js.html  
    |       |   |-- index.html  
    |       |   |-- index.js.html  
    |       |   |-- db  
    |       |   |   |-- index.html  
    |       |   |   |-- index.js.html  
    |       |   |   |-- mongo.js.html  
    |       |   |   |-- mongo.spec.js.html  
    |       |   |-- di  
    |       |   |   |-- di.js.html  
    |       |   |   |-- index.html  
    |       |   |   |-- index.js.html  
    |       |   |-- ssl  
    |       |       |-- index.html  
    |       |       |-- index.js.html  
    |       |-- models  
    |       |   |-- index.html  
    |       |   |-- index.js.html  
    |       |   |-- index.spec.js.html  
    |       |   |-- payment.model.js.html  
    |       |-- repository  
    |       |   |-- index.html  
    |       |   |-- repository.js.html  
    |       |   |-- repository.spec.js.html  
    |       |-- server  
    |           |-- index.html  
    |           |-- server.js.html  
    |           |-- server.spec.js.html  
    |-- integration-test  
    |   |-- index.js  
    |-- src  
        |-- index.js  
        |-- api  
        |   |-- payment.js  
        |   |-- payment.spec.js  
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
        |   |-- payment.model.js  
        |-- repository  
        |   |-- repository.js  
        |   |-- repository.spec.js  
        |-- server  
            |-- server.js  
            |-- server.spec.js  

### Installation
Below are the steps to start the server.  
  - git clone: git clone URL  
  - cd payment-service  
  - npm install  
  - npm run start  

### Scripts 
  - test  : Run unit test cases  
  - start : Start server  
  - lint  : To check for linting.  
  - node-debug : To run in debug mode.  
  - coverage : Check the code coverage for test cases.  
  - int-test : To run integration test cases.  
