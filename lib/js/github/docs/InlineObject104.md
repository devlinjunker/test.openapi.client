# GitHubV3RestApi.InlineObject104

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | **String** | The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. | [optional] 
**body** | **String** | The contents of the pull request. | [optional] 
**maintainerCanModify** | **Boolean** | Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request. | [optional] 
**state** | **String** | State of this Pull Request. Either &#x60;open&#x60; or &#x60;closed&#x60;. | [optional] 
**title** | **String** | The title of the pull request. | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)




