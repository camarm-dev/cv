docker context use production

docker build -f Dockerfile -t cv .

docker stop cv
docker rm cv

docker run -d --name cv.camarm.fr -p 3001:3000 --restart unless-stopped cv

open cv.camarm.fr
