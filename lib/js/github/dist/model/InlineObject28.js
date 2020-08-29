"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject28 model module.
 * @module model/InlineObject28
 * @version 0.0.5
 */
var InlineObject28 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject28</code>.
   * @alias module:model/InlineObject28
   * @param name {String} The name of the team.
   */
  function InlineObject28(name) {
    _classCallCheck(this, InlineObject28);

    InlineObject28.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject28, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineObject28</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject28} obj Optional instance to populate.
     * @return {module:model/InlineObject28} The populated <code>InlineObject28</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject28();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('parent_team_id')) {
          obj['parent_team_id'] = _ApiClient["default"].convertToType(data['parent_team_id'], 'Number');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('privacy')) {
          obj['privacy'] = _ApiClient["default"].convertToType(data['privacy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject28;
}();
/**
 * The description of the team.
 * @member {String} description
 */


InlineObject28.prototype['description'] = undefined;
/**
 * The name of the team.
 * @member {String} name
 */

InlineObject28.prototype['name'] = undefined;
/**
 * The ID of a team to set as the parent team.
 * @member {Number} parent_team_id
 */

InlineObject28.prototype['parent_team_id'] = undefined;
/**
 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* `pull` - team members can pull, but not push to or administer newly-added repositories.   \\* `push` - team members can pull and push, but not administer newly-added repositories.   \\* `admin` - team members can pull, push and administer newly-added repositories.
 * @member {module:model/InlineObject28.PermissionEnum} permission
 * @default 'pull'
 */

InlineObject28.prototype['permission'] = 'pull';
/**
 * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:   **For a non-nested team:**   \\* `secret` - only visible to organization owners and members of this team.   \\* `closed` - visible to all members of this organization.   **For a parent or child team:**   \\* `closed` - visible to all members of this organization.
 * @member {module:model/InlineObject28.PrivacyEnum} privacy
 */

InlineObject28.prototype['privacy'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject28['PermissionEnum'] = {
  /**
   * value: "pull"
   * @const
   */
  "pull": "pull",

  /**
   * value: "push"
   * @const
   */
  "push": "push",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
/**
 * Allowed values for the <code>privacy</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject28['PrivacyEnum'] = {
  /**
   * value: "secret"
   * @const
   */
  "secret": "secret",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed"
};
var _default = InlineObject28;
exports["default"] = _default;