#!/bin/bash
echo "F*ck your staged changes"
git reset --hard HEAD
echo "F*ck your gh-pages branch too"
git branch -D gh-pages
echo "Ah, a shiny new branch"
git checkout -b gh-pages

echo "It canna go any faster captain"
zola build

echo "Time to nuke the lizards"
rm -r content/ themes/ .browserslistrc .editorconfig .eslintrc.js .gitignore config.toml 
echo "Relocating the metemetric chisel to the outer edge of the napalm canceller"
mv public/* .
rm -r public

git add .
git commit -am "latest design"
echo "Hope you like your last commit, cause it's about to go live"
git push -f origin gh-pages:master
echo "Nothing out here station, returning to base"
git checkout zola-source
echo "Time for a coffee"