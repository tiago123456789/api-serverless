REQUIREMENTS:
==============

- Serverless framework installed.
- Node.js installed.
- Npm installed.
- Docker and docker-compose installed.

INSTRUCTIONS:
=============

- Access project root and execute command: npm install
- Create directory configEnv if not exist.
- Within configEnv directory create file following name pattern env.name_state.json. Example: env.dev.json or env.prd.json
    - The file must contained values following:
    ```
        {
            "NODE_ENV": "dev",
            "URL_DATABASE": ""
        }
    ``` 

- Running project in your local machine execute command: docker-composer up -d && sudo npm run start:dev
- To make deploy execute command: sudo npm run deploy
