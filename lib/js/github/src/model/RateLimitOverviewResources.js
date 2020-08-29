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
import RateLimit from './RateLimit';

/**
 * The RateLimitOverviewResources model module.
 * @module model/RateLimitOverviewResources
 * @version 0.0.5
 */
class RateLimitOverviewResources {
    /**
     * Constructs a new <code>RateLimitOverviewResources</code>.
     * @alias module:model/RateLimitOverviewResources
     * @param core {module:model/RateLimit} 
     * @param search {module:model/RateLimit} 
     */
    constructor(core, search) { 
        
        RateLimitOverviewResources.initialize(this, core, search);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, core, search) { 
        obj['core'] = core;
        obj['search'] = search;
    }

    /**
     * Constructs a <code>RateLimitOverviewResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimitOverviewResources} obj Optional instance to populate.
     * @return {module:model/RateLimitOverviewResources} The populated <code>RateLimitOverviewResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimitOverviewResources();

            if (data.hasOwnProperty('core')) {
                obj['core'] = RateLimit.constructFromObject(data['core']);
            }
            if (data.hasOwnProperty('graphql')) {
                obj['graphql'] = RateLimit.constructFromObject(data['graphql']);
            }
            if (data.hasOwnProperty('integration_manifest')) {
                obj['integration_manifest'] = RateLimit.constructFromObject(data['integration_manifest']);
            }
            if (data.hasOwnProperty('search')) {
                obj['search'] = RateLimit.constructFromObject(data['search']);
            }
            if (data.hasOwnProperty('source_import')) {
                obj['source_import'] = RateLimit.constructFromObject(data['source_import']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RateLimit} core
 */
RateLimitOverviewResources.prototype['core'] = undefined;

/**
 * @member {module:model/RateLimit} graphql
 */
RateLimitOverviewResources.prototype['graphql'] = undefined;

/**
 * @member {module:model/RateLimit} integration_manifest
 */
RateLimitOverviewResources.prototype['integration_manifest'] = undefined;

/**
 * @member {module:model/RateLimit} search
 */
RateLimitOverviewResources.prototype['search'] = undefined;

/**
 * @member {module:model/RateLimit} source_import
 */
RateLimitOverviewResources.prototype['source_import'] = undefined;






export default RateLimitOverviewResources;
