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
 * The InlineObject64 model module.
 * @module model/InlineObject64
 * @version 0.0.5
 */
class InlineObject64 {
    /**
     * Constructs a new <code>InlineObject64</code>.
     * @alias module:model/InlineObject64
     */
    constructor() { 
        
        InlineObject64.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject64</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject64} obj Optional instance to populate.
     * @return {module:model/InlineObject64} The populated <code>InlineObject64</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject64();

            if (data.hasOwnProperty('client_payload')) {
                obj['client_payload'] = ApiClient.convertToType(data['client_payload'], {'String': Object});
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * JSON payload with extra information about the webhook event that your action or worklow may use.
 * @member {Object.<String, Object>} client_payload
 */
InlineObject64.prototype['client_payload'] = undefined;

/**
 * **Required:** A custom webhook event name.
 * @member {String} event_type
 */
InlineObject64.prototype['event_type'] = undefined;






export default InlineObject64;

