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
 * The InlineObject79 model module.
 * @module model/InlineObject79
 * @version 0.0.5
 */
class InlineObject79 {
    /**
     * Constructs a new <code>InlineObject79</code>.
     * @alias module:model/InlineObject79
     */
    constructor() { 
        
        InlineObject79.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject79</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject79} obj Optional instance to populate.
     * @return {module:model/InlineObject79} The populated <code>InlineObject79</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject79();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
 * @member {module:model/InlineObject79.PermissionsEnum} permissions
 */
InlineObject79.prototype['permissions'] = undefined;





/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject79['PermissionsEnum'] = {

    /**
     * value: "read"
     * @const
     */
    "read": "read",

    /**
     * value: "write"
     * @const
     */
    "write": "write",

    /**
     * value: "maintain"
     * @const
     */
    "maintain": "maintain",

    /**
     * value: "triage"
     * @const
     */
    "triage": "triage",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin"
};



export default InlineObject79;

