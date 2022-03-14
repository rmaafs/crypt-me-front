#Delete any change
git reset --hard
#Change branch with the page builded
git checkout gb-pages
#Bajamos los cambios
git pull
#Move static page
cp -a ./* /var/www/crypt/