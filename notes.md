# deploy
```sh
npm run build
touch dist/CORS 
echo "*" > dist/CORS 
surge dist raspy-bucket.surge.sh
```
