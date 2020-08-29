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
 * The InlineObject106 model module.
 * @module model/InlineObject106
 * @version 0.0.5
 */
class InlineObject106 {
    /**
     * Constructs a new <code>InlineObject106</code>.
     * @alias module:model/InlineObject106
     * @param body {String} The text of the review comment.
     */
    constructor(body) { 
        
        InlineObject106.initialize(this, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body) { 
        obj['body'] = body;
    }

    /**
     * Constructs a <code>InlineObject106</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject106} obj Optional instance to populate.
     * @return {module:model/InlineObject106} The populated <code>InlineObject106</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject106();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The text of the review comment.
 * @member {String} body
 */
InlineObject106.prototype['body'] = undefined;






export default InlineObject106;
