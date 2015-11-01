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
git config --list
echo -e "---\nbranches:\n  only:\n    - dev" > .travis.yml
git add .
git commit -m "Deploy to gh-pages"
git log --oneline
git branch -a
git push -fq "https://${GH_TOKEN}@github.com/${GH_REPO}.git" origin master > /dev/null 2>&1
