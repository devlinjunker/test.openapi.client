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
import SimpleUser from './SimpleUser';

/**
 * The ScopedInstallation model module.
 * @module model/ScopedInstallation
 * @version 0.0.5
 */
class ScopedInstallation {
    /**
     * Constructs a new <code>ScopedInstallation</code>.
     * @alias module:model/ScopedInstallation
     * @param account {module:model/SimpleUser} 
     * @param permissions {Object} 
     * @param repositoriesUrl {String} 
     * @param repositorySelection {module:model/ScopedInstallation.RepositorySelectionEnum} Describe whether all repositories have been selected or there's a selection involved
     * @param singleFileName {String} 
     */
    constructor(account, permissions, repositoriesUrl, repositorySelection, singleFileName) { 
        
        ScopedInstallation.initialize(this, account, permissions, repositoriesUrl, repositorySelection, singleFileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, permissions, repositoriesUrl, repositorySelection, singleFileName) { 
        obj['account'] = account;
        obj['permissions'] = permissions;
        obj['repositories_url'] = repositoriesUrl;
        obj['repository_selection'] = repositorySelection;
        obj['single_file_name'] = singleFileName;
    }

    /**
     * Constructs a <code>ScopedInstallation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScopedInstallation} obj Optional instance to populate.
     * @return {module:model/ScopedInstallation} The populated <code>ScopedInstallation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScopedInstallation();

            if (data.hasOwnProperty('account')) {
                obj['account'] = SimpleUser.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], Object);
            }
            if (data.hasOwnProperty('repositories_url')) {
                obj['repositories_url'] = ApiClient.convertToType(data['repositories_url'], 'String');
            }
            if (data.hasOwnProperty('repository_selection')) {
                obj['repository_selection'] = ApiClient.convertToType(data['repository_selection'], 'String');
            }
            if (data.hasOwnProperty('single_file_name')) {
                obj['single_file_name'] = ApiClient.convertToType(data['single_file_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SimpleUser} account
 */
ScopedInstallation.prototype['account'] = undefined;

/**
 * @member {Object} permissions
 */
ScopedInstallation.prototype['permissions'] = undefined;

/**
 * @member {String} repositories_url
 */
ScopedInstallation.prototype['repositories_url'] = undefined;

/**
 * Describe whether all repositories have been selected or there's a selection involved
 * @member {module:model/ScopedInstallation.RepositorySelectionEnum} repository_selection
 */
ScopedInstallation.prototype['repository_selection'] = undefined;

/**
 * @member {String} single_file_name
 */
ScopedInstallation.prototype['single_file_name'] = undefined;





/**
 * Allowed values for the <code>repository_selection</code> property.
 * @enum {String}
 * @readonly
 */
ScopedInstallation['RepositorySelectionEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "selected"
     * @const
     */
    "selected": "selected"
};



export default ScopedInstallation;

