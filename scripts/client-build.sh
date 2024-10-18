#!/bin/bash

cd client
npm run build

cd ..

rm -r server/dist/client
cp -r client/dist server/dist/client

cp vercel.json server/dist/vercel.json

echo "Success move from client/dist to server/dist/client"
