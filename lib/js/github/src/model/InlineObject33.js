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
 * The InlineObject33 model module.
 * @module model/InlineObject33
 * @version 0.0.5
 */
class InlineObject33 {
    /**
     * Constructs a new <code>InlineObject33</code>.
     * @alias module:model/InlineObject33
     * @param content {module:model/InlineObject33.ContentEnum} The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.
     */
    constructor(content) { 
        
        InlineObject33.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>InlineObject33</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject33} obj Optional instance to populate.
     * @return {module:model/InlineObject33} The populated <code>InlineObject33</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject33();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.
 * @member {module:model/InlineObject33.ContentEnum} content
 */
InlineObject33.prototype['content'] = undefined;





/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject33['ContentEnum'] = {

    /**
     * value: "+1"
     * @const
     */
    "+1": "+1",

    /**
     * value: "-1"
     * @const
     */
    "-1": "-1",

    /**
     * value: "laugh"
     * @const
     */
    "laugh": "laugh",

    /**
     * value: "confused"
     * @const
     */
    "confused": "confused",

    /**
     * value: "heart"
     * @const
     */
    "heart": "heart",

    /**
     * value: "hooray"
     * @const
     */
    "hooray": "hooray",

    /**
     * value: "rocket"
     * @const
     */
    "rocket": "rocket",

    /**
     * value: "eyes"
     * @const
     */
    "eyes": "eyes"
};



export default InlineObject33;

