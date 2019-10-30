# Introduction

## [FR] Introduction

Ceci est le code source de l'interface utilisateur de LexImpact.

LexImpact permet aux administrations, aux parlementaires et à la société civile de simuler l'impact _ex ante_ des réformes au système socio-fiscal.
* [Appels à candidatures](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/leximpact.html)
* [Fiche produit](https://beta.gouv.fr/startups/leximpact.html)
* [LexImpact Beta](https://leximpact.beta.gouv.fr)


## [EN] Introduction

This is the source code of LexImpact user interface.

LexImpact allows civil servants, policy makers and citizens to simulate the _ex ante_ impact of a reform to a country's tax-benefit system.
* [Call for candidates (FR)](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/leximpact.html)
* [Elevator pitch (FR)](https://beta.gouv.fr/startups/leximpact.html)
* [LexImpact Beta](https://leximpact.beta.gouv.fr)


# How to use

```
npm install
npm run dev
```

# Mettre à jour les Snapshots Jest (Tests)

```
Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.
```

[Documentation Officielle](https://jestjs.io/docs/en/snapshot-testing)

```bash
./node_modules/.bin/jest --updateSnapshots
```

# Icons & Emoji

- [Twitter Emoji](https://iconify.design/icon-sets/twemoji/)
- [MaterialUI Icons](https://material.io/resources/icons)

# Screenshot

<img width="1280" alt="Capture d’écran 2019-04-25 à 03 08 30" src="https://user-images.githubusercontent.com/329236/56703045-6517c780-6707-11e9-9947-9f4e3d72aac2.png">

# Documentation

- [MaterialUI v3.9.9 Documentation](https://v3.material-ui.com/getting-started/installation/)
