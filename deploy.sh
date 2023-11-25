#!/bin/bash

# checkout to master branch
git checkout master
git pull

# Change to the app directory
cd app

# Run npm build
npm run build

# add relative path to assets
sed -i 's/src="\/assets/src=".\/assets/g' dist/index.html
sed -i 's/href="\/assets/href=".\/assets/g' dist/index.html

# Get the JavaScript file name in the dist directory
js_file=$(find dist -type f -name "index-*.js")

# Extract the JavaScript file name
js_file_name=$(basename "$js_file")

sed -i 's/\/icons/.\/backend-maestro\/icons/g' "$js_file"

# Change back to the parent directory
cd ..

# Perform the git subtree push
git add .
timestamp=$(date +"%Y-%m-%d %T")
git commit -m "Deploy to gh-pages at $timestamp"
git push -f
git subtree push --prefix app/dist origin gh-pages
