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
import OrgMembershipPermissions from './OrgMembershipPermissions';
import OrganizationSimple from './OrganizationSimple';
import SimpleUser from './SimpleUser';

/**
 * The OrgMembership model module.
 * @module model/OrgMembership
 * @version 0.0.5
 */
class OrgMembership {
    /**
     * Constructs a new <code>OrgMembership</code>.
     * Org Membership
     * @alias module:model/OrgMembership
     * @param organization {module:model/OrganizationSimple} 
     * @param organizationUrl {String} 
     * @param role {String} 
     * @param state {String} 
     * @param url {String} 
     * @param user {module:model/SimpleUser} 
     */
    constructor(organization, organizationUrl, role, state, url, user) { 
        
        OrgMembership.initialize(this, organization, organizationUrl, role, state, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, organization, organizationUrl, role, state, url, user) { 
        obj['organization'] = organization;
        obj['organization_url'] = organizationUrl;
        obj['role'] = role;
        obj['state'] = state;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>OrgMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgMembership} obj Optional instance to populate.
     * @return {module:model/OrgMembership} The populated <code>OrgMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrgMembership();

            if (data.hasOwnProperty('organization')) {
                obj['organization'] = OrganizationSimple.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('organization_url')) {
                obj['organization_url'] = ApiClient.convertToType(data['organization_url'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = OrgMembershipPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], SimpleUser);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OrganizationSimple} organization
 */
OrgMembership.prototype['organization'] = undefined;

/**
 * @member {String} organization_url
 */
OrgMembership.prototype['organization_url'] = undefined;

/**
 * @member {module:model/OrgMembershipPermissions} permissions
 */
OrgMembership.prototype['permissions'] = undefined;

/**
 * @member {String} role
 */
OrgMembership.prototype['role'] = undefined;

/**
 * @member {String} state
 */
OrgMembership.prototype['state'] = undefined;

/**
 * @member {String} url
 */
OrgMembership.prototype['url'] = undefined;

/**
 * @member {module:model/SimpleUser} user
 */
OrgMembership.prototype['user'] = undefined;






export default OrgMembership;
