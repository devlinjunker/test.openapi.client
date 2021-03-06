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
import AppInstallationsInstallationIdAccessTokensPermissions from './AppInstallationsInstallationIdAccessTokensPermissions';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 0.0.5
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     */
    constructor() { 
        
        InlineObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = AppInstallationsInstallationIdAccessTokensPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], ['String']);
            }
            if (data.hasOwnProperty('repository_ids')) {
                obj['repository_ids'] = ApiClient.convertToType(data['repository_ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AppInstallationsInstallationIdAccessTokensPermissions} permissions
 */
InlineObject.prototype['permissions'] = undefined;

/**
 * List of repository names that the token should have access to
 * @member {Array.<String>} repositories
 */
InlineObject.prototype['repositories'] = undefined;

/**
 * List of repository IDs that the token should have access to
 * @member {Array.<Number>} repository_ids
 */
InlineObject.prototype['repository_ids'] = undefined;






export default InlineObject;

