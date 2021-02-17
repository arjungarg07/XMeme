#!/bin/bash


cd server/src/

if grep -q RegExp "api/routes/memes.js"; then
    sed '11,17d' api/routes/memes.js >> api/routes/memes1.js
    mv  api/routes/memes1.js api/routes/memes.js
fi

# Setup DB or any other environment variables you want to setup.


npm install

npm start
