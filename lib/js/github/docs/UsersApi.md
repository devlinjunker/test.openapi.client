# GitHubV3RestApi.UsersApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersAddEmailForAuthenticated**](UsersApi.md#usersAddEmailForAuthenticated) | **POST** /user/emails | Add an email address for the authenticated user
[**usersBlock**](UsersApi.md#usersBlock) | **PUT** /user/blocks/{username} | Block a user
[**usersCheckBlocked**](UsersApi.md#usersCheckBlocked) | **GET** /user/blocks/{username} | Check if a user is blocked by the authenticated user
[**usersCheckFollowingForUser**](UsersApi.md#usersCheckFollowingForUser) | **GET** /users/{username}/following/{target_user} | Check if a user follows another user
[**usersCheckPersonIsFollowedByAuthenticated**](UsersApi.md#usersCheckPersonIsFollowedByAuthenticated) | **GET** /user/following/{username} | Check if a person is followed by the authenticated user
[**usersCreateGpgKeyForAuthenticated**](UsersApi.md#usersCreateGpgKeyForAuthenticated) | **POST** /user/gpg_keys | Create a GPG key for the authenticated user
[**usersCreatePublicSshKeyForAuthenticated**](UsersApi.md#usersCreatePublicSshKeyForAuthenticated) | **POST** /user/keys | Create a public SSH key for the authenticated user
[**usersDeleteEmailForAuthenticated**](UsersApi.md#usersDeleteEmailForAuthenticated) | **DELETE** /user/emails | Delete an email address for the authenticated user
[**usersDeleteGpgKeyForAuthenticated**](UsersApi.md#usersDeleteGpgKeyForAuthenticated) | **DELETE** /user/gpg_keys/{gpg_key_id} | Delete a GPG key for the authenticated user
[**usersDeletePublicSshKeyForAuthenticated**](UsersApi.md#usersDeletePublicSshKeyForAuthenticated) | **DELETE** /user/keys/{key_id} | Delete a public SSH key for the authenticated user
[**usersFollow**](UsersApi.md#usersFollow) | **PUT** /user/following/{username} | Follow a user
[**usersGetAuthenticated**](UsersApi.md#usersGetAuthenticated) | **GET** /user | Get the authenticated user
[**usersGetByUsername**](UsersApi.md#usersGetByUsername) | **GET** /users/{username} | Get a user
[**usersGetContextForUser**](UsersApi.md#usersGetContextForUser) | **GET** /users/{username}/hovercard | Get contextual information for a user
[**usersGetGpgKeyForAuthenticated**](UsersApi.md#usersGetGpgKeyForAuthenticated) | **GET** /user/gpg_keys/{gpg_key_id} | Get a GPG key for the authenticated user
[**usersGetPublicSshKeyForAuthenticated**](UsersApi.md#usersGetPublicSshKeyForAuthenticated) | **GET** /user/keys/{key_id} | Get a public SSH key for the authenticated user
[**usersList**](UsersApi.md#usersList) | **GET** /users | List users
[**usersListBlockedByAuthenticated**](UsersApi.md#usersListBlockedByAuthenticated) | **GET** /user/blocks | List users blocked by the authenticated user
[**usersListEmailsForAuthenticated**](UsersApi.md#usersListEmailsForAuthenticated) | **GET** /user/emails | List email addresses for the authenticated user
[**usersListFollowedByAuthenticated**](UsersApi.md#usersListFollowedByAuthenticated) | **GET** /user/following | List the people the authenticated user follows
[**usersListFollowersForAuthenticatedUser**](UsersApi.md#usersListFollowersForAuthenticatedUser) | **GET** /user/followers | List followers of the authenticated user
[**usersListFollowersForUser**](UsersApi.md#usersListFollowersForUser) | **GET** /users/{username}/followers | List followers of a user
[**usersListFollowingForUser**](UsersApi.md#usersListFollowingForUser) | **GET** /users/{username}/following | List the people a user follows
[**usersListGpgKeysForAuthenticated**](UsersApi.md#usersListGpgKeysForAuthenticated) | **GET** /user/gpg_keys | List GPG keys for the authenticated user
[**usersListGpgKeysForUser**](UsersApi.md#usersListGpgKeysForUser) | **GET** /users/{username}/gpg_keys | List GPG keys for a user
[**usersListPublicEmailsForAuthenticated**](UsersApi.md#usersListPublicEmailsForAuthenticated) | **GET** /user/public_emails | List public email addresses for the authenticated user
[**usersListPublicKeysForUser**](UsersApi.md#usersListPublicKeysForUser) | **GET** /users/{username}/keys | List public keys for a user
[**usersListPublicSshKeysForAuthenticated**](UsersApi.md#usersListPublicSshKeysForAuthenticated) | **GET** /user/keys | List public SSH keys for the authenticated user
[**usersSetPrimaryEmailVisibilityForAuthenticated**](UsersApi.md#usersSetPrimaryEmailVisibilityForAuthenticated) | **PATCH** /user/email/visibility | Set primary email visibility for the authenticated user
[**usersUnblock**](UsersApi.md#usersUnblock) | **DELETE** /user/blocks/{username} | Unblock a user
[**usersUnfollow**](UsersApi.md#usersUnfollow) | **DELETE** /user/following/{username} | Unfollow a user
[**usersUpdateAuthenticated**](UsersApi.md#usersUpdateAuthenticated) | **PATCH** /user | Update the authenticated user



## usersAddEmailForAuthenticated

> [Email] usersAddEmailForAuthenticated(opts)

Add an email address for the authenticated user

This endpoint is accessible with the &#x60;user&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new GitHubV3RestApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.usersAddEmailForAuthenticated(opts, (error, data, response) => {
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**[Email]**](Email.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersBlock

> usersBlock(username)

Block a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersBlock(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersCheckBlocked

> usersCheckBlocked(username)

Check if a user is blocked by the authenticated user

If the user is blocked:  If the user is not blocked:

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersCheckBlocked(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersCheckFollowingForUser

> usersCheckFollowingForUser(username, targetUser)

Check if a user follows another user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let targetUser = "targetUser_example"; // String | target_user parameter
apiInstance.usersCheckFollowingForUser(username, targetUser, (error, data, response) => {
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
 **username** | **String**|  | 
 **targetUser** | **String**| target_user parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## usersCheckPersonIsFollowedByAuthenticated

> usersCheckPersonIsFollowedByAuthenticated(username)

Check if a person is followed by the authenticated user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersCheckPersonIsFollowedByAuthenticated(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersCreateGpgKeyForAuthenticated

> GpgKey usersCreateGpgKeyForAuthenticated(opts)

Create a GPG key for the authenticated user

Adds a GPG key to the authenticated user&#39;s GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least &#x60;write:gpg_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'inlineObject139': new GitHubV3RestApi.InlineObject139() // InlineObject139 | 
};
apiInstance.usersCreateGpgKeyForAuthenticated(opts, (error, data, response) => {
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
 **inlineObject139** | [**InlineObject139**](InlineObject139.md)|  | [optional] 

### Return type

[**GpgKey**](GpgKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersCreatePublicSshKeyForAuthenticated

> Key usersCreatePublicSshKeyForAuthenticated(opts)

Create a public SSH key for the authenticated user

Adds a public SSH key to the authenticated user&#39;s GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least &#x60;write:public_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'inlineObject140': new GitHubV3RestApi.InlineObject140() // InlineObject140 | 
};
apiInstance.usersCreatePublicSshKeyForAuthenticated(opts, (error, data, response) => {
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
 **inlineObject140** | [**InlineObject140**](InlineObject140.md)|  | [optional] 

### Return type

[**Key**](Key.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDeleteEmailForAuthenticated

> usersDeleteEmailForAuthenticated(opts)

Delete an email address for the authenticated user

This endpoint is accessible with the &#x60;user&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new GitHubV3RestApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.usersDeleteEmailForAuthenticated(opts, (error, data, response) => {
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDeleteGpgKeyForAuthenticated

> usersDeleteGpgKeyForAuthenticated(gpgKeyId)

Delete a GPG key for the authenticated user

Removes a GPG key from the authenticated user&#39;s GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;admin:gpg_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let gpgKeyId = 56; // Number | gpg_key_id parameter
apiInstance.usersDeleteGpgKeyForAuthenticated(gpgKeyId, (error, data, response) => {
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
 **gpgKeyId** | **Number**| gpg_key_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersDeletePublicSshKeyForAuthenticated

> usersDeletePublicSshKeyForAuthenticated(keyId)

Delete a public SSH key for the authenticated user

Removes a public SSH key from the authenticated user&#39;s GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;admin:public_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let keyId = 56; // Number | key_id parameter
apiInstance.usersDeletePublicSshKeyForAuthenticated(keyId, (error, data, response) => {
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
 **keyId** | **Number**| key_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersFollow

> usersFollow(username)

Follow a user

Note that you&#39;ll need to set &#x60;Content-Length&#x60; to zero when calling out to this endpoint. For more information, see \&quot;[HTTP verbs](https://developer.github.com/v3/#http-verbs).\&quot;  Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the &#x60;user:follow&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersFollow(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetAuthenticated

> OneOfprivateUserpublicUser usersGetAuthenticated()

Get the authenticated user

If the authenticated user is authenticated through basic authentication or OAuth with the &#x60;user&#x60; scope, then the response lists public and private profile information.  If the authenticated user is authenticated through OAuth without the &#x60;user&#x60; scope, then the response lists only public profile information.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
apiInstance.usersGetAuthenticated((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OneOfprivateUserpublicUser**](OneOfprivateUserpublicUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetByUsername

> OneOfprivateUserpublicUser usersGetByUsername(username)

Get a user

Provides publicly available information about someone with a GitHub account.  GitHub Apps with the &#x60;Plan&#x60; user permission can use this endpoint to retrieve information about a user&#39;s GitHub plan. The GitHub App must be authenticated as a user. See \&quot;[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)\&quot; for details about authentication. For an example response, see \&quot;[Response with GitHub plan information](https://developer.github.com/v3/users/#response-with-github-plan-information).\&quot;  The &#x60;email&#x60; key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for &#x60;email&#x60;, then it will have a value of &#x60;null&#x60;. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).  The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see \&quot;[Emails API](https://developer.github.com/v3/users/emails/)\&quot;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersGetByUsername(username, (error, data, response) => {
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

### Return type

[**OneOfprivateUserpublicUser**](OneOfprivateUserpublicUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetContextForUser

> Hovercard usersGetContextForUser(username, opts)

Get contextual information for a user

Provides hovercard information when authenticated through basic auth or OAuth with the &#x60;repo&#x60; scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.  The &#x60;subject_type&#x60; and &#x60;subject_id&#x60; parameters provide context for the person&#39;s hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about &#x60;octocat&#x60; who owns the &#x60;Spoon-Knife&#x60; repository via cURL, it would look like this:  &#x60;&#x60;&#x60;shell  curl -u username:token   https://api.github.com/users/octocat/hovercard?subject_type&#x3D;repository&amp;subject_id&#x3D;1300192 &#x60;&#x60;&#x60;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'subjectType': "subjectType_example", // String | Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
  'subjectId': "subjectId_example" // String | Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
};
apiInstance.usersGetContextForUser(username, opts, (error, data, response) => {
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
 **subjectType** | **String**| Identifies which additional information you&#39;d like to receive about the person&#39;s hovercard. Can be &#x60;organization&#x60;, &#x60;repository&#x60;, &#x60;issue&#x60;, &#x60;pull_request&#x60;. **Required** when using &#x60;subject_id&#x60;. | [optional] 
 **subjectId** | **String**| Uses the ID for the &#x60;subject_type&#x60; you specified. **Required** when using &#x60;subject_type&#x60;. | [optional] 

### Return type

[**Hovercard**](Hovercard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetGpgKeyForAuthenticated

> GpgKey usersGetGpgKeyForAuthenticated(gpgKeyId)

Get a GPG key for the authenticated user

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;read:gpg_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let gpgKeyId = 56; // Number | gpg_key_id parameter
apiInstance.usersGetGpgKeyForAuthenticated(gpgKeyId, (error, data, response) => {
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
 **gpgKeyId** | **Number**| gpg_key_id parameter | 

### Return type

[**GpgKey**](GpgKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersGetPublicSshKeyForAuthenticated

> Key usersGetPublicSshKeyForAuthenticated(keyId)

Get a public SSH key for the authenticated user

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;read:public_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let keyId = 56; // Number | key_id parameter
apiInstance.usersGetPublicSshKeyForAuthenticated(keyId, (error, data, response) => {
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
 **keyId** | **Number**| key_id parameter | 

### Return type

[**Key**](Key.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersList

> [SimpleUser] usersList(opts)

List users

Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.  Note: Pagination is powered exclusively by the &#x60;since&#x60; parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of users.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'since': "since_example", // String | Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  'perPage': 30 // Number | Results per page (max 100)
};
apiInstance.usersList(opts, (error, data, response) => {
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

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListBlockedByAuthenticated

> [SimpleUser] usersListBlockedByAuthenticated()

List users blocked by the authenticated user

List the users you&#39;ve blocked on your personal account.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
apiInstance.usersListBlockedByAuthenticated((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListEmailsForAuthenticated

> [Email] usersListEmailsForAuthenticated(opts)

List email addresses for the authenticated user

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the &#x60;user:email&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListEmailsForAuthenticated(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Email]**](Email.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListFollowedByAuthenticated

> [SimpleUser] usersListFollowedByAuthenticated(opts)

List the people the authenticated user follows

Lists the people who the authenticated user follows.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListFollowedByAuthenticated(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListFollowersForAuthenticatedUser

> [SimpleUser] usersListFollowersForAuthenticatedUser(opts)

List followers of the authenticated user

Lists the people following the authenticated user.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListFollowersForAuthenticatedUser(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListFollowersForUser

> [SimpleUser] usersListFollowersForUser(username, opts)

List followers of a user

Lists the people following the specified user.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListFollowersForUser(username, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListFollowingForUser

> [SimpleUser] usersListFollowingForUser(username, opts)

List the people a user follows

Lists the people who the specified user follows.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListFollowingForUser(username, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[SimpleUser]**](SimpleUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListGpgKeysForAuthenticated

> [GpgKey] usersListGpgKeysForAuthenticated(opts)

List GPG keys for the authenticated user

Lists the current user&#39;s GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;read:gpg_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListGpgKeysForAuthenticated(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GpgKey]**](GpgKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListGpgKeysForUser

> [GpgKey] usersListGpgKeysForUser(username, opts)

List GPG keys for a user

Lists the GPG keys for a user. This information is accessible by anyone.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListGpgKeysForUser(username, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[GpgKey]**](GpgKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListPublicEmailsForAuthenticated

> [Email] usersListPublicEmailsForAuthenticated(opts)

List public email addresses for the authenticated user

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://developer.github.com/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the &#x60;user:email&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListPublicEmailsForAuthenticated(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Email]**](Email.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListPublicKeysForUser

> [KeySimple] usersListPublicKeysForUser(username, opts)

List public keys for a user

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListPublicKeysForUser(username, opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[KeySimple]**](KeySimple.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersListPublicSshKeysForAuthenticated

> [Key] usersListPublicSshKeysForAuthenticated(opts)

List public SSH keys for the authenticated user

Lists the public SSH keys for the authenticated user&#39;s GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least &#x60;read:public_key&#x60; [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.usersListPublicSshKeysForAuthenticated(opts, (error, data, response) => {
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
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[Key]**](Key.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersSetPrimaryEmailVisibilityForAuthenticated

> [Email] usersSetPrimaryEmailVisibilityForAuthenticated(opts)

Set primary email visibility for the authenticated user

Sets the visibility for your primary email addresses.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'inlineObject138': new GitHubV3RestApi.InlineObject138() // InlineObject138 | 
};
apiInstance.usersSetPrimaryEmailVisibilityForAuthenticated(opts, (error, data, response) => {
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
 **inlineObject138** | [**InlineObject138**](InlineObject138.md)|  | [optional] 

### Return type

[**[Email]**](Email.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersUnblock

> usersUnblock(username)

Unblock a user

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersUnblock(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUnfollow

> usersUnfollow(username)

Unfollow a user

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the &#x60;user:follow&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let username = "username_example"; // String | 
apiInstance.usersUnfollow(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUpdateAuthenticated

> PrivateUser usersUpdateAuthenticated(opts)

Update the authenticated user

**Note:** If your email is set to private and you send an &#x60;email&#x60; parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.UsersApi();
let opts = {
  'inlineObject137': new GitHubV3RestApi.InlineObject137() // InlineObject137 | 
};
apiInstance.usersUpdateAuthenticated(opts, (error, data, response) => {
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
 **inlineObject137** | [**InlineObject137**](InlineObject137.md)|  | [optional] 

### Return type

[**PrivateUser**](PrivateUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

