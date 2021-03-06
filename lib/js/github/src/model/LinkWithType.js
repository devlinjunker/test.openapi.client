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
 * The LinkWithType model module.
 * @module model/LinkWithType
 * @version 0.0.5
 */
class LinkWithType {
    /**
     * Constructs a new <code>LinkWithType</code>.
     * Hypermedia Link with Type
     * @alias module:model/LinkWithType
     * @param href {String} 
     * @param type {String} 
     */
    constructor(href, type) { 
        
        LinkWithType.initialize(this, href, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href, type) { 
        obj['href'] = href;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>LinkWithType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkWithType} obj Optional instance to populate.
     * @return {module:model/LinkWithType} The populated <code>LinkWithType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkWithType();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} href
 */
LinkWithType.prototype['href'] = undefined;

/**
 * @member {String} type
 */
LinkWithType.prototype['type'] = undefined;






export default LinkWithType;

