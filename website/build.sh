mkdir -p content/posts static
cp -r based.cooking/content/* content/posts
cp -r based.cooking/static/pix static/pix
rm -r content/posts/_index.md
hugo --minify