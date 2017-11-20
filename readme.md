## Contribution Guidelines

First, go to the local directory where you wish the project to live.

Then, clone the project: 
git clone https://github.com/GetHub91/Petivity

Next, checkout a new branch doing `git checkout -b my-branch`, replacing 'my-branch' with whatever you desire your branch name to be.

Push your changes to github using `git push --set-upstream origin my-branch`.


Workflow
---------

Make sure you're on your branch; this keeps the master branch intact, a good insurance policy.

Make your code changes.

Check your staging area using 'git status'

Add your changes using `git add file.type` or 'git rm file.type'. 
You can add your changes to the entire directory by doing 'git add .'

Commit changes with a message for what you've done: 
git commit -m "enter message here". 
Alternately, use 'git commit' and then write your message and save the file.

Go to the repository, open a pull request, and let teammates comment and/or approve your changes.

After you've merged your changes, checkout master: git checkout master

Update master: git pull

Checkout your branch: 'git checkout my-branch'  

To update your branch with master: 'git merge master' or 'git rebase master'

Finally, git push

Troubleshooting:
----------------

If you ever get the message, "fatal: Not a git repository (or any of the parent directories): .git", then try adding a remote (repository):
git add remote origin https://github.com/GetHub91/Petivity

If you ever get the message, "fatal: pathspec 'remote' did not match any files", check if you already have a remote: 
git remote -v

If you ever want to get rid of a remote first check your remotes and try:
git remote rm [remote]
(usually, you would replace [remote] with origin, but not necessarily)

If you try to 'git push' and everything is up to date but your'e sure you've made changes, then you might have not committed your code.
