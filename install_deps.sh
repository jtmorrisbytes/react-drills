#!/bin/bash

#this script assumes that your trying to install react drills
#and that you have already cloned this repository
#and that your current directory is react-drills
for dir in $(ls -d */); do cd $dir; npm install; cd ..; done;

