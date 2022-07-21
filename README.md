# Logger template
Template for any new logger app you want to make.

## Setup:
1. Clone this repository into a directory on your machine
2. Set up a new github repository and initialize it 
3. Go to Settings > Github Pages > Create a new Github pages environment (Ensure it's saved to root) of your github repository

<hr>

## Usage:
### Creating a new post
1. Write a blog post (.txt) file in /WriteBlogHere/, you can include both markdown and html.
2. Run /metaScripts/Conv2HTML.py - This adds the file to your dataJS and you can preview before committing by opening index.html
3. Alternatively, you can run the batch file if you're on cmd which will also push the changes to your repository 

### Editing a post
1. Run /metaScripts/edit.py - This shows you the raw HTML to edit (ensuring you can fix even the smallest discrepancies)
2. Enter Post Number 
3. Paste New HTML 
4. Ctrl+Z and Confirm to Save 

<hr>

## Automate a post:
When I use my logger, I automate each of my posts with a central batch file
```
rem the following is a copy of the batch file I use to automate posts from cli

@echo off
pushd c:\path\to\LoggerTemplate\WriteBlogHere\
kelp %1.txt rem I mention title while creating new file^
popd
pushd c:\path\to\LoggerTemplate\metaScripts\ 
python3.exe conv2html.py
popd 
cd c:\path\to\LoggerTemplate\ 
echo Run batch File(pushNewPost) to Confirm Post or Update if new file was created.
```

^[Kelp](https://github.com/vishalvsv/kelp) is a light weight cli editor I use, you can use any editor you want.
