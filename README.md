# Create AWS Project

## Create user for console `serverless` service
- Log in to the `AWS Console` https://console.aws.amazon.com/
- Go to **IAM->Users** https://console.aws.amazon.com/iam/home?region=eu-west-1#/users
- Add user enabling both options: 
  - `Programmatic access`
- Click `Next: Permissions`
- Click `Attach existing policies directly`
- Add `AdministratorAccess` policy (since this user may add policies programmatically)
- Click `Next: Tags` you don't need to add them (this is optional)
- Click `Next: Review`
- If everything is setup fine click `Create user`
- IMPORTANT: Download `.csv` file and secure it, make sure you don't lose your `secret key`

## Install `serverless` service package (Node)
- Make sure you have latest `Node` installed
- Install `serverless` service by typing:
```bash
sudo npm install -g serverless
```

## Set up user credentials
Type following command, replacing `ACCESS_KEY` and `SECRET_ACCESS_KEY` with values from downloaded `.csv` file
```bash
sls config credentials --provider aws --key ACCESS_KEY -- secret SECRET_ACCESS_KEY 
```
If you see the following, add `--overwrite` flag to the command.
```bash 
Failed! ~/.aws/credentials already has a "default" profile
```

## Create a node-based project
```bash 
sls create --template aws-nodejs
```

## Deploy project
```bash 
sls deploy
```

## Troubleshoot re-deploy stack

- Go to `S3` service and remove the deploy bucket (copy its name first, because AWS will force you to put its name before delete)
- Go to `CloudFormation` service and delete the stack
- Re-deploy the stack using `sls deploy` in the stack directory 
