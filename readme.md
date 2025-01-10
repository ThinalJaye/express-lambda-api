# Express Lambda API

A serverless Express.js application deployed on AWS Lambda using automated deployment through AWS CodeBuild.

## 🚀 Project Overview

This project demonstrates how to deploy an Express.js API as an AWS Lambda function, utilizing AWS CodeBuild for automated deployment. The application is packaged and deployed using a buildspec configuration.

## 📋 Prerequisites

- Node.js 20.x
- AWS CLI configured with appropriate permissions
- AWS Lambda access
- AWS CodeBuild access

## 🛠️ Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd express-lambda-api
```

2. Install dependencies:
```bash
npm install
```

## 📦 Deployment

The project uses AWS CodeBuild for automated deployment. The build process is defined in `buildspec.yml` and includes:

1. Installing Node.js dependencies
2. Creating a deployment package (lambda-package.zip)
3. Updating the Lambda function code
4. Configuring the Lambda function handler

### Manual Deployment

To deploy manually using the AWS CLI:

```bash
zip -r lambda-package.zip ./ -x buildspec.yml
aws lambda update-function-code --function-name lambda_s3_manual_deployment_function_thinal --zip-file fileb://lambda-package.zip
```

## 🏗️ Project Structure

```
express-lambda-api/
├── lambda.js           # Lambda handler
├── buildspec.yml       # AWS CodeBuild specification
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## ⚙️ Configuration

The buildspec.yml configuration uses:
- Node.js 20 runtime
- AWS Lambda function update commands
- Artifact generation for deployment

## 📝 License

MIT

## 👤 Author

Thinal Jayamanna