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
import ContentFileLinks from './ContentFileLinks';

/**
 * The ContentSubmodule model module.
 * @module model/ContentSubmodule
 * @version 0.0.5
 */
class ContentSubmodule {
    /**
     * Constructs a new <code>ContentSubmodule</code>.
     * An object describing a symlink
     * @alias module:model/ContentSubmodule
     * @param links {module:model/ContentFileLinks} 
     * @param downloadUrl {String} 
     * @param gitUrl {String} 
     * @param htmlUrl {String} 
     * @param name {String} 
     * @param path {String} 
     * @param sha {String} 
     * @param size {Number} 
     * @param submoduleGitUrl {String} 
     * @param type {String} 
     * @param url {String} 
     */
    constructor(links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url) { 
        
        ContentSubmodule.initialize(this, links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url) { 
        obj['_links'] = links;
        obj['download_url'] = downloadUrl;
        obj['git_url'] = gitUrl;
        obj['html_url'] = htmlUrl;
        obj['name'] = name;
        obj['path'] = path;
        obj['sha'] = sha;
        obj['size'] = size;
        obj['submodule_git_url'] = submoduleGitUrl;
        obj['type'] = type;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>ContentSubmodule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentSubmodule} obj Optional instance to populate.
     * @return {module:model/ContentSubmodule} The populated <code>ContentSubmodule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentSubmodule();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ContentFileLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('git_url')) {
                obj['git_url'] = ApiClient.convertToType(data['git_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('submodule_git_url')) {
                obj['submodule_git_url'] = ApiClient.convertToType(data['submodule_git_url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ContentFileLinks} _links
 */
ContentSubmodule.prototype['_links'] = undefined;

/**
 * @member {String} download_url
 */
ContentSubmodule.prototype['download_url'] = undefined;

/**
 * @member {String} git_url
 */
ContentSubmodule.prototype['git_url'] = undefined;

/**
 * @member {String} html_url
 */
ContentSubmodule.prototype['html_url'] = undefined;

/**
 * @member {String} name
 */
ContentSubmodule.prototype['name'] = undefined;

/**
 * @member {String} path
 */
ContentSubmodule.prototype['path'] = undefined;

/**
 * @member {String} sha
 */
ContentSubmodule.prototype['sha'] = undefined;

/**
 * @member {Number} size
 */
ContentSubmodule.prototype['size'] = undefined;

/**
 * @member {String} submodule_git_url
 */
ContentSubmodule.prototype['submodule_git_url'] = undefined;

/**
 * @member {String} type
 */
ContentSubmodule.prototype['type'] = undefined;

/**
 * @member {String} url
 */
ContentSubmodule.prototype['url'] = undefined;






export default ContentSubmodule;

