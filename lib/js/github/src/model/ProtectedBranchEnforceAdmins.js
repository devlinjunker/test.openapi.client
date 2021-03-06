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

/**
 * The ProtectedBranchEnforceAdmins model module.
 * @module model/ProtectedBranchEnforceAdmins
 * @version 0.0.5
 */
class ProtectedBranchEnforceAdmins {
    /**
     * Constructs a new <code>ProtectedBranchEnforceAdmins</code>.
     * @alias module:model/ProtectedBranchEnforceAdmins
     * @param enabled {Boolean} 
     * @param url {String} 
     */
    constructor(enabled, url) { 
        
        ProtectedBranchEnforceAdmins.initialize(this, enabled, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, url) { 
        obj['enabled'] = enabled;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ProtectedBranchEnforceAdmins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchEnforceAdmins} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchEnforceAdmins} The populated <code>ProtectedBranchEnforceAdmins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProtectedBranchEnforceAdmins();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
ProtectedBranchEnforceAdmins.prototype['enabled'] = undefined;

/**
 * @member {String} url
 */
ProtectedBranchEnforceAdmins.prototype['url'] = undefined;






export default ProtectedBranchEnforceAdmins;

