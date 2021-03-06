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
import ReactionRollup from './ReactionRollup';
import SimpleUser from './SimpleUser';

/**
 * The CommitComment model module.
 * @module model/CommitComment
 * @version 0.0.5
 */
class CommitComment {
    /**
     * Constructs a new <code>CommitComment</code>.
     * Commit Comment
     * @alias module:model/CommitComment
     * @param authorAssociation {String} 
     * @param body {String} 
     * @param commitId {String} 
     * @param createdAt {Date} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param line {Number} 
     * @param nodeId {String} 
     * @param path {String} 
     * @param position {Number} 
     * @param updatedAt {Date} 
     * @param url {String} 
     * @param user {module:model/SimpleUser} 
     */
    constructor(authorAssociation, body, commitId, createdAt, htmlUrl, id, line, nodeId, path, position, updatedAt, url, user) { 
        
        CommitComment.initialize(this, authorAssociation, body, commitId, createdAt, htmlUrl, id, line, nodeId, path, position, updatedAt, url, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authorAssociation, body, commitId, createdAt, htmlUrl, id, line, nodeId, path, position, updatedAt, url, user) { 
        obj['author_association'] = authorAssociation;
        obj['body'] = body;
        obj['commit_id'] = commitId;
        obj['created_at'] = createdAt;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['line'] = line;
        obj['node_id'] = nodeId;
        obj['path'] = path;
        obj['position'] = position;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['user'] = user;
    }

    /**
     * Constructs a <code>CommitComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitComment} obj Optional instance to populate.
     * @return {module:model/CommitComment} The populated <code>CommitComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitComment();

            if (data.hasOwnProperty('author_association')) {
                obj['author_association'] = ApiClient.convertToType(data['author_association'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('reactions')) {
                obj['reactions'] = ReactionRollup.constructFromObject(data['reactions']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
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
 * @member {String} author_association
 */
CommitComment.prototype['author_association'] = undefined;

/**
 * @member {String} body
 */
CommitComment.prototype['body'] = undefined;

/**
 * @member {String} commit_id
 */
CommitComment.prototype['commit_id'] = undefined;

/**
 * @member {Date} created_at
 */
CommitComment.prototype['created_at'] = undefined;

/**
 * @member {String} html_url
 */
CommitComment.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
CommitComment.prototype['id'] = undefined;

/**
 * @member {Number} line
 */
CommitComment.prototype['line'] = undefined;

/**
 * @member {String} node_id
 */
CommitComment.prototype['node_id'] = undefined;

/**
 * @member {String} path
 */
CommitComment.prototype['path'] = undefined;

/**
 * @member {Number} position
 */
CommitComment.prototype['position'] = undefined;

/**
 * @member {module:model/ReactionRollup} reactions
 */
CommitComment.prototype['reactions'] = undefined;

/**
 * @member {Date} updated_at
 */
CommitComment.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
CommitComment.prototype['url'] = undefined;

/**
 * @member {module:model/SimpleUser} user
 */
CommitComment.prototype['user'] = undefined;






export default CommitComment;

