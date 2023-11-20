#!/bin/bash
cd app&&npm build
git subtree push --prefix app/dist origin gh-pages
