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
 * The InlineObject78 model module.
 * @module model/InlineObject78
 * @version 0.0.5
 */
class InlineObject78 {
    /**
     * Constructs a new <code>InlineObject78</code>.
     * @alias module:model/InlineObject78
     * @param limit {module:model/InlineObject78.LimitEnum} Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
     */
    constructor(limit) { 
        
        InlineObject78.initialize(this, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit) { 
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>InlineObject78</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject78} obj Optional instance to populate.
     * @return {module:model/InlineObject78} The populated <code>InlineObject78</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject78();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
 * @member {module:model/InlineObject78.LimitEnum} limit
 */
InlineObject78.prototype['limit'] = undefined;





/**
 * Allowed values for the <code>limit</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject78['LimitEnum'] = {

    /**
     * value: "existing_users"
     * @const
     */
    "existing_users": "existing_users",

    /**
     * value: "contributors_only"
     * @const
     */
    "contributors_only": "contributors_only",

    /**
     * value: "collaborators_only"
     * @const
     */
    "collaborators_only": "collaborators_only"
};



export default InlineObject78;
