[---KOMPOSE---]

kompose convert
kompose convert --out ./my-kubernetes-app.yml -> WILL CREATE FILE
kompose convert --out ./output -> FOLDER MUST EXISTS!


[---SKAFFOLD---]
skaffold init --compose-file docker-compose.yml
skaffold dev -f skaffold.yaml

NOTE: imagePullPolicy: Always -> WON'T spin up DEV environment (can't be pulled)

