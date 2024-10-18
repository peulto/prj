#!/bin/bash

rm -r dist
cp -r server/dist dist

cd dist
npm init -y

npm install express

# node ../scripts/finish-build
