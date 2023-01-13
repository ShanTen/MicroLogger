@echo off
pushd .\metaScripts\
python Conv2HTML.py
popd
git add .\WriteBlogHere\*
git commit -m "Posted Something New!"
git add .\metaScripts\memory.json
git add .\js\data.js
git commit -m "Updated memory"
git push -u origin 'master' 
rem this is a mildly stupid thing I did, I named my master branch 'master' instead of master 