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
{
  "/order-service": {
    "depth": 6,
    "parentFolder": null,
    "path": "/order-service",
    "name": "order-service",
    "folders": [
      "integration-test",
      "node_modules",
      "src"
    ],
    "files": [
      ".gitignore",
      "README.md",
      "env",
      "env.example",
      "package-lock.json",
      "package.json"
    ]
  },
  "/order-service/integration-test": {
    "depth": 7,
    "parentFolder": "/order-service",
    "path": "/order-service/integration-test",
    "name": "integration-test",
    "folders": [],
    "files": [
      "index.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/order-service/src": {
    "depth": 7,
    "parentFolder": "/order-service",
    "path": "/order-service/src",
    "name": "src",
    "folders": [
      "api",
      "config",
      "models",
      "repository",
      "server",
      "services"
    ],
    "files": [
      "index.js"
    ]
  },
  "/order-service/src/api": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/api",
    "name": "api",
    "folders": [],
    "files": [
      "order.js",
      "order.spec.js"
    ]
  },
  "/order-service/src/config": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/config",
    "name": "config",
    "folders": [
      "db",
      "di"
    ],
    "files": [
      "config.js",
      "index.di.spec.js",
      "index.js"
    ]
  },
  "/order-service/src/models": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/models",
    "name": "models",
    "folders": [],
    "files": [
      "index.js",
      "index.spec.js",
      "order.model.js",
      "user.model.js"
    ]
  },
  "/order-service/src/repository": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/repository",
    "name": "repository",
    "folders": [],
    "files": [
      "repository.js",
      "repository.spec.js"
    ]
  },
  "/order-service/src/server": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/server",
    "name": "server",
    "folders": [],
    "files": [
      "server.js",
      "server.spec.js"
    ],
    "logged": true,
    "parsed": true,
    "marked": true
  },
  "/order-service/src/services": {
    "depth": 8,
    "parentFolder": "/order-service/src",
    "path": "/order-service/src/services",
    "name": "services",
    "folders": [],
    "files": [
      "index.js",
      "payment.service.js"
    ]
  },
  "/order-service/src/config/db": {
    "depth": 9,
    "parentFolder": "/order-service/src/config",
    "path": "/order-service/src/config/db",
    "name": "db",
    "folders": [],
    "files": [
      "index.js",
      "mongo.js",
      "mongo.spec.js"
    ]
  },
  "/order-service/src/config/di": {
    "depth": 9,
    "parentFolder": "/order-service/src/config",
    "path": "/order-service/src/config/di",
    "name": "di",
    "folders": [],
    "files": [
      "di.js",
      "di.proto.js",
      "index.js"
    ]
  }
}
