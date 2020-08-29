"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Milestone model module.
 * @module model/Milestone
 * @version 0.0.5
 */
var Milestone = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Milestone</code>.
   * A collection of related issues and pull requests.
   * @alias module:model/Milestone
   * @param closedAt {Date} 
   * @param closedIssues {Number} 
   * @param createdAt {Date} 
   * @param creator {module:model/SimpleUser} 
   * @param description {String} 
   * @param dueOn {Date} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param labelsUrl {String} 
   * @param nodeId {String} 
   * @param _number {Number} The number of the milestone.
   * @param openIssues {Number} 
   * @param state {module:model/Milestone.StateEnum} The state of the milestone.
   * @param title {String} The title of the milestone.
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Milestone(closedAt, closedIssues, createdAt, creator, description, dueOn, htmlUrl, id, labelsUrl, nodeId, _number, openIssues, state, title, updatedAt, url) {
    _classCallCheck(this, Milestone);

    Milestone.initialize(this, closedAt, closedIssues, createdAt, creator, description, dueOn, htmlUrl, id, labelsUrl, nodeId, _number, openIssues, state, title, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Milestone, null, [{
    key: "initialize",
    value: function initialize(obj, closedAt, closedIssues, createdAt, creator, description, dueOn, htmlUrl, id, labelsUrl, nodeId, _number, openIssues, state, title, updatedAt, url) {
      obj['closed_at'] = closedAt;
      obj['closed_issues'] = closedIssues;
      obj['created_at'] = createdAt;
      obj['creator'] = creator;
      obj['description'] = description;
      obj['due_on'] = dueOn;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['labels_url'] = labelsUrl;
      obj['node_id'] = nodeId;
      obj['number'] = _number;
      obj['open_issues'] = openIssues;
      obj['state'] = state;
      obj['title'] = title;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Milestone} obj Optional instance to populate.
     * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Milestone();

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'Date');
        }

        if (data.hasOwnProperty('closed_issues')) {
          obj['closed_issues'] = _ApiClient["default"].convertToType(data['closed_issues'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_on')) {
          obj['due_on'] = _ApiClient["default"].convertToType(data['due_on'], 'Date');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('labels_url')) {
          obj['labels_url'] = _ApiClient["default"].convertToType(data['labels_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('open_issues')) {
          obj['open_issues'] = _ApiClient["default"].convertToType(data['open_issues'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Milestone;
}();
/**
 * @member {Date} closed_at
 */


Milestone.prototype['closed_at'] = undefined;
/**
 * @member {Number} closed_issues
 */

Milestone.prototype['closed_issues'] = undefined;
/**
 * @member {Date} created_at
 */

Milestone.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

Milestone.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

Milestone.prototype['description'] = undefined;
/**
 * @member {Date} due_on
 */

Milestone.prototype['due_on'] = undefined;
/**
 * @member {String} html_url
 */

Milestone.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Milestone.prototype['id'] = undefined;
/**
 * @member {String} labels_url
 */

Milestone.prototype['labels_url'] = undefined;
/**
 * @member {String} node_id
 */

Milestone.prototype['node_id'] = undefined;
/**
 * The number of the milestone.
 * @member {Number} number
 */

Milestone.prototype['number'] = undefined;
/**
 * @member {Number} open_issues
 */

Milestone.prototype['open_issues'] = undefined;
/**
 * The state of the milestone.
 * @member {module:model/Milestone.StateEnum} state
 * @default 'open'
 */

Milestone.prototype['state'] = 'open';
/**
 * The title of the milestone.
 * @member {String} title
 */

Milestone.prototype['title'] = undefined;
/**
 * @member {Date} updated_at
 */

Milestone.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Milestone.prototype['url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Milestone['StateEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed"
};
var _default = Milestone;
exports["default"] = _default;