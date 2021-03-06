# openapi.model.Repository

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowMergeCommit** | **bool** | Whether to allow merge commits for pull requests. | [optional] [default to true]
**allowRebaseMerge** | **bool** | Whether to allow rebase merges for pull requests. | [optional] [default to true]
**allowSquashMerge** | **bool** | Whether to allow squash merges for pull requests. | [optional] [default to true]
**archiveUrl** | **String** |  | [default to null]
**archived** | **bool** | Whether the repository is archived. | [default to false]
**assigneesUrl** | **String** |  | [default to null]
**blobsUrl** | **String** |  | [default to null]
**branchesUrl** | **String** |  | [default to null]
**cloneUrl** | **String** |  | [default to null]
**collaboratorsUrl** | **String** |  | [default to null]
**commentsUrl** | **String** |  | [default to null]
**commitsUrl** | **String** |  | [default to null]
**compareUrl** | **String** |  | [default to null]
**contentsUrl** | **String** |  | [default to null]
**contributorsUrl** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**defaultBranch** | **String** | The default branch of the repository. | [default to null]
**deleteBranchOnMerge** | **bool** | Whether to delete head branches when pull requests are merged | [optional] [default to false]
**deploymentsUrl** | **String** |  | [default to null]
**description** | **String** |  | [default to null]
**disabled** | **bool** | Returns whether or not this repository disabled. | [default to null]
**downloadsUrl** | **String** |  | [default to null]
**eventsUrl** | **String** |  | [default to null]
**fork** | **bool** |  | [default to null]
**forks** | **int** |  | [default to null]
**forksCount** | **int** |  | [default to null]
**forksUrl** | **String** |  | [default to null]
**fullName** | **String** |  | [default to null]
**gitCommitsUrl** | **String** |  | [default to null]
**gitRefsUrl** | **String** |  | [default to null]
**gitTagsUrl** | **String** |  | [default to null]
**gitUrl** | **String** |  | [default to null]
**hasDownloads** | **bool** | Whether downloads are enabled. | [default to true]
**hasIssues** | **bool** | Whether issues are enabled. | [default to true]
**hasPages** | **bool** |  | [default to null]
**hasProjects** | **bool** | Whether projects are enabled. | [default to true]
**hasWiki** | **bool** | Whether the wiki is enabled. | [default to true]
**homepage** | **String** |  | [default to null]
**hooksUrl** | **String** |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** | Unique identifier of the repository | [default to null]
**isTemplate** | **bool** | Whether this repository acts as a template that can be used to generate new repositories. | [optional] [default to false]
**issueCommentUrl** | **String** |  | [default to null]
**issueEventsUrl** | **String** |  | [default to null]
**issuesUrl** | **String** |  | [default to null]
**keysUrl** | **String** |  | [default to null]
**labelsUrl** | **String** |  | [default to null]
**language** | **String** |  | [default to null]
**languagesUrl** | **String** |  | [default to null]
**license** | [**LicenseSimple**](LicenseSimple.md) |  | [default to null]
**masterBranch** | **String** |  | [optional] [default to null]
**mergesUrl** | **String** |  | [default to null]
**milestonesUrl** | **String** |  | [default to null]
**mirrorUrl** | **String** |  | [default to null]
**name** | **String** | The name of the repository. | [default to null]
**networkCount** | **int** |  | [optional] [default to null]
**nodeId** | **String** |  | [default to null]
**notificationsUrl** | **String** |  | [default to null]
**openIssues** | **int** |  | [default to null]
**openIssuesCount** | **int** |  | [default to null]
**owner** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**permissions** | [**RepositoryPermissions**](RepositoryPermissions.md) |  | [optional] [default to null]
**private** | **bool** | Whether the repository is private or public. | [default to false]
**pullsUrl** | **String** |  | [default to null]
**pushedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**releasesUrl** | **String** |  | [default to null]
**size** | **int** |  | [default to null]
**sshUrl** | **String** |  | [default to null]
**stargazersCount** | **int** |  | [default to null]
**stargazersUrl** | **String** |  | [default to null]
**starredAt** | **String** |  | [optional] [default to null]
**statusesUrl** | **String** |  | [default to null]
**subscribersCount** | **int** |  | [optional] [default to null]
**subscribersUrl** | **String** |  | [default to null]
**subscriptionUrl** | **String** |  | [default to null]
**svnUrl** | **String** |  | [default to null]
**tagsUrl** | **String** |  | [default to null]
**teamsUrl** | **String** |  | [default to null]
**tempCloneToken** | **String** |  | [optional] [default to null]
**templateRepository** | [**RepositoryTemplateRepository**](RepositoryTemplateRepository.md) |  | [optional] [default to null]
**topics** | **List&lt;String&gt;** |  | [optional] [default to []]
**treesUrl** | **String** |  | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]
**visibility** | **String** | The repository visibility: public, private, or internal. | [optional] [default to &quot;public&quot;]
**watchers** | **int** |  | [default to null]
**watchersCount** | **int** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


