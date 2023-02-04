@echo off
FOR /R ".\" %%G in ("*") DO (
 echo %%G
 git add %%G )
git commit -m "files added"
git push