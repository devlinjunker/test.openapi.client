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
 * The GroupMappingGroups model module.
 * @module model/GroupMappingGroups
 * @version 0.0.5
 */
class GroupMappingGroups {
    /**
     * Constructs a new <code>GroupMappingGroups</code>.
     * @alias module:model/GroupMappingGroups
     * @param groupDescription {String} a description of the group
     * @param groupId {String} The ID of the group
     * @param groupName {String} The name of the group
     */
    constructor(groupDescription, groupId, groupName) { 
        
        GroupMappingGroups.initialize(this, groupDescription, groupId, groupName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupDescription, groupId, groupName) { 
        obj['group_description'] = groupDescription;
        obj['group_id'] = groupId;
        obj['group_name'] = groupName;
    }

    /**
     * Constructs a <code>GroupMappingGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMappingGroups} obj Optional instance to populate.
     * @return {module:model/GroupMappingGroups} The populated <code>GroupMappingGroups</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupMappingGroups();

            if (data.hasOwnProperty('group_description')) {
                obj['group_description'] = ApiClient.convertToType(data['group_description'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * a description of the group
 * @member {String} group_description
 */
GroupMappingGroups.prototype['group_description'] = undefined;

/**
 * The ID of the group
 * @member {String} group_id
 */
GroupMappingGroups.prototype['group_id'] = undefined;

/**
 * The name of the group
 * @member {String} group_name
 */
GroupMappingGroups.prototype['group_name'] = undefined;






export default GroupMappingGroups;
