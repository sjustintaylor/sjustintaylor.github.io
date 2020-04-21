#!/bin/bash

git reset --hard HEAD
git branch -D gh-pages
git checkout -b gh-pages

zola build

rm -r content/ themes/ .browserslistrc .editorconfig .eslintrc.js .gitignore config.toml 
mv public/* .
rm -r public

git add .
git commit -am "latest design"
git push -f origin gh-pages:master
git checkout zola-source