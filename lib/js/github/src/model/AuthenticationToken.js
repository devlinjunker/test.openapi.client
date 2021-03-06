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
import Repository from './Repository';

/**
 * The AuthenticationToken model module.
 * @module model/AuthenticationToken
 * @version 0.0.5
 */
class AuthenticationToken {
    /**
     * Constructs a new <code>AuthenticationToken</code>.
     * Authentication Token
     * @alias module:model/AuthenticationToken
     * @param expiresAt {Date} The time this token expires
     * @param token {String} The token used for authentication
     */
    constructor(expiresAt, token) { 
        
        AuthenticationToken.initialize(this, expiresAt, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expiresAt, token) { 
        obj['expires_at'] = expiresAt;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>AuthenticationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenticationToken} obj Optional instance to populate.
     * @return {module:model/AuthenticationToken} The populated <code>AuthenticationToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationToken();

            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], Object);
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repository]);
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('single_file')) {
                obj['single_file'] = ApiClient.convertToType(data['single_file'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The time this token expires
 * @member {Date} expires_at
 */
AuthenticationToken.prototype['expires_at'] = undefined;

/**
 * @member {Object} permissions
 */
AuthenticationToken.prototype['permissions'] = undefined;

/**
 * The repositories this token has access to
 * @member {Array.<module:model/Repository>} repositories
 */
AuthenticationToken.prototype['repositories'] = undefined;

/**
 * Describe whether all repositories have been selected or there's a selection involved
 * @member {module:model/AuthenticationToken.RepositorySelectionEnum} repository_selection
 */
AuthenticationToken.prototype['repository_selection'] = undefined;

/**
 * @member {String} single_file
 */
AuthenticationToken.prototype['single_file'] = undefined;

/**
 * The token used for authentication
 * @member {String} token
 */
AuthenticationToken.prototype['token'] = undefined;





/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */
AuthenticationToken['RepositorySelectionEnum'] = {

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



export default AuthenticationToken;

