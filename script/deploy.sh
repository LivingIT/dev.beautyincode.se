#!/bin/sh

pwd
yarn run deploy
yarn run jekyll:build
cd _site
git add --all
git commit -m "Deploy web site at $(date -u)"
git push
