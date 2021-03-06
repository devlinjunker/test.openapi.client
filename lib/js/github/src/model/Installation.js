/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AnyOfsimpleUserenterprise from './AnyOfsimpleUserenterprise';
import InstallationPermissions from './InstallationPermissions';
import SimpleUser from './SimpleUser';

/**
 * The Installation model module.
 * @module model/Installation
 * @version 0.0.5
 */
class Installation {
    /**
     * Constructs a new <code>Installation</code>.
     * Installation
     * @alias module:model/Installation
     * @param accessTokensUrl {String} 
     * @param account {module:model/AnyOfsimpleUserenterprise} 
     * @param appId {Number} 
     * @param appSlug {String} 
     * @param createdAt {Date} 
     * @param events {Array.<String>} 
     * @param htmlUrl {String} 
     * @param id {Number} The ID of the installation.
     * @param permissions {module:model/InstallationPermissions} 
     * @param repositoriesUrl {String} 
     * @param repositorySelection {module:model/Installation.RepositorySelectionEnum} Describe whether all repositories have been selected or there's a selection involved
     * @param singleFileName {String} 
     * @param targetId {Number} The ID of the user or organization this token is being scoped to.
     * @param targetType {String} 
     * @param updatedAt {Date} 
     */
    constructor(accessTokensUrl, account, appId, appSlug, createdAt, events, htmlUrl, id, permissions, repositoriesUrl, repositorySelection, singleFileName, targetId, targetType, updatedAt) { 
        
        Installation.initialize(this, accessTokensUrl, account, appId, appSlug, createdAt, events, htmlUrl, id, permissions, repositoriesUrl, repositorySelection, singleFileName, targetId, targetType, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessTokensUrl, account, appId, appSlug, createdAt, events, htmlUrl, id, permissions, repositoriesUrl, repositorySelection, singleFileName, targetId, targetType, updatedAt) { 
        obj['access_tokens_url'] = accessTokensUrl;
        obj['account'] = account;
        obj['app_id'] = appId;
        obj['app_slug'] = appSlug;
        obj['created_at'] = createdAt;
        obj['events'] = events;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['permissions'] = permissions;
        obj['repositories_url'] = repositoriesUrl;
        obj['repository_selection'] = repositorySelection;
        obj['single_file_name'] = singleFileName;
        obj['target_id'] = targetId;
        obj['target_type'] = targetType;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>Installation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Installation} obj Optional instance to populate.
     * @return {module:model/Installation} The populated <code>Installation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Installation();

            if (data.hasOwnProperty('access_tokens_url')) {
                obj['access_tokens_url'] = ApiClient.convertToType(data['access_tokens_url'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], AnyOfsimpleUserenterprise);
            }
            if (data.hasOwnProperty('app_id')) {
                obj['app_id'] = ApiClient.convertToType(data['app_id'], 'Number');
            }
            if (data.hasOwnProperty('app_slug')) {
                obj['app_slug'] = ApiClient.convertToType(data['app_slug'], 'String');
            }
            if (data.hasOwnProperty('contact_email')) {
                obj['contact_email'] = ApiClient.convertToType(data['contact_email'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = InstallationPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('single_file_name')) {
                obj['single_file_name'] = ApiClient.convertToType(data['single_file_name'], 'String');
            }
            if (data.hasOwnProperty('suspended_at')) {
                obj['suspended_at'] = ApiClient.convertToType(data['suspended_at'], 'Date');
            }
            if (data.hasOwnProperty('suspended_by')) {
                obj['suspended_by'] = ApiClient.convertToType(data['suspended_by'], SimpleUser);
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
            if (data.hasOwnProperty('target_type')) {
                obj['target_type'] = ApiClient.convertToType(data['target_type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_tokens_url
 */
Installation.prototype['access_tokens_url'] = undefined;

/**
 * @member {module:model/AnyOfsimpleUserenterprise} account
 */
Installation.prototype['account'] = undefined;

/**
 * @member {Number} app_id
 */
Installation.prototype['app_id'] = undefined;

/**
 * @member {String} app_slug
 */
Installation.prototype['app_slug'] = undefined;

/**
 * @member {String} contact_email
 */
Installation.prototype['contact_email'] = undefined;

/**
 * @member {Date} created_at
 */
Installation.prototype['created_at'] = undefined;

/**
 * @member {Array.<String>} events
 */
Installation.prototype['events'] = undefined;

/**
 * @member {String} html_url
 */
Installation.prototype['html_url'] = undefined;

/**
 * The ID of the installation.
 * @member {Number} id
 */
Installation.prototype['id'] = undefined;

/**
 * @member {module:model/InstallationPermissions} permissions
 */
Installation.prototype['permissions'] = undefined;

/**
 * @member {String} repositories_url
 */
Installation.prototype['repositories_url'] = undefined;

/**
 * Describe whether all repositories have been selected or there's a selection involved
 * @member {module:model/Installation.RepositorySelectionEnum} repository_selection
 */
Installation.prototype['repository_selection'] = undefined;

/**
 * @member {String} single_file_name
 */
Installation.prototype['single_file_name'] = undefined;

/**
 * @member {Date} suspended_at
 */
Installation.prototype['suspended_at'] = undefined;

/**
 * @member {module:model/SimpleUser} suspended_by
 */
Installation.prototype['suspended_by'] = undefined;

/**
 * The ID of the user or organization this token is being scoped to.
 * @member {Number} target_id
 */
Installation.prototype['target_id'] = undefined;

/**
 * @member {String} target_type
 */
Installation.prototype['target_type'] = undefined;

/**
 * @member {Date} updated_at
 */
Installation.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */
Installation['RepositorySelectionEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "selected"
     * @const
     */
    "selected": "selected"
};



export default Installation;

