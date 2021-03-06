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
 * The InlineObject122 model module.
 * @module model/InlineObject122
 * @version 0.0.5
 */
class InlineObject122 {
    /**
     * Constructs a new <code>InlineObject122</code>.
     * @alias module:model/InlineObject122
     * @param name {String} The name of the new repository.
     */
    constructor(name) { 
        
        InlineObject122.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineObject122</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject122} obj Optional instance to populate.
     * @return {module:model/InlineObject122} The populated <code>InlineObject122</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject122();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A short description of the new repository.
 * @member {String} description
 */
InlineObject122.prototype['description'] = undefined;

/**
 * The name of the new repository.
 * @member {String} name
 */
InlineObject122.prototype['name'] = undefined;

/**
 * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
 * @member {String} owner
 */
InlineObject122.prototype['owner'] = undefined;

/**
 * Either `true` to create a new private repository or `false` to create a new public one.
 * @member {Boolean} private
 * @default false
 */
InlineObject122.prototype['private'] = false;






export default InlineObject122;

