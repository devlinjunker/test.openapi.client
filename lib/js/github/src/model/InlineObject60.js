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
import ReposOwnerRepoContentsPathAuthor from './ReposOwnerRepoContentsPathAuthor';
import ReposOwnerRepoContentsPathCommitter from './ReposOwnerRepoContentsPathCommitter';

/**
 * The InlineObject60 model module.
 * @module model/InlineObject60
 * @version 0.0.5
 */
class InlineObject60 {
    /**
     * Constructs a new <code>InlineObject60</code>.
     * @alias module:model/InlineObject60
     * @param content {String} The new file content, using Base64 encoding.
     * @param message {String} The commit message.
     */
    constructor(content, message) { 
        
        InlineObject60.initialize(this, content, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content, message) { 
        obj['content'] = content;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>InlineObject60</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject60} obj Optional instance to populate.
     * @return {module:model/InlineObject60} The populated <code>InlineObject60</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject60();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ReposOwnerRepoContentsPathAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = ReposOwnerRepoContentsPathCommitter.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReposOwnerRepoContentsPathAuthor} author
 */
InlineObject60.prototype['author'] = undefined;

/**
 * The branch name. Default: the repository’s default branch (usually `master`)
 * @member {String} branch
 */
InlineObject60.prototype['branch'] = undefined;

/**
 * @member {module:model/ReposOwnerRepoContentsPathCommitter} committer
 */
InlineObject60.prototype['committer'] = undefined;

/**
 * The new file content, using Base64 encoding.
 * @member {String} content
 */
InlineObject60.prototype['content'] = undefined;

/**
 * The commit message.
 * @member {String} message
 */
InlineObject60.prototype['message'] = undefined;

/**
 * **Required if you are updating a file**. The blob SHA of the file being replaced.
 * @member {String} sha
 */
InlineObject60.prototype['sha'] = undefined;






export default InlineObject60;
