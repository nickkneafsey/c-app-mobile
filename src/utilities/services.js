const services = [
  { key: 'EC2', value: 'Amazon EC2', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonEC2.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonEC2_LARGE.png' },
  { key: 'S3', value: 'Amazon S3', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Storage_AmazonS3.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Storage_AmazonS3_LARGE.png' },
  { key: 'RDS', value: 'Amazon RDS', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonRDS.png', largeImageUrl: '' },
  { key: 'SQS', value: 'Amazon SQS', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSQS.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSQS_LARGE.png' },
  { key: 'DYNAMO_DB', value: 'Amazon DynamoDB', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonDynamoDB.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonDynamoDB_LARGE.png' },
  { key: 'LAMBDA', value: 'Amazon Lambda', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSLambda.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSLambda_LARGE.png' },
  { key: 'VPC', value: 'Amazon VPC', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonVPC.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonVPC_LARGE.png' },
  { key: 'CLOUDFORMATION', value: 'Amazon CloudFormation', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/ManagementTools_AWSCloudFormation.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/ManagementTools_AWSCloudFormation_LARGE.png' },
  { key: 'CLOUDFRONT', value: 'Amazon CloudFront', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonCloudFront.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonCloudFront_LARGE.png' },
  { key: 'ROUTE_53', value: 'Amazon Route 53', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonRoute53.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonRoute53_LARGE.png' },
  { key: 'GLACIER', value: 'Amazon Glacier', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Storage_AmazonGlacier.png', largeImageUrl: '' },
  { key: 'KINESIS', value: 'Amazon Kinesis', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Analytics_AmazonKinesis.png', largeImageUrl: '' },
  { key: 'STORAGE_GATEWAY', value: 'Amazon Storage Gateway', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Storage_AWSStorageGateway.png', largeImageUrl: '' },
  { key: 'ECS', value: 'Amazon ECS', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonECS.png', largeImageUrl: '' },
  { key: 'ELASTICACHE', value: 'Amazon ElastiCache', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonElasticCache.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonElasticCache_LARGE.png' },
  { key: 'ELASTIC_BEANSTALK', value: 'Amazon Elastic Beanstalk', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSElasticBeanstalk.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSElasticBeanstalk_LARGE.png' },
  { key: 'IAM', value: 'Amazon IAM', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/SecurityIdentityCompliance_AWSIAM.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/SecurityIdentityCompliance_AWSIAM_LARGE.png' },
  { key: 'SNS', value: 'Amazon SNS', developerAssociate: true, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSNS.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSNS_LARGE.png' },
  { key: 'SES', value: 'Amazon Simple Email Service', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSES.png', largeImageUrl: 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSES_LARGE.png' },
  { key: 'STEP_FUNCTIONS', value: 'Amazon Step Functions', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/ApplicationServices_AWSStepFunctions.png', largeImageUrl: '' },
  { key: 'API_GATEWAY', value: 'Amazon API Gateway', developerAssociate: false, imageUrl: 'https://s3.amazonaws.com/aws-icons-woo/ApplicationServices_AmazonAPIGateway.png', largeImageUrl: '' }
]

export default services
