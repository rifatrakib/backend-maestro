#!/bin/bash
cd app&&npm run build
git subtree push --prefix app/dist origin gh-pages
