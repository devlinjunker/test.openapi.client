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
import Repository from './Repository';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 0.0.5
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     */
    constructor() { 
        
        InlineResponse2001.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repository]);
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Repository>} repositories
 */
InlineResponse2001.prototype['repositories'] = undefined;

/**
 * @member {String} repository_selection
 */
InlineResponse2001.prototype['repository_selection'] = undefined;

/**
 * @member {Number} total_count
 */
InlineResponse2001.prototype['total_count'] = undefined;






export default InlineResponse2001;

