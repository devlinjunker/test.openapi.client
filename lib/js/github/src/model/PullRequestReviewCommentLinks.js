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
import PullRequestReviewCommentLinksHtml from './PullRequestReviewCommentLinksHtml';
import PullRequestReviewCommentLinksPullRequest from './PullRequestReviewCommentLinksPullRequest';
import PullRequestReviewCommentLinksSelf from './PullRequestReviewCommentLinksSelf';

/**
 * The PullRequestReviewCommentLinks model module.
 * @module model/PullRequestReviewCommentLinks
 * @version 0.0.5
 */
class PullRequestReviewCommentLinks {
    /**
     * Constructs a new <code>PullRequestReviewCommentLinks</code>.
     * @alias module:model/PullRequestReviewCommentLinks
     * @param html {module:model/PullRequestReviewCommentLinksHtml} 
     * @param pullRequest {module:model/PullRequestReviewCommentLinksPullRequest} 
     * @param self {module:model/PullRequestReviewCommentLinksSelf} 
     */
    constructor(html, pullRequest, self) { 
        
        PullRequestReviewCommentLinks.initialize(this, html, pullRequest, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, html, pullRequest, self) { 
        obj['html'] = html;
        obj['pull_request'] = pullRequest;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>PullRequestReviewCommentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewCommentLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewCommentLinks} The populated <code>PullRequestReviewCommentLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestReviewCommentLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = PullRequestReviewCommentLinksHtml.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = PullRequestReviewCommentLinksPullRequest.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = PullRequestReviewCommentLinksSelf.constructFromObject(data['self']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PullRequestReviewCommentLinksHtml} html
 */
PullRequestReviewCommentLinks.prototype['html'] = undefined;

/**
 * @member {module:model/PullRequestReviewCommentLinksPullRequest} pull_request
 */
PullRequestReviewCommentLinks.prototype['pull_request'] = undefined;

/**
 * @member {module:model/PullRequestReviewCommentLinksSelf} self
 */
PullRequestReviewCommentLinks.prototype['self'] = undefined;






export default PullRequestReviewCommentLinks;
