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
import BranchRestrictionPolicyOwner from './BranchRestrictionPolicyOwner';
import BranchRestrictionPolicyPermissions from './BranchRestrictionPolicyPermissions';

/**
 * The BranchRestrictionPolicyApps model module.
 * @module model/BranchRestrictionPolicyApps
 * @version 0.0.5
 */
class BranchRestrictionPolicyApps {
    /**
     * Constructs a new <code>BranchRestrictionPolicyApps</code>.
     * @alias module:model/BranchRestrictionPolicyApps
     */
    constructor() { 
        
        BranchRestrictionPolicyApps.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchRestrictionPolicyApps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchRestrictionPolicyApps} obj Optional instance to populate.
     * @return {module:model/BranchRestrictionPolicyApps} The populated <code>BranchRestrictionPolicyApps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchRestrictionPolicyApps();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('external_url')) {
                obj['external_url'] = ApiClient.convertToType(data['external_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = BranchRestrictionPolicyOwner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = BranchRestrictionPolicyPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
BranchRestrictionPolicyApps.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
BranchRestrictionPolicyApps.prototype['description'] = undefined;

/**
 * @member {Array.<String>} events
 */
BranchRestrictionPolicyApps.prototype['events'] = undefined;

/**
 * @member {String} external_url
 */
BranchRestrictionPolicyApps.prototype['external_url'] = undefined;

/**
 * @member {String} html_url
 */
BranchRestrictionPolicyApps.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
BranchRestrictionPolicyApps.prototype['id'] = undefined;

/**
 * @member {String} name
 */
BranchRestrictionPolicyApps.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
BranchRestrictionPolicyApps.prototype['node_id'] = undefined;

/**
 * @member {module:model/BranchRestrictionPolicyOwner} owner
 */
BranchRestrictionPolicyApps.prototype['owner'] = undefined;

/**
 * @member {module:model/BranchRestrictionPolicyPermissions} permissions
 */
BranchRestrictionPolicyApps.prototype['permissions'] = undefined;

/**
 * @member {String} slug
 */
BranchRestrictionPolicyApps.prototype['slug'] = undefined;

/**
 * @member {String} updated_at
 */
BranchRestrictionPolicyApps.prototype['updated_at'] = undefined;






export default BranchRestrictionPolicyApps;

