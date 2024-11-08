
# Deployment steps

1. create a vercel.json file and paste the following
```json
{
    "version": 2,
    "builds": [
        { 
            "src": "/index.js", "use": "@vercel/node" 
        }
    ],
    "routes": [
        {   "src": "/(.*)", "dest": "/", 
            "methods":["GET","POST","PUT","PATCH","DELETE","OPTIONS"] 
        }
    ]
 }
```
1. type `vercel` in CLI (if this doesn't work type this `Set-ExecutionPolicy RemoteSigned -Scope Process`)
1. login (if not logged in before)
1. Choose your project
1. Setup and deploy - yes
1. select scope (account) - khalid's projects (for me)
1. Link to existing project - no (for me)
1. Select your project name (By default it will be folder's name)
1. Choose directory - ./ 
1. configure the environment variables [go to vercel.com and login to your account and then go to the project(that you have recently created) settings]
1. run ``` vercel --prod ```