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
 * The InlineObject127 model module.
 * @module model/InlineObject127
 * @version 0.0.5
 */
class InlineObject127 {
    /**
     * Constructs a new <code>InlineObject127</code>.
     * @alias module:model/InlineObject127
     * @param body {String} The discussion post's body text.
     * @param title {String} The discussion post's title.
     */
    constructor(body, title) { 
        
        InlineObject127.initialize(this, body, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, title) { 
        obj['body'] = body;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>InlineObject127</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject127} obj Optional instance to populate.
     * @return {module:model/InlineObject127} The populated <code>InlineObject127</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject127();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The discussion post's body text.
 * @member {String} body
 */
InlineObject127.prototype['body'] = undefined;

/**
 * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
 * @member {Boolean} private
 * @default false
 */
InlineObject127.prototype['private'] = false;

/**
 * The discussion post's title.
 * @member {String} title
 */
InlineObject127.prototype['title'] = undefined;






export default InlineObject127;
