#!/bin/bash

cd client
npm run build

cd ..

cp -r client/dist server/dist/client
mv vercel.example.json server/dist/vercel.json

echo "Success move from client/dist to server/dist/client"
