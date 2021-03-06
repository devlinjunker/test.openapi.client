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
 * The CommitSearchResultItemCommitAuthor model module.
 * @module model/CommitSearchResultItemCommitAuthor
 * @version 0.0.5
 */
class CommitSearchResultItemCommitAuthor {
    /**
     * Constructs a new <code>CommitSearchResultItemCommitAuthor</code>.
     * @alias module:model/CommitSearchResultItemCommitAuthor
     * @param _date {Date} 
     * @param email {String} 
     * @param name {String} 
     */
    constructor(_date, email, name) { 
        
        CommitSearchResultItemCommitAuthor.initialize(this, _date, email, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _date, email, name) { 
        obj['date'] = _date;
        obj['email'] = email;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CommitSearchResultItemCommitAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitSearchResultItemCommitAuthor} obj Optional instance to populate.
     * @return {module:model/CommitSearchResultItemCommitAuthor} The populated <code>CommitSearchResultItemCommitAuthor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitSearchResultItemCommitAuthor();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} date
 */
CommitSearchResultItemCommitAuthor.prototype['date'] = undefined;

/**
 * @member {String} email
 */
CommitSearchResultItemCommitAuthor.prototype['email'] = undefined;

/**
 * @member {String} name
 */
CommitSearchResultItemCommitAuthor.prototype['name'] = undefined;






export default CommitSearchResultItemCommitAuthor;

