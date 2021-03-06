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
import CollaboratorPermissions from './CollaboratorPermissions';
import LicenseSimple from './LicenseSimple';
import PullRequestBaseRepoOwner from './PullRequestBaseRepoOwner';

/**
 * The PullRequestBaseRepo model module.
 * @module model/PullRequestBaseRepo
 * @version 0.0.5
 */
class PullRequestBaseRepo {
    /**
     * Constructs a new <code>PullRequestBaseRepo</code>.
     * @alias module:model/PullRequestBaseRepo
     * @param archiveUrl {String} 
     * @param archived {Boolean} 
     * @param assigneesUrl {String} 
     * @param blobsUrl {String} 
     * @param branchesUrl {String} 
     * @param cloneUrl {String} 
     * @param collaboratorsUrl {String} 
     * @param commentsUrl {String} 
     * @param commitsUrl {String} 
     * @param compareUrl {String} 
     * @param contentsUrl {String} 
     * @param contributorsUrl {String} 
     * @param createdAt {Date} 
     * @param defaultBranch {String} 
     * @param deploymentsUrl {String} 
     * @param description {String} 
     * @param disabled {Boolean} 
     * @param downloadsUrl {String} 
     * @param eventsUrl {String} 
     * @param fork {Boolean} 
     * @param forks {Number} 
     * @param forksCount {Number} 
     * @param forksUrl {String} 
     * @param fullName {String} 
     * @param gitCommitsUrl {String} 
     * @param gitRefsUrl {String} 
     * @param gitTagsUrl {String} 
     * @param gitUrl {String} 
     * @param hasDownloads {Boolean} 
     * @param hasIssues {Boolean} 
     * @param hasPages {Boolean} 
     * @param hasProjects {Boolean} 
     * @param hasWiki {Boolean} 
     * @param homepage {String} 
     * @param hooksUrl {String} 
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param issueCommentUrl {String} 
     * @param issueEventsUrl {String} 
     * @param issuesUrl {String} 
     * @param keysUrl {String} 
     * @param labelsUrl {String} 
     * @param language {String} 
     * @param languagesUrl {String} 
     * @param license {module:model/LicenseSimple} 
     * @param mergesUrl {String} 
     * @param milestonesUrl {String} 
     * @param mirrorUrl {String} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param notificationsUrl {String} 
     * @param openIssues {Number} 
     * @param openIssuesCount {Number} 
     * @param owner {module:model/PullRequestBaseRepoOwner} 
     * @param _private {Boolean} 
     * @param pullsUrl {String} 
     * @param pushedAt {Date} 
     * @param releasesUrl {String} 
     * @param size {Number} 
     * @param sshUrl {String} 
     * @param stargazersCount {Number} 
     * @param stargazersUrl {String} 
     * @param statusesUrl {String} 
     * @param subscribersUrl {String} 
     * @param subscriptionUrl {String} 
     * @param svnUrl {String} 
     * @param tagsUrl {String} 
     * @param teamsUrl {String} 
     * @param treesUrl {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     * @param watchers {Number} 
     * @param watchersCount {Number} 
     */
    constructor(archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount) { 
        
        PullRequestBaseRepo.initialize(this, archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, archiveUrl, archived, assigneesUrl, blobsUrl, branchesUrl, cloneUrl, collaboratorsUrl, commentsUrl, commitsUrl, compareUrl, contentsUrl, contributorsUrl, createdAt, defaultBranch, deploymentsUrl, description, disabled, downloadsUrl, eventsUrl, fork, forks, forksCount, forksUrl, fullName, gitCommitsUrl, gitRefsUrl, gitTagsUrl, gitUrl, hasDownloads, hasIssues, hasPages, hasProjects, hasWiki, homepage, hooksUrl, htmlUrl, id, issueCommentUrl, issueEventsUrl, issuesUrl, keysUrl, labelsUrl, language, languagesUrl, license, mergesUrl, milestonesUrl, mirrorUrl, name, nodeId, notificationsUrl, openIssues, openIssuesCount, owner, _private, pullsUrl, pushedAt, releasesUrl, size, sshUrl, stargazersCount, stargazersUrl, statusesUrl, subscribersUrl, subscriptionUrl, svnUrl, tagsUrl, teamsUrl, treesUrl, updatedAt, url, watchers, watchersCount) { 
        obj['archive_url'] = archiveUrl;
        obj['archived'] = archived;
        obj['assignees_url'] = assigneesUrl;
        obj['blobs_url'] = blobsUrl;
        obj['branches_url'] = branchesUrl;
        obj['clone_url'] = cloneUrl;
        obj['collaborators_url'] = collaboratorsUrl;
        obj['comments_url'] = commentsUrl;
        obj['commits_url'] = commitsUrl;
        obj['compare_url'] = compareUrl;
        obj['contents_url'] = contentsUrl;
        obj['contributors_url'] = contributorsUrl;
        obj['created_at'] = createdAt;
        obj['default_branch'] = defaultBranch;
        obj['deployments_url'] = deploymentsUrl;
        obj['description'] = description;
        obj['disabled'] = disabled;
        obj['downloads_url'] = downloadsUrl;
        obj['events_url'] = eventsUrl;
        obj['fork'] = fork;
        obj['forks'] = forks;
        obj['forks_count'] = forksCount;
        obj['forks_url'] = forksUrl;
        obj['full_name'] = fullName;
        obj['git_commits_url'] = gitCommitsUrl;
        obj['git_refs_url'] = gitRefsUrl;
        obj['git_tags_url'] = gitTagsUrl;
        obj['git_url'] = gitUrl;
        obj['has_downloads'] = hasDownloads;
        obj['has_issues'] = hasIssues;
        obj['has_pages'] = hasPages;
        obj['has_projects'] = hasProjects;
        obj['has_wiki'] = hasWiki;
        obj['homepage'] = homepage;
        obj['hooks_url'] = hooksUrl;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['issue_comment_url'] = issueCommentUrl;
        obj['issue_events_url'] = issueEventsUrl;
        obj['issues_url'] = issuesUrl;
        obj['keys_url'] = keysUrl;
        obj['labels_url'] = labelsUrl;
        obj['language'] = language;
        obj['languages_url'] = languagesUrl;
        obj['license'] = license;
        obj['merges_url'] = mergesUrl;
        obj['milestones_url'] = milestonesUrl;
        obj['mirror_url'] = mirrorUrl;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['notifications_url'] = notificationsUrl;
        obj['open_issues'] = openIssues;
        obj['open_issues_count'] = openIssuesCount;
        obj['owner'] = owner;
        obj['private'] = _private;
        obj['pulls_url'] = pullsUrl;
        obj['pushed_at'] = pushedAt;
        obj['releases_url'] = releasesUrl;
        obj['size'] = size;
        obj['ssh_url'] = sshUrl;
        obj['stargazers_count'] = stargazersCount;
        obj['stargazers_url'] = stargazersUrl;
        obj['statuses_url'] = statusesUrl;
        obj['subscribers_url'] = subscribersUrl;
        obj['subscription_url'] = subscriptionUrl;
        obj['svn_url'] = svnUrl;
        obj['tags_url'] = tagsUrl;
        obj['teams_url'] = teamsUrl;
        obj['trees_url'] = treesUrl;
        obj['updated_at'] = updatedAt;
        obj['url'] = url;
        obj['watchers'] = watchers;
        obj['watchers_count'] = watchersCount;
    }

    /**
     * Constructs a <code>PullRequestBaseRepo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestBaseRepo} obj Optional instance to populate.
     * @return {module:model/PullRequestBaseRepo} The populated <code>PullRequestBaseRepo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestBaseRepo();

            if (data.hasOwnProperty('allow_merge_commit')) {
                obj['allow_merge_commit'] = ApiClient.convertToType(data['allow_merge_commit'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_rebase_merge')) {
                obj['allow_rebase_merge'] = ApiClient.convertToType(data['allow_rebase_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_squash_merge')) {
                obj['allow_squash_merge'] = ApiClient.convertToType(data['allow_squash_merge'], 'Boolean');
            }
            if (data.hasOwnProperty('archive_url')) {
                obj['archive_url'] = ApiClient.convertToType(data['archive_url'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('assignees_url')) {
                obj['assignees_url'] = ApiClient.convertToType(data['assignees_url'], 'String');
            }
            if (data.hasOwnProperty('blobs_url')) {
                obj['blobs_url'] = ApiClient.convertToType(data['blobs_url'], 'String');
            }
            if (data.hasOwnProperty('branches_url')) {
                obj['branches_url'] = ApiClient.convertToType(data['branches_url'], 'String');
            }
            if (data.hasOwnProperty('clone_url')) {
                obj['clone_url'] = ApiClient.convertToType(data['clone_url'], 'String');
            }
            if (data.hasOwnProperty('collaborators_url')) {
                obj['collaborators_url'] = ApiClient.convertToType(data['collaborators_url'], 'String');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('compare_url')) {
                obj['compare_url'] = ApiClient.convertToType(data['compare_url'], 'String');
            }
            if (data.hasOwnProperty('contents_url')) {
                obj['contents_url'] = ApiClient.convertToType(data['contents_url'], 'String');
            }
            if (data.hasOwnProperty('contributors_url')) {
                obj['contributors_url'] = ApiClient.convertToType(data['contributors_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('default_branch')) {
                obj['default_branch'] = ApiClient.convertToType(data['default_branch'], 'String');
            }
            if (data.hasOwnProperty('deployments_url')) {
                obj['deployments_url'] = ApiClient.convertToType(data['deployments_url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('downloads_url')) {
                obj['downloads_url'] = ApiClient.convertToType(data['downloads_url'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('fork')) {
                obj['fork'] = ApiClient.convertToType(data['fork'], 'Boolean');
            }
            if (data.hasOwnProperty('forks')) {
                obj['forks'] = ApiClient.convertToType(data['forks'], 'Number');
            }
            if (data.hasOwnProperty('forks_count')) {
                obj['forks_count'] = ApiClient.convertToType(data['forks_count'], 'Number');
            }
            if (data.hasOwnProperty('forks_url')) {
                obj['forks_url'] = ApiClient.convertToType(data['forks_url'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('git_commits_url')) {
                obj['git_commits_url'] = ApiClient.convertToType(data['git_commits_url'], 'String');
            }
            if (data.hasOwnProperty('git_refs_url')) {
                obj['git_refs_url'] = ApiClient.convertToType(data['git_refs_url'], 'String');
            }
            if (data.hasOwnProperty('git_tags_url')) {
                obj['git_tags_url'] = ApiClient.convertToType(data['git_tags_url'], 'String');
            }
            if (data.hasOwnProperty('git_url')) {
                obj['git_url'] = ApiClient.convertToType(data['git_url'], 'String');
            }
            if (data.hasOwnProperty('has_downloads')) {
                obj['has_downloads'] = ApiClient.convertToType(data['has_downloads'], 'Boolean');
            }
            if (data.hasOwnProperty('has_issues')) {
                obj['has_issues'] = ApiClient.convertToType(data['has_issues'], 'Boolean');
            }
            if (data.hasOwnProperty('has_pages')) {
                obj['has_pages'] = ApiClient.convertToType(data['has_pages'], 'Boolean');
            }
            if (data.hasOwnProperty('has_projects')) {
                obj['has_projects'] = ApiClient.convertToType(data['has_projects'], 'Boolean');
            }
            if (data.hasOwnProperty('has_wiki')) {
                obj['has_wiki'] = ApiClient.convertToType(data['has_wiki'], 'Boolean');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
            if (data.hasOwnProperty('hooks_url')) {
                obj['hooks_url'] = ApiClient.convertToType(data['hooks_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('issue_comment_url')) {
                obj['issue_comment_url'] = ApiClient.convertToType(data['issue_comment_url'], 'String');
            }
            if (data.hasOwnProperty('issue_events_url')) {
                obj['issue_events_url'] = ApiClient.convertToType(data['issue_events_url'], 'String');
            }
            if (data.hasOwnProperty('issues_url')) {
                obj['issues_url'] = ApiClient.convertToType(data['issues_url'], 'String');
            }
            if (data.hasOwnProperty('keys_url')) {
                obj['keys_url'] = ApiClient.convertToType(data['keys_url'], 'String');
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('languages_url')) {
                obj['languages_url'] = ApiClient.convertToType(data['languages_url'], 'String');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], LicenseSimple);
            }
            if (data.hasOwnProperty('master_branch')) {
                obj['master_branch'] = ApiClient.convertToType(data['master_branch'], 'String');
            }
            if (data.hasOwnProperty('merges_url')) {
                obj['merges_url'] = ApiClient.convertToType(data['merges_url'], 'String');
            }
            if (data.hasOwnProperty('milestones_url')) {
                obj['milestones_url'] = ApiClient.convertToType(data['milestones_url'], 'String');
            }
            if (data.hasOwnProperty('mirror_url')) {
                obj['mirror_url'] = ApiClient.convertToType(data['mirror_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('notifications_url')) {
                obj['notifications_url'] = ApiClient.convertToType(data['notifications_url'], 'String');
            }
            if (data.hasOwnProperty('open_issues')) {
                obj['open_issues'] = ApiClient.convertToType(data['open_issues'], 'Number');
            }
            if (data.hasOwnProperty('open_issues_count')) {
                obj['open_issues_count'] = ApiClient.convertToType(data['open_issues_count'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = PullRequestBaseRepoOwner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = CollaboratorPermissions.constructFromObject(data['permissions']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('pulls_url')) {
                obj['pulls_url'] = ApiClient.convertToType(data['pulls_url'], 'String');
            }
            if (data.hasOwnProperty('pushed_at')) {
                obj['pushed_at'] = ApiClient.convertToType(data['pushed_at'], 'Date');
            }
            if (data.hasOwnProperty('releases_url')) {
                obj['releases_url'] = ApiClient.convertToType(data['releases_url'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('ssh_url')) {
                obj['ssh_url'] = ApiClient.convertToType(data['ssh_url'], 'String');
            }
            if (data.hasOwnProperty('stargazers_count')) {
                obj['stargazers_count'] = ApiClient.convertToType(data['stargazers_count'], 'Number');
            }
            if (data.hasOwnProperty('stargazers_url')) {
                obj['stargazers_url'] = ApiClient.convertToType(data['stargazers_url'], 'String');
            }
            if (data.hasOwnProperty('statuses_url')) {
                obj['statuses_url'] = ApiClient.convertToType(data['statuses_url'], 'String');
            }
            if (data.hasOwnProperty('subscribers_url')) {
                obj['subscribers_url'] = ApiClient.convertToType(data['subscribers_url'], 'String');
            }
            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');
            }
            if (data.hasOwnProperty('svn_url')) {
                obj['svn_url'] = ApiClient.convertToType(data['svn_url'], 'String');
            }
            if (data.hasOwnProperty('tags_url')) {
                obj['tags_url'] = ApiClient.convertToType(data['tags_url'], 'String');
            }
            if (data.hasOwnProperty('teams_url')) {
                obj['teams_url'] = ApiClient.convertToType(data['teams_url'], 'String');
            }
            if (data.hasOwnProperty('temp_clone_token')) {
                obj['temp_clone_token'] = ApiClient.convertToType(data['temp_clone_token'], 'String');
            }
            if (data.hasOwnProperty('topics')) {
                obj['topics'] = ApiClient.convertToType(data['topics'], ['String']);
            }
            if (data.hasOwnProperty('trees_url')) {
                obj['trees_url'] = ApiClient.convertToType(data['trees_url'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('watchers')) {
                obj['watchers'] = ApiClient.convertToType(data['watchers'], 'Number');
            }
            if (data.hasOwnProperty('watchers_count')) {
                obj['watchers_count'] = ApiClient.convertToType(data['watchers_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} allow_merge_commit
 */
PullRequestBaseRepo.prototype['allow_merge_commit'] = undefined;

/**
 * @member {Boolean} allow_rebase_merge
 */
PullRequestBaseRepo.prototype['allow_rebase_merge'] = undefined;

/**
 * @member {Boolean} allow_squash_merge
 */
PullRequestBaseRepo.prototype['allow_squash_merge'] = undefined;

/**
 * @member {String} archive_url
 */
PullRequestBaseRepo.prototype['archive_url'] = undefined;

/**
 * @member {Boolean} archived
 */
PullRequestBaseRepo.prototype['archived'] = undefined;

/**
 * @member {String} assignees_url
 */
PullRequestBaseRepo.prototype['assignees_url'] = undefined;

/**
 * @member {String} blobs_url
 */
PullRequestBaseRepo.prototype['blobs_url'] = undefined;

/**
 * @member {String} branches_url
 */
PullRequestBaseRepo.prototype['branches_url'] = undefined;

/**
 * @member {String} clone_url
 */
PullRequestBaseRepo.prototype['clone_url'] = undefined;

/**
 * @member {String} collaborators_url
 */
PullRequestBaseRepo.prototype['collaborators_url'] = undefined;

/**
 * @member {String} comments_url
 */
PullRequestBaseRepo.prototype['comments_url'] = undefined;

/**
 * @member {String} commits_url
 */
PullRequestBaseRepo.prototype['commits_url'] = undefined;

/**
 * @member {String} compare_url
 */
PullRequestBaseRepo.prototype['compare_url'] = undefined;

/**
 * @member {String} contents_url
 */
PullRequestBaseRepo.prototype['contents_url'] = undefined;

/**
 * @member {String} contributors_url
 */
PullRequestBaseRepo.prototype['contributors_url'] = undefined;

/**
 * @member {Date} created_at
 */
PullRequestBaseRepo.prototype['created_at'] = undefined;

/**
 * @member {String} default_branch
 */
PullRequestBaseRepo.prototype['default_branch'] = undefined;

/**
 * @member {String} deployments_url
 */
PullRequestBaseRepo.prototype['deployments_url'] = undefined;

/**
 * @member {String} description
 */
PullRequestBaseRepo.prototype['description'] = undefined;

/**
 * @member {Boolean} disabled
 */
PullRequestBaseRepo.prototype['disabled'] = undefined;

/**
 * @member {String} downloads_url
 */
PullRequestBaseRepo.prototype['downloads_url'] = undefined;

/**
 * @member {String} events_url
 */
PullRequestBaseRepo.prototype['events_url'] = undefined;

/**
 * @member {Boolean} fork
 */
PullRequestBaseRepo.prototype['fork'] = undefined;

/**
 * @member {Number} forks
 */
PullRequestBaseRepo.prototype['forks'] = undefined;

/**
 * @member {Number} forks_count
 */
PullRequestBaseRepo.prototype['forks_count'] = undefined;

/**
 * @member {String} forks_url
 */
PullRequestBaseRepo.prototype['forks_url'] = undefined;

/**
 * @member {String} full_name
 */
PullRequestBaseRepo.prototype['full_name'] = undefined;

/**
 * @member {String} git_commits_url
 */
PullRequestBaseRepo.prototype['git_commits_url'] = undefined;

/**
 * @member {String} git_refs_url
 */
PullRequestBaseRepo.prototype['git_refs_url'] = undefined;

/**
 * @member {String} git_tags_url
 */
PullRequestBaseRepo.prototype['git_tags_url'] = undefined;

/**
 * @member {String} git_url
 */
PullRequestBaseRepo.prototype['git_url'] = undefined;

/**
 * @member {Boolean} has_downloads
 */
PullRequestBaseRepo.prototype['has_downloads'] = undefined;

/**
 * @member {Boolean} has_issues
 */
PullRequestBaseRepo.prototype['has_issues'] = undefined;

/**
 * @member {Boolean} has_pages
 */
PullRequestBaseRepo.prototype['has_pages'] = undefined;

/**
 * @member {Boolean} has_projects
 */
PullRequestBaseRepo.prototype['has_projects'] = undefined;

/**
 * @member {Boolean} has_wiki
 */
PullRequestBaseRepo.prototype['has_wiki'] = undefined;

/**
 * @member {String} homepage
 */
PullRequestBaseRepo.prototype['homepage'] = undefined;

/**
 * @member {String} hooks_url
 */
PullRequestBaseRepo.prototype['hooks_url'] = undefined;

/**
 * @member {String} html_url
 */
PullRequestBaseRepo.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
PullRequestBaseRepo.prototype['id'] = undefined;

/**
 * @member {String} issue_comment_url
 */
PullRequestBaseRepo.prototype['issue_comment_url'] = undefined;

/**
 * @member {String} issue_events_url
 */
PullRequestBaseRepo.prototype['issue_events_url'] = undefined;

/**
 * @member {String} issues_url
 */
PullRequestBaseRepo.prototype['issues_url'] = undefined;

/**
 * @member {String} keys_url
 */
PullRequestBaseRepo.prototype['keys_url'] = undefined;

/**
 * @member {String} labels_url
 */
PullRequestBaseRepo.prototype['labels_url'] = undefined;

/**
 * @member {String} language
 */
PullRequestBaseRepo.prototype['language'] = undefined;

/**
 * @member {String} languages_url
 */
PullRequestBaseRepo.prototype['languages_url'] = undefined;

/**
 * @member {module:model/LicenseSimple} license
 */
PullRequestBaseRepo.prototype['license'] = undefined;

/**
 * @member {String} master_branch
 */
PullRequestBaseRepo.prototype['master_branch'] = undefined;

/**
 * @member {String} merges_url
 */
PullRequestBaseRepo.prototype['merges_url'] = undefined;

/**
 * @member {String} milestones_url
 */
PullRequestBaseRepo.prototype['milestones_url'] = undefined;

/**
 * @member {String} mirror_url
 */
PullRequestBaseRepo.prototype['mirror_url'] = undefined;

/**
 * @member {String} name
 */
PullRequestBaseRepo.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
PullRequestBaseRepo.prototype['node_id'] = undefined;

/**
 * @member {String} notifications_url
 */
PullRequestBaseRepo.prototype['notifications_url'] = undefined;

/**
 * @member {Number} open_issues
 */
PullRequestBaseRepo.prototype['open_issues'] = undefined;

/**
 * @member {Number} open_issues_count
 */
PullRequestBaseRepo.prototype['open_issues_count'] = undefined;

/**
 * @member {module:model/PullRequestBaseRepoOwner} owner
 */
PullRequestBaseRepo.prototype['owner'] = undefined;

/**
 * @member {module:model/CollaboratorPermissions} permissions
 */
PullRequestBaseRepo.prototype['permissions'] = undefined;

/**
 * @member {Boolean} private
 */
PullRequestBaseRepo.prototype['private'] = undefined;

/**
 * @member {String} pulls_url
 */
PullRequestBaseRepo.prototype['pulls_url'] = undefined;

/**
 * @member {Date} pushed_at
 */
PullRequestBaseRepo.prototype['pushed_at'] = undefined;

/**
 * @member {String} releases_url
 */
PullRequestBaseRepo.prototype['releases_url'] = undefined;

/**
 * @member {Number} size
 */
PullRequestBaseRepo.prototype['size'] = undefined;

/**
 * @member {String} ssh_url
 */
PullRequestBaseRepo.prototype['ssh_url'] = undefined;

/**
 * @member {Number} stargazers_count
 */
PullRequestBaseRepo.prototype['stargazers_count'] = undefined;

/**
 * @member {String} stargazers_url
 */
PullRequestBaseRepo.prototype['stargazers_url'] = undefined;

/**
 * @member {String} statuses_url
 */
PullRequestBaseRepo.prototype['statuses_url'] = undefined;

/**
 * @member {String} subscribers_url
 */
PullRequestBaseRepo.prototype['subscribers_url'] = undefined;

/**
 * @member {String} subscription_url
 */
PullRequestBaseRepo.prototype['subscription_url'] = undefined;

/**
 * @member {String} svn_url
 */
PullRequestBaseRepo.prototype['svn_url'] = undefined;

/**
 * @member {String} tags_url
 */
PullRequestBaseRepo.prototype['tags_url'] = undefined;

/**
 * @member {String} teams_url
 */
PullRequestBaseRepo.prototype['teams_url'] = undefined;

/**
 * @member {String} temp_clone_token
 */
PullRequestBaseRepo.prototype['temp_clone_token'] = undefined;

/**
 * @member {Array.<String>} topics
 */
PullRequestBaseRepo.prototype['topics'] = undefined;

/**
 * @member {String} trees_url
 */
PullRequestBaseRepo.prototype['trees_url'] = undefined;

/**
 * @member {Date} updated_at
 */
PullRequestBaseRepo.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
PullRequestBaseRepo.prototype['url'] = undefined;

/**
 * @member {Number} watchers
 */
PullRequestBaseRepo.prototype['watchers'] = undefined;

/**
 * @member {Number} watchers_count
 */
PullRequestBaseRepo.prototype['watchers_count'] = undefined;






export default PullRequestBaseRepo;

