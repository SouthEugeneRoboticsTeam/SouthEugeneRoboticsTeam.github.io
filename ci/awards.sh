#!/bin/bash

python ci/awards.py > _data/awards.yml

git diff
git diff-index --quiet HEAD --

if [ $? -eq 1 ]; then
  git config --global user.name "sertbot"
  git config --global user.email "social@sert2521.org"
  git commit -a -m "Update awards from The Blue Alliance"
fi
