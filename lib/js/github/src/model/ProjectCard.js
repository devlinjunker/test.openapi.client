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
 * The ProjectCard model module.
 * @module model/ProjectCard
 * @version 0.0.5
 */
class ProjectCard {
    /**
     * Constructs a new <code>ProjectCard</code>.
     * Project cards represent a scope of work.
     * @alias module:model/ProjectCard
     * @param columnUrl {String} 
     * @param createdAt {Date} 
     * @param creator {module:model/SimpleUser} 
     * @param id {Number} The project card's ID
     * @param nodeId {String} 
     * @param note {String} 
     * @param projectUrl {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url) { 
        
        ProjectCard.initialize(this, columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url) { 
        obj['column_url'] = columnUrl;
        obj['created_at'] = createdAt;
        obj['creator'] = creator;
        obj['id'] = id;
        obj['node_id'] = nodeId;
        obj['note'] = note;
        obj['project_url'] = projectUrl;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ProjectCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCard} obj Optional instance to populate.
     * @return {module:model/ProjectCard} The populated <code>ProjectCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectCard();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('column_url')) {
                obj['column_url'] = ApiClient.convertToType(data['column_url'], 'String');
            }
            if (data.hasOwnProperty('content_url')) {
                obj['content_url'] = ApiClient.convertToType(data['content_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], SimpleUser);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('project_url')) {
                obj['project_url'] = ApiClient.convertToType(data['project_url'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether or not the card is archived
 * @member {Boolean} archived
 */
ProjectCard.prototype['archived'] = undefined;

/**
 * @member {String} column_url
 */
ProjectCard.prototype['column_url'] = undefined;

/**
 * @member {String} content_url
 */
ProjectCard.prototype['content_url'] = undefined;

/**
 * @member {Date} created_at
 */
ProjectCard.prototype['created_at'] = undefined;

/**
 * @member {module:model/SimpleUser} creator
 */
ProjectCard.prototype['creator'] = undefined;

/**
 * The project card's ID
 * @member {Number} id
 */
ProjectCard.prototype['id'] = undefined;

/**
 * @member {String} node_id
 */
ProjectCard.prototype['node_id'] = undefined;

/**
 * @member {String} note
 */
ProjectCard.prototype['note'] = undefined;

/**
 * @member {String} project_url
 */
ProjectCard.prototype['project_url'] = undefined;

/**
 * @member {Date} updated_at
 */
ProjectCard.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
ProjectCard.prototype['url'] = undefined;






export default ProjectCard;

