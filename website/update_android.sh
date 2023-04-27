./build.sh
hugo --minify -b /android_asset/html/
cd ../
rm -r app/src/main/assets/html/*
mv website/public/* app/src/main/assets/html/