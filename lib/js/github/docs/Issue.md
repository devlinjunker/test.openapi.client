# GitHubV3RestApi.Issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeLockReason** | **String** |  | [optional] 
**assignee** | [**SimpleUser**](SimpleUser.md) |  | 
**assignees** | [**[SimpleUser]**](SimpleUser.md) |  | [optional] 
**authorAssociation** | **String** |  | 
**body** | **String** | Contents of the issue | [optional] 
**bodyHtml** | **String** |  | [optional] 
**bodyText** | **String** |  | [optional] 
**closedAt** | **Date** |  | 
**closedBy** | [**SimpleUser**](SimpleUser.md) |  | [optional] 
**comments** | **Number** |  | 
**commentsUrl** | **String** |  | 
**createdAt** | **Date** |  | 
**eventsUrl** | **String** |  | 
**htmlUrl** | **String** |  | 
**id** | **Number** |  | 
**labels** | [**[OneOfstringobject]**](OneOfstringobject.md) | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository | 
**labelsUrl** | **String** |  | 
**locked** | **Boolean** |  | 
**milestone** | [**Milestone**](Milestone.md) |  | 
**nodeId** | **String** |  | 
**_number** | **Number** | Number uniquely identifying the issue within its repository | 
**performedViaGithubApp** | [**Integration**](Integration.md) |  | [optional] 
**pullRequest** | [**IssuePullRequest**](IssuePullRequest.md) |  | [optional] 
**reactions** | [**ReactionRollup**](ReactionRollup.md) |  | [optional] 
**repository** | [**Repository**](Repository.md) |  | [optional] 
**repositoryUrl** | **String** |  | 
**state** | **String** | State of the issue; either &#39;open&#39; or &#39;closed&#39; | 
**timelineUrl** | **String** |  | [optional] 
**title** | **String** | Title of the issue | 
**updatedAt** | **Date** |  | 
**url** | **String** | URL for the issue | 
**user** | [**SimpleUser**](SimpleUser.md) |  | 


