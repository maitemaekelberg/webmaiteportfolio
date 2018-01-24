#!/bin/bash

USER=$1
HOST=$2

function build {
    npm install && gulp css
}

function deploy {
    rsync -azP --delete-before --delete-excluded --exclude=deploy.sh --exclude=node_modules/ --exclude=style/ --exclude=.git/ --exclude=.gitignore --exclude=.idea --exclude=node_modules/ --exclude=gulp/ --exclude=gulpfile.js --exclude=package.json --exclude=package-lock.json --exclude=README.md . $USER@$HOST:htdocs/maitemaekelberg.be/public_html
}

build
deploy