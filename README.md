# NestJS Backend

## Development

```shell
npm run start:local
```

## Deployment

For the github action pipeline, make sure the required secrets and initialized.

- AWS_ACCESS_KEY_ID
- AWS_REGION
- AWS_SECRET_ACCESS_KEY
- ECR_REPOSITORY_NAME
- ECS_CLUSTER
- ECS_SERVICE
- SERVICE_DEFINITION

### Publish Image (Local):

Retrieve an authentication token and authenticate your Docker client to your registry.
Use the AWS CLI:

```shell
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 255891616495.dkr.ecr.us-east-1.amazonaws.com
```

Build your Docker image using the following command. For information on building a Docker file from scratch. You can skip this step if your image has already been built:

```shell
docker build -t nest-backend-dev .
```

After the build is completed, tag your image so you can push the image to this repository:

```shell
docker tag nest-backend-dev:latest 255891616495.dkr.ecr.us-east-1.amazonaws.com/repository-backend-dev:latest
```

Run the following command to push this image to your newly created AWS repository:

```shell
docker push 255891616495.dkr.ecr.us-east-1.amazonaws.com/repository-backend-dev:latest
```

### Troubleshoot CloudWatch LogGroup ResourceInitialization

```shell
aws ecs describe-task-definition --task-definition backend-dev:1 | jq -r .taskDefinition.containerDefinitions[].logConfiguration
```

```shell
aws logs create-log-group --log-group-name /ecs/
```
