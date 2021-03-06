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
 * The EventPayloadPages model module.
 * @module model/EventPayloadPages
 * @version 0.0.5
 */
class EventPayloadPages {
    /**
     * Constructs a new <code>EventPayloadPages</code>.
     * @alias module:model/EventPayloadPages
     */
    constructor() { 
        
        EventPayloadPages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventPayloadPages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventPayloadPages} obj Optional instance to populate.
     * @return {module:model/EventPayloadPages} The populated <code>EventPayloadPages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventPayloadPages();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('page_name')) {
                obj['page_name'] = ApiClient.convertToType(data['page_name'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} action
 */
EventPayloadPages.prototype['action'] = undefined;

/**
 * @member {String} html_url
 */
EventPayloadPages.prototype['html_url'] = undefined;

/**
 * @member {String} page_name
 */
EventPayloadPages.prototype['page_name'] = undefined;

/**
 * @member {String} sha
 */
EventPayloadPages.prototype['sha'] = undefined;

/**
 * @member {String} summary
 */
EventPayloadPages.prototype['summary'] = undefined;

/**
 * @member {String} title
 */
EventPayloadPages.prototype['title'] = undefined;






export default EventPayloadPages;

