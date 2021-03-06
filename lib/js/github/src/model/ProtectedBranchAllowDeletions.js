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
 * The ProtectedBranchAllowDeletions model module.
 * @module model/ProtectedBranchAllowDeletions
 * @version 0.0.5
 */
class ProtectedBranchAllowDeletions {
    /**
     * Constructs a new <code>ProtectedBranchAllowDeletions</code>.
     * @alias module:model/ProtectedBranchAllowDeletions
     * @param enabled {Boolean} 
     */
    constructor(enabled) { 
        
        ProtectedBranchAllowDeletions.initialize(this, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled) { 
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>ProtectedBranchAllowDeletions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchAllowDeletions} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchAllowDeletions} The populated <code>ProtectedBranchAllowDeletions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProtectedBranchAllowDeletions();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
ProtectedBranchAllowDeletions.prototype['enabled'] = undefined;






export default ProtectedBranchAllowDeletions;

