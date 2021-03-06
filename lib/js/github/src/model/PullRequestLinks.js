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
import Link from './Link';

/**
 * The PullRequestLinks model module.
 * @module model/PullRequestLinks
 * @version 0.0.5
 */
class PullRequestLinks {
    /**
     * Constructs a new <code>PullRequestLinks</code>.
     * @alias module:model/PullRequestLinks
     * @param comments {module:model/Link} 
     * @param commits {module:model/Link} 
     * @param html {module:model/Link} 
     * @param issue {module:model/Link} 
     * @param reviewComment {module:model/Link} 
     * @param reviewComments {module:model/Link} 
     * @param self {module:model/Link} 
     * @param statuses {module:model/Link} 
     */
    constructor(comments, commits, html, issue, reviewComment, reviewComments, self, statuses) { 
        
        PullRequestLinks.initialize(this, comments, commits, html, issue, reviewComment, reviewComments, self, statuses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, comments, commits, html, issue, reviewComment, reviewComments, self, statuses) { 
        obj['comments'] = comments;
        obj['commits'] = commits;
        obj['html'] = html;
        obj['issue'] = issue;
        obj['review_comment'] = reviewComment;
        obj['review_comments'] = reviewComments;
        obj['self'] = self;
        obj['statuses'] = statuses;
    }

    /**
     * Constructs a <code>PullRequestLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestLinks} The populated <code>PullRequestLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestLinks();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = Link.constructFromObject(data['comments']);
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = Link.constructFromObject(data['commits']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = Link.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = Link.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('review_comment')) {
                obj['review_comment'] = Link.constructFromObject(data['review_comment']);
            }
            if (data.hasOwnProperty('review_comments')) {
                obj['review_comments'] = Link.constructFromObject(data['review_comments']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = Link.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = Link.constructFromObject(data['statuses']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Link} comments
 */
PullRequestLinks.prototype['comments'] = undefined;

/**
 * @member {module:model/Link} commits
 */
PullRequestLinks.prototype['commits'] = undefined;

/**
 * @member {module:model/Link} html
 */
PullRequestLinks.prototype['html'] = undefined;

/**
 * @member {module:model/Link} issue
 */
PullRequestLinks.prototype['issue'] = undefined;

/**
 * @member {module:model/Link} review_comment
 */
PullRequestLinks.prototype['review_comment'] = undefined;

/**
 * @member {module:model/Link} review_comments
 */
PullRequestLinks.prototype['review_comments'] = undefined;

/**
 * @member {module:model/Link} self
 */
PullRequestLinks.prototype['self'] = undefined;

/**
 * @member {module:model/Link} statuses
 */
PullRequestLinks.prototype['statuses'] = undefined;






export default PullRequestLinks;

