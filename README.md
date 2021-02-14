# Welcome to XMEME

## Tech Stack Used:
+ Node.js
+ MySQL (RDS)
+ Sequelize (Node.js ORM)
+ React (Javascript UI Library)
+ TailwindCss ( Lightweight Css Framework )

#### Live FrontendURL : https://cwod-xmeme-arjungarg.herokuapp.com/
#### Live ServerUrl : https://cwod-xmeme-server.herokuapp.com
# XMeme Server Architecture

## Modularity
```bash
└── src
    ├── api
    │   ├── routes # Express route controllers for all the endpoints of the app
    │   │   ├── index.js
    │   │   └── memes.js
    │   └── validation # Validation of incoming data
    ├── config 
    │   └── index.js
    ├── index.js  # App entry point
    ├── jobs # Jobs definitions for softDelete
    │   └── softDeleteMeme.js
    ├── loaders # Split the startup process into modules
    │   ├── express.js
    │   └── index.js
    ├── models # Database models
    │   ├── index.js
    │   └── meme.js
    ├── services # All the business logic is here
    │   └── Memes.js
    └── swaggerUI.json # Swagger-UI 
```

## Features of Backend
1.  Implemented **SoftDelete** by using `active: 0/1` path as flag is used to mark data as unusable, without erasing the data itself from the database.
2. Wrote a **Cron Job** which will run every Sunday of the week to delete the memes having active as 0
3. **Validation** of URL using **Regex**.
4. Fetching memes reverse chronological order i.e. last created one first.
5. Validation of empty (name/caption/url) 
6. Code with good **Modularity**
7. Incorrect requests returned by **appropriate 4xx HTTP status** codes as per HTTP status code standards
8. Documented APIs using Swagger and  exposed on port 8081 accessible through  `http://localhost:8081/swagger-ui/`
9. Implemented APIs based on **REST Architecture**
 
## Exposed Endpoints

#### BaseUrl: http://localhost:8081

1. `GET` `/memes` : Fetch latest 100 Memes from Collection
2. `POST`  `/memes` : Add new Meme to a Collection
3. `GET` `/memes/:id` : Get a Meme of corresponding id from Collection
4. `DELETE` `/memes/:id` : Delete a Meme from Collection
6. `PATCH` `/memes/:id` : Update an existing Meme in Collection

# XMeme Client

## Features of Client

1. Designed a lightweight, **Minimalistic** UI to provide a better user experience.
2. User can **Edit** the memes present in the collection.
3. User can **delete** the memes present in the collection.
4. Provided **Scroll to Top** button in case User go way down.
5. User can see at what **time ago** the meme was posted.


#### What more I will be implementing after CWoD
1. Server Side Pagination or Infinite Scrolling
2. We can have a path named weights in our Memes Table so that we can manually control them by increasing the weights of some memes and show them above others.
3. Writing my own unit and load tests using chai and mocha.