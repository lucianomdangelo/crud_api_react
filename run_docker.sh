docker container stop app-container
docker container rm app-container

docker build -t app-image .
docker images
docker run -d -p  3080:3080 --name app-container app-image
docker ps
