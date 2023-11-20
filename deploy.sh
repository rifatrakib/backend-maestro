#!/bin/bash
cd app&&npm run build

cd ..
sed -i 's/src="\/assets/src=".\/assets/g' app/dist/index.html
sed -i 's/href="\/assets/href=".\/assets/g' app/dist/index.html
sed -i 's/\/icons/.\/backend-maestro\/icons/g' app/dist/assets/index-ac26db60.js
sed -i 's/\/socials/.\/backend-maestro\/socials/g' app/dist/assets/index-ac26db60.js

git subtree push --prefix app/dist origin gh-pages
