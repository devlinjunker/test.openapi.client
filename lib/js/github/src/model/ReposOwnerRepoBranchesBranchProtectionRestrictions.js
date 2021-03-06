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
 * The ReposOwnerRepoBranchesBranchProtectionRestrictions model module.
 * @module model/ReposOwnerRepoBranchesBranchProtectionRestrictions
 * @version 0.0.5
 */
class ReposOwnerRepoBranchesBranchProtectionRestrictions {
    /**
     * Constructs a new <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code>.
     * Restrict who can push to the protected branch. User, app, and team &#x60;restrictions&#x60; are only available for organization-owned repositories. Set to &#x60;null&#x60; to disable.
     * @alias module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions
     * @param teams {Array.<String>} The list of team `slug`s with push access
     * @param users {Array.<String>} The list of user `login`s with push access
     */
    constructor(teams, users) { 
        
        ReposOwnerRepoBranchesBranchProtectionRestrictions.initialize(this, teams, users);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, teams, users) { 
        obj['teams'] = teams;
        obj['users'] = users;
    }

    /**
     * Constructs a <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoBranchesBranchProtectionRestrictions} The populated <code>ReposOwnerRepoBranchesBranchProtectionRestrictions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReposOwnerRepoBranchesBranchProtectionRestrictions();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], ['String']);
            }
            if (data.hasOwnProperty('teams')) {
                obj['teams'] = ApiClient.convertToType(data['teams'], ['String']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The list of app `slug`s with push access
 * @member {Array.<String>} apps
 */
ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['apps'] = undefined;

/**
 * The list of team `slug`s with push access
 * @member {Array.<String>} teams
 */
ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['teams'] = undefined;

/**
 * The list of user `login`s with push access
 * @member {Array.<String>} users
 */
ReposOwnerRepoBranchesBranchProtectionRestrictions.prototype['users'] = undefined;






export default ReposOwnerRepoBranchesBranchProtectionRestrictions;

