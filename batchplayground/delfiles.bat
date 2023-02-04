@echo off
FOR /R ".\" %%G in ("*.txt") DO (
 del %%G )