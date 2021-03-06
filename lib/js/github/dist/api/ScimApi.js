"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicError = _interopRequireDefault(require("../model/BasicError"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject123"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject124"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject125"));

var _ScimError = _interopRequireDefault(require("../model/ScimError"));

var _ScimUser = _interopRequireDefault(require("../model/ScimUser"));

var _ScimUserList = _interopRequireDefault(require("../model/ScimUserList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Scim service.
* @module api/ScimApi
* @version 0.0.5
*/
var ScimApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScimApi. 
  * @alias module:api/ScimApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScimApi(apiClient) {
    _classCallCheck(this, ScimApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the scimDeleteUserFromOrg operation.
   * @callback module:api/ScimApi~scimDeleteUserFromOrgCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a SCIM user from an organization
   * @param {String} org 
   * @param {String} scimUserId scim_user_id parameter
   * @param {module:api/ScimApi~scimDeleteUserFromOrgCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ScimApi, [{
    key: "scimDeleteUserFromOrg",
    value: function scimDeleteUserFromOrg(org, scimUserId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimDeleteUserFromOrg");
      } // verify the required parameter 'scimUserId' is set


      if (scimUserId === undefined || scimUserId === null) {
        throw new Error("Missing the required parameter 'scimUserId' when calling scimDeleteUserFromOrg");
      }

      var pathParams = {
        'org': org,
        'scim_user_id': scimUserId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/scim+json'];
      var returnType = null;
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users/{scim_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scimGetProvisioningInformationForUser operation.
     * @callback module:api/ScimApi~scimGetProvisioningInformationForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SCIM provisioning information for a user
     * @param {String} org 
     * @param {String} scimUserId scim_user_id parameter
     * @param {module:api/ScimApi~scimGetProvisioningInformationForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScimUser}
     */

  }, {
    key: "scimGetProvisioningInformationForUser",
    value: function scimGetProvisioningInformationForUser(org, scimUserId, callback) {
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimGetProvisioningInformationForUser");
      } // verify the required parameter 'scimUserId' is set


      if (scimUserId === undefined || scimUserId === null) {
        throw new Error("Missing the required parameter 'scimUserId' when calling scimGetProvisioningInformationForUser");
      }

      var pathParams = {
        'org': org,
        'scim_user_id': scimUserId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/scim+json', 'application/json'];
      var returnType = _ScimUser["default"];
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users/{scim_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scimListProvisionedIdentities operation.
     * @callback module:api/ScimApi~scimListProvisionedIdentitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScimUserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List SCIM provisioned identities
     * Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.  When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:   - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.  The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:  1. The user is granted access by the IdP and is not a member of the GitHub organization.  1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.  1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:    - If the user signs in, their GitHub account is linked to this entry.    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startIndex Used for pagination: the index of the first result to return.
     * @param {Number} opts.count Used for pagination: the number of results to return.
     * @param {String} opts.filter Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:  `?filter=userName%20eq%20\\\"Octocat\\\"`.  To filter results for for the identity with the email `octocat@github.com`, you would use this query:  `?filter=emails%20eq%20\\\"octocat@github.com\\\"`.
     * @param {module:api/ScimApi~scimListProvisionedIdentitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScimUserList}
     */

  }, {
    key: "scimListProvisionedIdentities",
    value: function scimListProvisionedIdentities(org, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimListProvisionedIdentities");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {
        'startIndex': opts['startIndex'],
        'count': opts['count'],
        'filter': opts['filter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/scim+json', 'application/json'];
      var returnType = _ScimUserList["default"];
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scimProvisionAndInviteUser operation.
     * @callback module:api/ScimApi~scimProvisionAndInviteUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provision and invite a SCIM user
     * Provision organization membership for a user, and send an activation email to the email address.
     * @param {String} org 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject123} opts.inlineObject123 
     * @param {module:api/ScimApi~scimProvisionAndInviteUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScimUser}
     */

  }, {
    key: "scimProvisionAndInviteUser",
    value: function scimProvisionAndInviteUser(org, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject123']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimProvisionAndInviteUser");
      }

      var pathParams = {
        'org': org
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/scim+json', 'application/json'];
      var returnType = _ScimUser["default"];
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scimSetInformationForProvisionedUser operation.
     * @callback module:api/ScimApi~scimSetInformationForProvisionedUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a provisioned organization membership
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://developer.github.com/v3/scim/#update-an-attribute-for-a-scim-user) endpoint instead.  You must at least provide the required values for the user: `userName`, `name`, and `emails`.  **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
     * @param {String} org 
     * @param {String} scimUserId scim_user_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject124} opts.inlineObject124 
     * @param {module:api/ScimApi~scimSetInformationForProvisionedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScimUser}
     */

  }, {
    key: "scimSetInformationForProvisionedUser",
    value: function scimSetInformationForProvisionedUser(org, scimUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject124']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimSetInformationForProvisionedUser");
      } // verify the required parameter 'scimUserId' is set


      if (scimUserId === undefined || scimUserId === null) {
        throw new Error("Missing the required parameter 'scimUserId' when calling scimSetInformationForProvisionedUser");
      }

      var pathParams = {
        'org': org,
        'scim_user_id': scimUserId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/scim+json', 'application/json'];
      var returnType = _ScimUser["default"];
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users/{scim_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scimUpdateAttributeForUser operation.
     * @callback module:api/ScimApi~scimUpdateAttributeForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an attribute for a SCIM user
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).  **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `\"path\": \"emails[type eq \\\"work\\\"]\"` will not work.  **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.  ``` {   \"Operations\":[{     \"op\":\"replace\",     \"value\":{       \"active\":false     }   }] } ```
     * @param {String} org 
     * @param {String} scimUserId scim_user_id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject125} opts.inlineObject125 
     * @param {module:api/ScimApi~scimUpdateAttributeForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScimUser}
     */

  }, {
    key: "scimUpdateAttributeForUser",
    value: function scimUpdateAttributeForUser(org, scimUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject125']; // verify the required parameter 'org' is set

      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling scimUpdateAttributeForUser");
      } // verify the required parameter 'scimUserId' is set


      if (scimUserId === undefined || scimUserId === null) {
        throw new Error("Missing the required parameter 'scimUserId' when calling scimUpdateAttributeForUser");
      }

      var pathParams = {
        'org': org,
        'scim_user_id': scimUserId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/scim+json', 'application/json'];
      var returnType = _ScimUser["default"];
      return this.apiClient.callApi('/scim/v2/organizations/{org}/Users/{scim_user_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScimApi;
}();

exports["default"] = ScimApi;