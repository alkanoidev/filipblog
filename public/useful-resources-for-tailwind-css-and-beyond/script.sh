mkdir processed
for f in ./*.jpg ./*.png ./*.jpeg ./*.webp
 do
        ffmpeg -i $f -q:v 10 processed/$f -y
done