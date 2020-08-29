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
 * The InlineObject137 model module.
 * @module model/InlineObject137
 * @version 0.0.5
 */
class InlineObject137 {
    /**
     * Constructs a new <code>InlineObject137</code>.
     * @alias module:model/InlineObject137
     */
    constructor() { 
        
        InlineObject137.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject137</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject137} obj Optional instance to populate.
     * @return {module:model/InlineObject137} The populated <code>InlineObject137</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject137();

            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('blog')) {
                obj['blog'] = ApiClient.convertToType(data['blog'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('hireable')) {
                obj['hireable'] = ApiClient.convertToType(data['hireable'], 'Boolean');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('twitter_username')) {
                obj['twitter_username'] = ApiClient.convertToType(data['twitter_username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The new short biography of the user.
 * @member {String} bio
 */
InlineObject137.prototype['bio'] = undefined;

/**
 * The new blog URL of the user.
 * @member {String} blog
 */
InlineObject137.prototype['blog'] = undefined;

/**
 * The new company of the user.
 * @member {String} company
 */
InlineObject137.prototype['company'] = undefined;

/**
 * The publicly visible email address of the user.
 * @member {String} email
 */
InlineObject137.prototype['email'] = undefined;

/**
 * The new hiring availability of the user.
 * @member {Boolean} hireable
 */
InlineObject137.prototype['hireable'] = undefined;

/**
 * The new location of the user.
 * @member {String} location
 */
InlineObject137.prototype['location'] = undefined;

/**
 * The new name of the user.
 * @member {String} name
 */
InlineObject137.prototype['name'] = undefined;

/**
 * The new Twitter username of the user.
 * @member {String} twitter_username
 */
InlineObject137.prototype['twitter_username'] = undefined;






export default InlineObject137;
