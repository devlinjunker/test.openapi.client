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
 * The InlineObject142 model module.
 * @module model/InlineObject142
 * @version 0.0.5
 */
class InlineObject142 {
    /**
     * Constructs a new <code>InlineObject142</code>.
     * @alias module:model/InlineObject142
     * @param repositories {Array.<String>} 
     */
    constructor(repositories) { 
        
        InlineObject142.initialize(this, repositories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositories) { 
        obj['repositories'] = repositories;
    }

    /**
     * Constructs a <code>InlineObject142</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject142} obj Optional instance to populate.
     * @return {module:model/InlineObject142} The populated <code>InlineObject142</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject142();

            if (data.hasOwnProperty('exclude')) {
                obj['exclude'] = ApiClient.convertToType(data['exclude'], ['String']);
            }
            if (data.hasOwnProperty('exclude_attachments')) {
                obj['exclude_attachments'] = ApiClient.convertToType(data['exclude_attachments'], 'Boolean');
            }
            if (data.hasOwnProperty('lock_repositories')) {
                obj['lock_repositories'] = ApiClient.convertToType(data['lock_repositories'], 'Boolean');
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Exclude attributes from the API response to improve performance
 * @member {Array.<module:model/InlineObject142.ExcludeEnum>} exclude
 */
InlineObject142.prototype['exclude'] = undefined;

/**
 * Do not include attachments in the migration
 * @member {Boolean} exclude_attachments
 */
InlineObject142.prototype['exclude_attachments'] = undefined;

/**
 * Lock the repositories being migrated at the start of the migration
 * @member {Boolean} lock_repositories
 */
InlineObject142.prototype['lock_repositories'] = undefined;

/**
 * @member {Array.<String>} repositories
 */
InlineObject142.prototype['repositories'] = undefined;





/**
 * Allowed values for the <code>exclude</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject142['ExcludeEnum'] = {

    /**
     * value: "repositories"
     * @const
     */
    "repositories": "repositories"
};



export default InlineObject142;
