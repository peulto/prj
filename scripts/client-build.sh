#!/bin/bash

cd client
npm run build

cd ..

cp -r client/dist server/dist/client

echo "Success move from client/dist to server/dist/client"
