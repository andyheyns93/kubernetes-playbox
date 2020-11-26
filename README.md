# my-kubernetes-app

`kubectl apply -f all.deployment.yml`

This will deploy a frontend app (anuglar-app) on 'localhost:4200' which will do a HTTP call to the backend app (dotnet-api) on 'localhost:8080/weatherforecast'

You can also seperately deploy these 2 deployments in kubernetes:

* `kubectl apply -f backend.deployment.yml`
* `kubectl apply -f frontend.deployment.yml`

--------------------------------------------

# my-nginx-app

1. LOCAL VOLUME

`kubectl apply -f local-nginx.deployment.yml`

This will deploy an NGINX with a shared volume (C:\temp) with an ubuntu image as a sidecar.

`kubectl exec -it [PODNAME] -c ubuntu -- /bin/bash`

in the bash type following command: `echo "Andy WAS HERE" > ./data/index.html`

This file will now be in the local directory C:\temp

Navigate to: 'localhost:80' to show the contents of the file (nginx will print the file)

2. AZURE VOLUME

`kubectl apply -f azure-nginx.deployment.yml`

This will deploy an NGINX with a shared volume (Azure Storage Account Share) with an ubuntu image as a sidecar.

The ubuntu image will automatically create an `index.html` file 

Navigate to: 'localhost:80' to show the contents of the file (nginx will print the file)

