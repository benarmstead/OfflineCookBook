./build.sh
hugo --minify -b /android_asset/html/
cd ../
rm -r android/app/src/main/assets/html/*
mv website/public/* android/app/src/main/assets/html/