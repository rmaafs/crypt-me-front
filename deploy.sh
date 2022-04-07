#Delete any change
git reset --hard
#Change branch with the page builded
git checkout master
#Bajamos los cambios
git pull
#Install dependencies
npm i
#Build project
npm run build
#Move static page
cp -a ./build/* /var/www/crypt/
#Remove build folder
rm -r ./build