---
sidebar_label: Staging
sidebar_class_name: overview
---

# Staging environment overview

We maintain a staging version of our system which can be used for testing and code review purposes. It runs a copy of production data, without 3rd party connections.

## Introduction

| Websites     | URL                            | Notes                              |
| ------------ | ------------------------------ | ---------------------------------- |
| Prenda World | https://stage.prendaworld.com/ | Must login with username/password  |
| Bridge       | https://stage-bridge.prenda.co | https://stage-bridge.prenda.co/app |
| Hub          | https://stage-hub.prenda.co    | https://stage-bridge.prenda.co     |

## Deployments

- You can deploy a branch to staging via the GitHub Action [deploy-branch-to-staging.yml](https://github.com/prenda-school/prendaworld/actions/workflows/deploy-branch-to-staging.yml)
  - Click "Run workflow" and select your branch to deploy it out.
  - This will send a slack notice in the #feed-staging-tech channel.
- Check this channel to see who was the last person to deploy code, and check that they are done testing on staging. Also put a notice out in the #group-technology-internal channel.

## Important information

- The databases for PW and Hub are updated nightly from production

## Results

- Summarize the main findings of the document, including any key features or benefits of the software or system.
- Use bullet points and numbered lists to break up large blocks of text.

## Discussion

- Down the road we may reset staging environments every Monday morning so that it can be ready for being used that week.

## Conclusion

- We have multiple way to testing changes before being live to our customers, utilize the staging environment or LaunchDarkly flags for this purpose.

## References

-

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
