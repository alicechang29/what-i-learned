1. Merge the changes from the develop/development branch into the release branch.   This triggers a github action to deploy to test.
2. For the back end, apply any schema changes, and then you have to approve the deployment to test inside the github action (for the front end, the deployment to test happens with no approval)
3. Check things on test.  When ready....
4. Apply any schema changes to prod
5. In the github actions which were created in step 1, approve the deploy to prod steps