# GitHubV3RestApi.GistsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gistsCheckIsStarred**](GistsApi.md#gistsCheckIsStarred) | **GET** /gists/{gist_id}/star | Check if a gist is starred
[**gistsCreate**](GistsApi.md#gistsCreate) | **POST** /gists | Create a gist
[**gistsCreateComment**](GistsApi.md#gistsCreateComment) | **POST** /gists/{gist_id}/comments | Create a gist comment
[**gistsDelete**](GistsApi.md#gistsDelete) | **DELETE** /gists/{gist_id} | Delete a gist
[**gistsDeleteComment**](GistsApi.md#gistsDeleteComment) | **DELETE** /gists/{gist_id}/comments/{comment_id} | Delete a gist comment
[**gistsFork**](GistsApi.md#gistsFork) | **POST** /gists/{gist_id}/forks | Fork a gist
[**gistsGet**](GistsApi.md#gistsGet) | **GET** /gists/{gist_id} | Get a gist
[**gistsGetComment**](GistsApi.md#gistsGetComment) | **GET** /gists/{gist_id}/comments/{comment_id} | Get a gist comment
[**gistsGetRevision**](GistsApi.md#gistsGetRevision) | **GET** /gists/{gist_id}/{sha} | Get a gist revision
[**gistsList**](GistsApi.md#gistsList) | **GET** /gists | List gists for the authenticated user
[**gistsListComments**](GistsApi.md#gistsListComments) | **GET** /gists/{gist_id}/comments | List gist comments
[**gistsListCommits**](GistsApi.md#gistsListCommits) | **GET** /gists/{gist_id}/commits | List gist commits
[**gistsListForUser**](GistsApi.md#gistsListForUser) | **GET** /users/{username}/gists | List gists for a user
[**gistsListForks**](GistsApi.md#gistsListForks) | **GET** /gists/{gist_id}/forks | List gist forks
[**gistsListPublic**](GistsApi.md#gistsListPublic) | **GET** /gists/public | List public gists
[**gistsListStarred**](GistsApi.md#gistsListStarred) | **GET** /gists/starred | List starred gists
[**gistsStar**](GistsApi.md#gistsStar) | **PUT** /gists/{gist_id}/star | Star a gist
[**gistsUnstar**](GistsApi.md#gistsUnstar) | **DELETE** /gists/{gist_id}/star | Unstar a gist
[**gistsUpdate**](GistsApi.md#gistsUpdate) | **PATCH** /gists/{gist_id} | Update a gist
[**gistsUpdateComment**](GistsApi.md#gistsUpdateComment) | **PATCH** /gists/{gist_id}/comments/{comment_id} | Update a gist comment



## gistsCheckIsStarred

> gistsCheckIsStarred(gistId)

Check if a gist is starred

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsCheckIsStarred(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsCreate

> GistFull gistsCreate(opts)

Create a gist

Allows you to add a new gist with one or more files.  **Note:** Don&#39;t name your files \&quot;gistfile\&quot; with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let opts = {
  'inlineObject10': new GitHubV3RestApi.InlineObject10() // InlineObject10 | 
};
apiInstance.gistsCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject10** | [**InlineObject10**](InlineObject10.md)|  | [optional] 

### Return type

[**GistFull**](GistFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gistsCreateComment

> GistComment gistsCreateComment(gistId, opts)

Create a gist comment

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let opts = {
  'inlineObject11': new GitHubV3RestApi.InlineObject11() // InlineObject11 | 
};
apiInstance.gistsCreateComment(gistId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **inlineObject11** | [**InlineObject11**](InlineObject11.md)|  | [optional] 

### Return type

[**GistComment**](GistComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gistsDelete

> gistsDelete(gistId)

Delete a gist

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsDelete(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsDeleteComment

> gistsDeleteComment(gistId, commentId)

Delete a gist comment

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let commentId = 56; // Number | comment_id parameter
apiInstance.gistsDeleteComment(gistId, commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **commentId** | **Number**| comment_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsFork

> BaseGist gistsFork(gistId)

Fork a gist

**Note**: This was previously &#x60;/gists/:gist_id/fork&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsFork(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

[**BaseGist**](BaseGist.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsGet

> GistFull gistsGet(gistId)

Get a gist

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsGet(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

[**GistFull**](GistFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsGetComment

> GistComment gistsGetComment(gistId, commentId)

Get a gist comment

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let commentId = 56; // Number | comment_id parameter
apiInstance.gistsGetComment(gistId, commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **commentId** | **Number**| comment_id parameter | 

### Return type

[**GistComment**](GistComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsGetRevision

> GistFull gistsGetRevision(gistId, sha)

Get a gist revision

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let sha = "sha_example"; // String | sha parameter
apiInstance.gistsGetRevision(gistId, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **sha** | **String**| sha parameter | 

### Return type

[**GistFull**](GistFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsList

> [BaseGist] gistsList(opts)

List gists for the authenticated user

Lists the authenticated user&#39;s gists or if called anonymously, this endpoint returns all public gists:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[BaseGist]**](BaseGist.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListComments

> [GistComment] gistsListComments(gistId, opts)

List gist comments

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListComments(gistId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GistComment]**](GistComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListCommits

> [GistCommit] gistsListCommits(gistId, opts)

List gist commits

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListCommits(gistId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GistCommit]**](GistCommit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListForUser

> [BaseGist] gistsListForUser(username, opts)

List gists for a user

Lists public gists for the specified user:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let username = "username_example"; // String | 
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListForUser(username, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[BaseGist]**](BaseGist.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListForks

> [GistFull] gistsListForks(gistId, opts)

List gist forks

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListForks(gistId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GistFull]**](GistFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListPublic

> [BaseGist] gistsListPublic(opts)

List public gists

List public gists sorted by most recently updated to least recently updated.  Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListPublic(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[BaseGist]**](BaseGist.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsListStarred

> [BaseGist] gistsListStarred(opts)

List starred gists

List the authenticated user&#39;s starred gists:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.gistsListStarred(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **String**| Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[BaseGist]**](BaseGist.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsStar

> gistsStar(gistId)

Star a gist

Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsStar(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsUnstar

> gistsUnstar(gistId)

Unstar a gist

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
apiInstance.gistsUnstar(gistId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gistsUpdate

> GistFull gistsUpdate(gistId, opts)

Update a gist

Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren&#39;t explicitly changed during an edit are unchanged.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let opts = {
  'UNKNOWN_BASE_TYPE': new GitHubV3RestApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.gistsUpdate(gistId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**GistFull**](GistFull.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gistsUpdateComment

> GistComment gistsUpdateComment(gistId, commentId, opts)

Update a gist comment

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.GistsApi();
let gistId = "gistId_example"; // String | gist_id parameter
let commentId = 56; // Number | comment_id parameter
let opts = {
  'inlineObject12': new GitHubV3RestApi.InlineObject12() // InlineObject12 | 
};
apiInstance.gistsUpdateComment(gistId, commentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gistId** | **String**| gist_id parameter | 
 **commentId** | **Number**| comment_id parameter | 
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | [optional] 

### Return type

[**GistComment**](GistComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

