# Pulling
echo "Pulling updates.." && git pull
# Building
echo "Building..." &&
docker compose up -d --build
# Success
echo "Successfull building"