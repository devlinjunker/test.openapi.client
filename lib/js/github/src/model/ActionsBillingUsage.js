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
import ActionsBillingUsageMinutesUsedBreakdown from './ActionsBillingUsageMinutesUsedBreakdown';

/**
 * The ActionsBillingUsage model module.
 * @module model/ActionsBillingUsage
 * @version 0.0.5
 */
class ActionsBillingUsage {
    /**
     * Constructs a new <code>ActionsBillingUsage</code>.
     * @alias module:model/ActionsBillingUsage
     */
    constructor() { 
        
        ActionsBillingUsage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionsBillingUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsBillingUsage} obj Optional instance to populate.
     * @return {module:model/ActionsBillingUsage} The populated <code>ActionsBillingUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionsBillingUsage();

            if (data.hasOwnProperty('included_minutes')) {
                obj['included_minutes'] = ApiClient.convertToType(data['included_minutes'], 'Number');
            }
            if (data.hasOwnProperty('minutes_used_breakdown')) {
                obj['minutes_used_breakdown'] = ActionsBillingUsageMinutesUsedBreakdown.constructFromObject(data['minutes_used_breakdown']);
            }
            if (data.hasOwnProperty('total_minutes_used')) {
                obj['total_minutes_used'] = ApiClient.convertToType(data['total_minutes_used'], 'Number');
            }
            if (data.hasOwnProperty('total_paid_minutes_used')) {
                obj['total_paid_minutes_used'] = ApiClient.convertToType(data['total_paid_minutes_used'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The amount of free GitHub Actions minutes available.
 * @member {Number} included_minutes
 */
ActionsBillingUsage.prototype['included_minutes'] = undefined;

/**
 * @member {module:model/ActionsBillingUsageMinutesUsedBreakdown} minutes_used_breakdown
 */
ActionsBillingUsage.prototype['minutes_used_breakdown'] = undefined;

/**
 * The sum of the free and paid GitHub Actions minutes used.
 * @member {Number} total_minutes_used
 */
ActionsBillingUsage.prototype['total_minutes_used'] = undefined;

/**
 * The total paid GitHub Actions minutes used.
 * @member {Number} total_paid_minutes_used
 */
ActionsBillingUsage.prototype['total_paid_minutes_used'] = undefined;






export default ActionsBillingUsage;
