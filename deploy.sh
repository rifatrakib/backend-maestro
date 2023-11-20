#!/bin/bash
cd app&&npm run build

cd ..
sed -i 's/src="\/assets/src=".\/assets/g' app/dist/index.html
sed -i 's/href="\/assets/href=".\/assets/g' app/dist/index.html

git subtree push --prefix app/dist origin gh-pages
