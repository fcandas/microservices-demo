# microservices-demo-test

WeaveSock test 
![cypress version](https://img.shields.io/badge/cypress-10.0.3-brightgreen)


Requirements

- Any computer: Mac, Windows, Linux
- [Node 12.13.1+ (LTS)](https://nodejs.org/), check [GH workflow file](.github/workflows/min-node-version.yml)
- [git](https://git-scm.com)



In order to get the code and install dependencies

```bash
git clone https://github.com/fcandas/microservices-demo-test.git
cd microservices-demo-test
npm install
```

To Run On your computer


```bash
You should have docker and docker compose.
```
```bash

Inside the project directory

To run docker 

docker-compose -f deploy/docker-compose/docker-compose.yml up -d

To run cypress

npx cypress open

```

To Run headless
```bash
Inside the project directory
npx cypress run
```


```bash
To check all the scenarios, please check /TestDocs/Test Scenarios.xlsx
To check defect details, please check /TestDocs/Defect list.xlsx
```
