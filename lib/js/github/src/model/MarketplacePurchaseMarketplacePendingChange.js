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
import MarketplaceListingPlan from './MarketplaceListingPlan';

/**
 * The MarketplacePurchaseMarketplacePendingChange model module.
 * @module model/MarketplacePurchaseMarketplacePendingChange
 * @version 0.0.5
 */
class MarketplacePurchaseMarketplacePendingChange {
    /**
     * Constructs a new <code>MarketplacePurchaseMarketplacePendingChange</code>.
     * @alias module:model/MarketplacePurchaseMarketplacePendingChange
     */
    constructor() { 
        
        MarketplacePurchaseMarketplacePendingChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketplacePurchaseMarketplacePendingChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplacePurchaseMarketplacePendingChange} obj Optional instance to populate.
     * @return {module:model/MarketplacePurchaseMarketplacePendingChange} The populated <code>MarketplacePurchaseMarketplacePendingChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketplacePurchaseMarketplacePendingChange();

            if (data.hasOwnProperty('effective_date')) {
                obj['effective_date'] = ApiClient.convertToType(data['effective_date'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_installed')) {
                obj['is_installed'] = ApiClient.convertToType(data['is_installed'], 'Boolean');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = MarketplaceListingPlan.constructFromObject(data['plan']);
            }
            if (data.hasOwnProperty('unit_count')) {
                obj['unit_count'] = ApiClient.convertToType(data['unit_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} effective_date
 */
MarketplacePurchaseMarketplacePendingChange.prototype['effective_date'] = undefined;

/**
 * @member {Number} id
 */
MarketplacePurchaseMarketplacePendingChange.prototype['id'] = undefined;

/**
 * @member {Boolean} is_installed
 */
MarketplacePurchaseMarketplacePendingChange.prototype['is_installed'] = undefined;

/**
 * @member {module:model/MarketplaceListingPlan} plan
 */
MarketplacePurchaseMarketplacePendingChange.prototype['plan'] = undefined;

/**
 * @member {Number} unit_count
 */
MarketplacePurchaseMarketplacePendingChange.prototype['unit_count'] = undefined;






export default MarketplacePurchaseMarketplacePendingChange;

