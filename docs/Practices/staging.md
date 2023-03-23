---
sidebar_label: Staging
---

# Staging environment overview

The staging environment generally represents functionality from production *plus* functionality that may be under development or ready-for-release to production; that means that there may be bugs in staging that won’t exist in production. The underlying databases are refreshed from production daily at 9:15 AM UTC (2:15 AM MST). The staging environment does not implement 3rd party connections (hubspot, mailchimp, etc).


| Websites     | URL                            | Notes                              |
| ------------ | ------------------------------ | ---------------------------------- |
| Prenda World | https://stage.prendaworld.com/ | Logins with email/password are supported. Google Authentication is supported. |
| Bridge       | https://stage-bridge.prenda.co/app |  |
| Hub          | https://stage-hub.prenda.co    |      |
  
  
# Technical Information

## Deployments
  
You can deploy a branch to staging via the GitHub Action [deploy-branch-to-staging.yml](https://github.com/prenda-school/prendaworld/actions/workflows/deploy-branch-to-staging.yml).
  - Click "Run workflow" and select your branch to deploy it out.
  - This will send a slack notice in the [#feed-staging-tech channel](https://prenda.slack.com/archives/C04NHS2280J).
  
Check this channel to see who was the last person to deploy code, and check that they are done testing on staging. Also put a notice out in the [#group-technology-internal](https://prenda.slack.com/archives/C03EG9D0YH5) channel.
  
  
## Important information
  
  
### Prenda World

- Environment: The Prendaworld staging application is hosted on meteor in the test.prendaworld.com application.
Settings are in a JSON file in the “current version” link on the [galaxy versions page](https://galaxy.meteor.com/app/test.prendaworld.com/versions).

- Database: The staging Prendaworld database is hosted on [MongoDB Atlas](https://cloud.mongodb.com/v2/5f0fb9d78f81be4c2e6666b4#/clusters/detail/PrendaWorld-Staging). It is hosted in the Northern Virginia region (us-east-1). It is updated daily from the production database by a cron job on the Digital Ocean droplet “school-general”. The cron job is configured in the /etc/crontab file.

### Hub

- Environment: The hub application is hosted in the Prenda AWS root account in the us-east-2 region on the [hub-express-staging instance](https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#InstanceDetails:instanceId=i-0969131949eca059a).

- Database: The staging Hub database is located in the AWS us-east-2 region in the [aurorahub-stage cluster](https://us-east-2.console.aws.amazon.com/rds/home?region=us-east-2#database:id=aurorahub-stage;is-cluster=true). The cluster is cloned daily by a cron job on the “workers instance” in our AWS root account in the region us-east-2. The cron job is scheduled in the sysadmin users crontab file.

### Bridge

- Environment: The bridge application is hosted in the Prenda AWS root account in the us-east-2 region on the [hub-express-staging instance](https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#InstanceDetails:instanceId=i-0969131949eca059a).

- Database: The bridge application accesses the Hub database through API endpoints in the hub application.

  
  

## Discussion

- Down the road we may reset staging environments every Monday morning so that it can be ready for being used that week.

  
  

## Conclusion

- We have multiple way to testing changes before being live to our customers, utilize the staging environment or LaunchDarkly flags for this purpose.

  
  

<!-- ## References -->


<!--
  ,=====================.
  | Prenda Staging - 42/|
  |.-------------------.|
  ||[ _ o     . .  _ ]_||
  |`-------------------'|
  ||                   ||
  |`-------------------'|
  ||                   ||
  |`-------------------'|
  ||                   ||
  |`-----------------_-'|
  ||[=========]| o  (@) |
  |`---------=='/u\ --- |
  |------_--------------|
  | (/) (_)           []|
  |---==--==----------==|
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||||||||
  |||||||||||||||||dxm|||
  |||||||||||||||||||||||
  |=====================|
 .'                     `.
"""""""""""""""""""""""""""
-->
