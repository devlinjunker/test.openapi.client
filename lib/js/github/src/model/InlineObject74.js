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
 * The InlineObject74 model module.
 * @module model/InlineObject74
 * @version 0.0.5
 */
class InlineObject74 {
    /**
     * Constructs a new <code>InlineObject74</code>.
     * @alias module:model/InlineObject74
     * @param vcsUrl {String} The URL of the originating repository.
     */
    constructor(vcsUrl) { 
        
        InlineObject74.initialize(this, vcsUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, vcsUrl) { 
        obj['vcs_url'] = vcsUrl;
    }

    /**
     * Constructs a <code>InlineObject74</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject74} obj Optional instance to populate.
     * @return {module:model/InlineObject74} The populated <code>InlineObject74</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject74();

            if (data.hasOwnProperty('tfvc_project')) {
                obj['tfvc_project'] = ApiClient.convertToType(data['tfvc_project'], 'String');
            }
            if (data.hasOwnProperty('vcs')) {
                obj['vcs'] = ApiClient.convertToType(data['vcs'], 'String');
            }
            if (data.hasOwnProperty('vcs_password')) {
                obj['vcs_password'] = ApiClient.convertToType(data['vcs_password'], 'String');
            }
            if (data.hasOwnProperty('vcs_url')) {
                obj['vcs_url'] = ApiClient.convertToType(data['vcs_url'], 'String');
            }
            if (data.hasOwnProperty('vcs_username')) {
                obj['vcs_username'] = ApiClient.convertToType(data['vcs_username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * For a tfvc import, the name of the project that is being imported.
 * @member {String} tfvc_project
 */
InlineObject74.prototype['tfvc_project'] = undefined;

/**
 * The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @member {module:model/InlineObject74.VcsEnum} vcs
 */
InlineObject74.prototype['vcs'] = undefined;

/**
 * If authentication is required, the password to provide to `vcs_url`.
 * @member {String} vcs_password
 */
InlineObject74.prototype['vcs_password'] = undefined;

/**
 * The URL of the originating repository.
 * @member {String} vcs_url
 */
InlineObject74.prototype['vcs_url'] = undefined;

/**
 * If authentication is required, the username to provide to `vcs_url`.
 * @member {String} vcs_username
 */
InlineObject74.prototype['vcs_username'] = undefined;





/**
 * Allowed values for the <code>vcs</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject74['VcsEnum'] = {

    /**
     * value: "subversion"
     * @const
     */
    "subversion": "subversion",

    /**
     * value: "git"
     * @const
     */
    "git": "git",

    /**
     * value: "mercurial"
     * @const
     */
    "mercurial": "mercurial",

    /**
     * value: "tfvc"
     * @const
     */
    "tfvc": "tfvc"
};



export default InlineObject74;
