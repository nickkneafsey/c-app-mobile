import React, { Component } from 'react'
import { ScrollView, Image }  from 'react-native'
import { List, Text, ListItem } from 'react-native-elements'
import _ from 'lodash'

// It might be better to obtain these with an API call but to reduce lambda calls I am using this for now
const services = [
  { key: 'EC2', value: 'Amazon EC2', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonEC2.png' },
  { key: 'S3', value: 'Amazon S3', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Storage_AmazonS3_bucket.png' },
  { key: 'RDS', value: 'Amazon RDS', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonRDS.png' },
  { key: 'SQS', value: 'Amazon SQS', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSQS.png' },
  { key: 'DYNAMO_DB', value: 'Amazon DynamoDB', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonDynamoDB.png' },
  { key: 'LAMBDA', value: 'AWS Lambda', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSLambda.png' },
  { key: 'VPC', value: 'Amazon VPC', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonVPC.png' },
  { key: 'CLOUDFORMATION', value: 'AWS CloudFormation', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/ManagementTools_AWSCloudFormation.png' },
  { key: 'CLOUDFRONT', value: 'CloudFront', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonCloudFront.png' },
  { key: 'ROUTE_53', value: 'Amazon Route 53', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/NetworkingContentDelivery_AmazonRoute53.png' },
  { key: 'GLACIER', value: 'Amazon Glacier', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Storage_AmazonGlacier.png' },
  { key: 'KINESIS', value: 'Amazon Kinesis', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Analytics_AmazonKinesis.png' },
  { key: 'STORAGE_GATEWAY', value: 'Storage Gateway', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Storage_AWSStorageGateway.png' },
  { key: 'ECS', value: 'ECS', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Compute_AmazonECS.png' },
  { key: 'ELASTICACHE', value: 'Amazon ElastiCache', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Database_AmazonElasticCache.png' },
  { key: 'ELASTIC_BEANSTALK', value: 'Amazon Elastic Beanstalk', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Compute_AWSElasticBeanstalk.png' },
  { key: 'IAM', value: 'IAM', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/SecurityIdentityCompliance_AWSIAM.png' },
  { key: 'SNS', value: 'Amazon Simple Notification Service', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSNS.png' },
  { key: 'SES', value: 'Amazon Simple Email Service', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/Messaging_AmazonSES.png' },
  { key: 'STEP_FUNCTIONS', value: 'AWS Step Functions', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/ApplicationServices_AWSStepFunctions.png' },
  { key: 'API_GATEWAY', value: 'API Gateway', imageUrl : 'https://s3.amazonaws.com/aws-icons-woo/ApplicationServices_AmazonAPIGateway.png' },
]

class ServicesScreen extends Component {
  static navigationOptions = {
    title: 'Services'
  }

  componentWillMount() {
    // check for auth token and make request to auth endpoint if not
  }

  render() {
    return (
      <ScrollView>
        <List>
          {
            services.map((service) => {
              return (
                <ListItem
                  key={service.key}
                  title={service.value}
                  avatar={{ uri: service.imageUrl }}
                  avatarStyle={{ backgroundColor: 'white' }}
                  onPress={() => this.props.navigation.navigate('Service', { service: service.key })}
                />
              )
            })
          }
        </List>
      </ScrollView>
    )
  }
}

export default ServicesScreen
