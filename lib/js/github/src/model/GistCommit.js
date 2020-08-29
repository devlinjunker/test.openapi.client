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
import CommitStats from './CommitStats';
import SimpleUser from './SimpleUser';

/**
 * The GistCommit model module.
 * @module model/GistCommit
 * @version 0.0.5
 */
class GistCommit {
    /**
     * Constructs a new <code>GistCommit</code>.
     * Gist Commit
     * @alias module:model/GistCommit
     * @param changeStatus {module:model/CommitStats} 
     * @param committedAt {Date} 
     * @param url {String} 
     * @param user {module:model/SimpleUser} 
     * @param version {String} 
     */
    constructor(changeStatus, committedAt, url, user, version) { 
        
        GistCommit.initialize(this, changeStatus, committedAt, url, user, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, changeStatus, committedAt, url, user, version) { 
        obj['change_status'] = changeStatus;
        obj['committed_at'] = committedAt;
        obj['url'] = url;
        obj['user'] = user;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>GistCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistCommit} obj Optional instance to populate.
     * @return {module:model/GistCommit} The populated <code>GistCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GistCommit();

            if (data.hasOwnProperty('change_status')) {
                obj['change_status'] = CommitStats.constructFromObject(data['change_status']);
            }
            if (data.hasOwnProperty('committed_at')) {
                obj['committed_at'] = ApiClient.convertToType(data['committed_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], SimpleUser);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CommitStats} change_status
 */
GistCommit.prototype['change_status'] = undefined;

/**
 * @member {Date} committed_at
 */
GistCommit.prototype['committed_at'] = undefined;

/**
 * @member {String} url
 */
GistCommit.prototype['url'] = undefined;

/**
 * @member {module:model/SimpleUser} user
 */
GistCommit.prototype['user'] = undefined;

/**
 * @member {String} version
 */
GistCommit.prototype['version'] = undefined;






export default GistCommit;
