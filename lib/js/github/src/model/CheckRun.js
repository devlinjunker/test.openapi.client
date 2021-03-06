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
import CheckRunCheckSuite from './CheckRunCheckSuite';
import CheckRunOutput from './CheckRunOutput';
import Integration from './Integration';
import PullRequestMinimal from './PullRequestMinimal';

/**
 * The CheckRun model module.
 * @module model/CheckRun
 * @version 0.0.5
 */
class CheckRun {
    /**
     * Constructs a new <code>CheckRun</code>.
     * A check performed on the code of a given code change
     * @alias module:model/CheckRun
     * @param app {module:model/Integration} 
     * @param checkSuite {module:model/CheckRunCheckSuite} 
     * @param completedAt {Date} 
     * @param conclusion {String} 
     * @param detailsUrl {String} 
     * @param externalId {String} 
     * @param headSha {String} The SHA of the commit that is being checked.
     * @param htmlUrl {String} 
     * @param id {Number} The id of the check.
     * @param name {String} The name of the check.
     * @param nodeId {String} 
     * @param output {module:model/CheckRunOutput} 
     * @param pullRequests {Array.<module:model/PullRequestMinimal>} 
     * @param startedAt {Date} 
     * @param status {module:model/CheckRun.StatusEnum} The phase of the lifecycle that the check is currently in.
     * @param url {String} 
     */
    constructor(app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url) { 
        
        CheckRun.initialize(this, app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, app, checkSuite, completedAt, conclusion, detailsUrl, externalId, headSha, htmlUrl, id, name, nodeId, output, pullRequests, startedAt, status, url) { 
        obj['app'] = app;
        obj['check_suite'] = checkSuite;
        obj['completed_at'] = completedAt;
        obj['conclusion'] = conclusion;
        obj['details_url'] = detailsUrl;
        obj['external_id'] = externalId;
        obj['head_sha'] = headSha;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['output'] = output;
        obj['pull_requests'] = pullRequests;
        obj['started_at'] = startedAt;
        obj['status'] = status;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>CheckRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckRun} obj Optional instance to populate.
     * @return {module:model/CheckRun} The populated <code>CheckRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckRun();

            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], Integration);
            }
            if (data.hasOwnProperty('check_suite')) {
                obj['check_suite'] = CheckRunCheckSuite.constructFromObject(data['check_suite']);
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('conclusion')) {
                obj['conclusion'] = ApiClient.convertToType(data['conclusion'], 'String');
            }
            if (data.hasOwnProperty('details_url')) {
                obj['details_url'] = ApiClient.convertToType(data['details_url'], 'String');
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
            }
            if (data.hasOwnProperty('head_sha')) {
                obj['head_sha'] = ApiClient.convertToType(data['head_sha'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
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
            if (data.hasOwnProperty('output')) {
                obj['output'] = CheckRunOutput.constructFromObject(data['output']);
            }
            if (data.hasOwnProperty('pull_requests')) {
                obj['pull_requests'] = ApiClient.convertToType(data['pull_requests'], [PullRequestMinimal]);
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Integration} app
 */
CheckRun.prototype['app'] = undefined;

/**
 * @member {module:model/CheckRunCheckSuite} check_suite
 */
CheckRun.prototype['check_suite'] = undefined;

/**
 * @member {Date} completed_at
 */
CheckRun.prototype['completed_at'] = undefined;

/**
 * @member {String} conclusion
 */
CheckRun.prototype['conclusion'] = undefined;

/**
 * @member {String} details_url
 */
CheckRun.prototype['details_url'] = undefined;

/**
 * @member {String} external_id
 */
CheckRun.prototype['external_id'] = undefined;

/**
 * The SHA of the commit that is being checked.
 * @member {String} head_sha
 */
CheckRun.prototype['head_sha'] = undefined;

/**
 * @member {String} html_url
 */
CheckRun.prototype['html_url'] = undefined;

/**
 * The id of the check.
 * @member {Number} id
 */
CheckRun.prototype['id'] = undefined;

/**
 * The name of the check.
 * @member {String} name
 */
CheckRun.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
CheckRun.prototype['node_id'] = undefined;

/**
 * @member {module:model/CheckRunOutput} output
 */
CheckRun.prototype['output'] = undefined;

/**
 * @member {Array.<module:model/PullRequestMinimal>} pull_requests
 */
CheckRun.prototype['pull_requests'] = undefined;

/**
 * @member {Date} started_at
 */
CheckRun.prototype['started_at'] = undefined;

/**
 * The phase of the lifecycle that the check is currently in.
 * @member {module:model/CheckRun.StatusEnum} status
 */
CheckRun.prototype['status'] = undefined;

/**
 * @member {String} url
 */
CheckRun.prototype['url'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CheckRun['StatusEnum'] = {

    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",

    /**
     * value: "in_progress"
     * @const
     */
    "in_progress": "in_progress",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed"
};



export default CheckRun;

