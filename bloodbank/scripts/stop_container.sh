#!/bin/sh
cd /home/ubuntu/server

$(aws ecr get-login --no-include-email --region ca-central-1)
docker-compose down