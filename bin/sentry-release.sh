#!/bin/bash

if [ "$NETLIFY" == "true" ]
then
  yarn sentry-cli releases new $DEPLOY_ID
  yarn sentry-cli releases set-commits $DEPLOY_ID --commit "trycourier/website@$COMMIT_REF"
  yarn sentry-cli releases deploys $DEPLOY_ID new -e $CONTEXT
fi
