#!/bin/sh

yarn install --production --pure-lockfile
yarn run lint
yarn build
jekyll build --config "_config.yml,_config.prod.yml"
