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
 * The InlineObject54 model module.
 * @module model/InlineObject54
 * @version 0.0.5
 */
class InlineObject54 {
    /**
     * Constructs a new <code>InlineObject54</code>.
     * @alias module:model/InlineObject54
     * @param headSha {String} The sha of the head commit.
     */
    constructor(headSha) { 
        
        InlineObject54.initialize(this, headSha);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, headSha) { 
        obj['head_sha'] = headSha;
    }

    /**
     * Constructs a <code>InlineObject54</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject54} obj Optional instance to populate.
     * @return {module:model/InlineObject54} The populated <code>InlineObject54</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject54();

            if (data.hasOwnProperty('head_sha')) {
                obj['head_sha'] = ApiClient.convertToType(data['head_sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The sha of the head commit.
 * @member {String} head_sha
 */
InlineObject54.prototype['head_sha'] = undefined;






export default InlineObject54;

