#!/bin/bash

rm -rf deploy || exit 0;
mkdir deploy
ls -la
cd deploy

cp -r ../dist/* .

git init
git config user.name "${GIT_COMITTER_NAME}"
git config user.email "${GIT_COMITTER_EMAIL}"
ls -la
git add .
git commit -m "Deploy to gh-pages"
git push -fq "https://${GH_TOKEN}@github.com/${GH_REPO}.git" dev:master > /dev/null 2>&1
