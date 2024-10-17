#!/bin/bash

cd client
npm run build

cd ..

cp -r client/dist server/client

echo "Success move from client/dist to server/client"
