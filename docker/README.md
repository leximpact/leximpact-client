# Utilisation de LexImpact Client avec Docker

Cette documentation ne concerne que l'exécution du client, en utilisant le server de production. Pour l'usage avec leximpact-server local, voir leximpact-server/docker/DOCKER.md.

## Pre-requis

Cloner le projet client dans un dossier et se rendre dans leximpact-client.
```sh
git clone https://github.com/leximpact/leximpact-client.git
cd leximpact-client
```

Préparer la configuration :
```sh
cp docker/docker-remote.env .env
```
Les paramètres par défaut fonctionnent, voir le README principale pour l'explication des paramètres.

## Lancement

```sh
docker-compose up
```
Ceci va exécuter :
 - leximpact-client [http://localhost:9080](http://localhost:9080)

Arrêter avec ctrl+c

## Forcer le build
```sh
docker-compose up --build
```

## Nettoyage
Efface les conteneurs, les volumes et les images :
```sh
docker-compose down -v
docker image rm leximpact-client_leximpact_client_only
```