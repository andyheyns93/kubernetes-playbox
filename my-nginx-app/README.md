# Sources

* https://dzone.com/articles/how-to-dockerize-angular-app
* https://docs.docker.com/engine/examples/dotnetcore/
* https://dzone.com/articles/multi-environment-angular-with-dynamic-backend-uri
* https://hackernoon.com/applying-angular-runtime-configurations-in-dockerized-environments-kr3a33pr
* https://github.com/GoogleCloudPlatform/nginx-docker/blob/master/1/README.md
* https://kubernetes.github.io/ingress-nginx/deploy/#detect-installed-version_1
* https://docs.microsoft.com/en-us/azure/aks/azure-files-volume

# Docker

Docker is the container technology that allows you to containerize your applications.
Docker is the core of using other technologies.

# Docker Compose

Docker Compose allows configuring and starting multiple Docker containers.
Docker Compose is mostly used as a helper when you want to start multiple Docker containers and don't want to start each one separately using docker run ....
Docker Compose is used for starting containers on the same host.
Docker Compose is used instead of all optional parameters when building and running a single docker container.

# Docker Swarm

Docker Swarm is for running and connecting containers on multiple hosts.
Docker Swarm is a container cluster management and orchestration tool.
It manages containers running on multiple hosts and does things like scaling, starting a new container when one crashes, networking containers ...
Docker Swarm is Docker in production. It is the native Docker orchestration tool that is embedded in the Docker Engine.
The Docker Swarm file named stack file is very similar to a Docker Compose file.

# Kubernetes

Kubernetes is a container orchestration tool developed by Google.
Kubernetes' goal is very similar to that for Docker Swarm.

