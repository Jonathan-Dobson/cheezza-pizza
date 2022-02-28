#!/bin/bash

convert $(ls *.jpg *.png) +append "stitched/output.jpg"

# for p in $(ls *.jpg); do
# echo "$p";
# convert $p "stitched/output.jpg"
# done


# while read p; do 
# echo "$p"; 
# cwebp -q 1 $p -o "webp/1miim/"$p".webp"
# done < images.txt 

# while read p; do 
# echo "$p"; 
# convert $p -resize 50x50 "tiny/"$p
# done < images.txt 

# for p in $(ls *.jpg *.png); do
# echo "$p";
# cwebp -q 40 $p -o "stitched/"$p".webp"
# done