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
 * The Label model module.
 * @module model/Label
 * @version 0.0.5
 */
class Label {
    /**
     * Constructs a new <code>Label</code>.
     * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
     * @alias module:model/Label
     * @param color {String} 6-character hex code, without the leading #, identifying the color
     * @param _default {Boolean} 
     * @param id {Number} 
     * @param name {String} The name of the label.
     * @param nodeId {String} 
     * @param url {String} URL for the label
     */
    constructor(color, _default, id, name, nodeId, url) { 
        
        Label.initialize(this, color, _default, id, name, nodeId, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, color, _default, id, name, nodeId, url) { 
        obj['color'] = color;
        obj['default'] = _default;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Label} obj Optional instance to populate.
     * @return {module:model/Label} The populated <code>Label</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Label();

            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 6-character hex code, without the leading #, identifying the color
 * @member {String} color
 */
Label.prototype['color'] = undefined;

/**
 * @member {Boolean} default
 */
Label.prototype['default'] = undefined;

/**
 * @member {String} description
 */
Label.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
Label.prototype['id'] = undefined;

/**
 * The name of the label.
 * @member {String} name
 */
Label.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
Label.prototype['node_id'] = undefined;

/**
 * URL for the label
 * @member {String} url
 */
Label.prototype['url'] = undefined;






export default Label;

