# GitHubV3RestApi.ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviews

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dismissStaleReviews** | **Boolean** | Set to &#x60;true&#x60; if you want to automatically dismiss approving reviews when someone pushes a new commit. | [optional] 
**dismissalRestrictions** | [**ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions**](ReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsDismissalRestrictions.md) |  | [optional] 
**requireCodeOwnerReviews** | **Boolean** | Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them. | [optional] 
**requiredApprovingReviewCount** | **Number** | Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6. | [optional] 


