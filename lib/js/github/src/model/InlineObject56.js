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
 * The InlineObject56 model module.
 * @module model/InlineObject56
 * @version 0.0.5
 */
class InlineObject56 {
    /**
     * Constructs a new <code>InlineObject56</code>.
     * @alias module:model/InlineObject56
     */
    constructor() { 
        
        InlineObject56.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject56</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject56} obj Optional instance to populate.
     * @return {module:model/InlineObject56} The populated <code>InlineObject56</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject56();

            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:   \\* `pull` - can pull, but not push to or administer this repository.   \\* `push` - can pull and push, but not administer this repository.   \\* `admin` - can pull, push and administer this repository.   \\* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.   \\* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
 * @member {module:model/InlineObject56.PermissionEnum} permission
 * @default 'push'
 */
InlineObject56.prototype['permission'] = 'push';

/**
 * @member {String} permissions
 */
InlineObject56.prototype['permissions'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject56['PermissionEnum'] = {

    /**
     * value: "pull"
     * @const
     */
    "pull": "pull",

    /**
     * value: "push"
     * @const
     */
    "push": "push",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "maintain"
     * @const
     */
    "maintain": "maintain",

    /**
     * value: "triage"
     * @const
     */
    "triage": "triage"
};



export default InlineObject56;

