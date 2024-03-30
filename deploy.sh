docker context use production

echo "Building container..."
docker build -f Dockerfile -t cv . > /dev/null

echo "Deploying container..."
docker stop cv.camarm.fr
docker rm cv.camarm.fr

docker run -d --name cv.camarm.fr -p 3001:3000 --restart unless-stopped cv

echo "Deployed. Opening cv.camarm.fr."
open https://cv.camarm.fr
