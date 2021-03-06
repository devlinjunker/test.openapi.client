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
 * The TeamProjectPermissions model module.
 * @module model/TeamProjectPermissions
 * @version 0.0.5
 */
var TeamProjectPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TeamProjectPermissions</code>.
   * @alias module:model/TeamProjectPermissions
   */
  function TeamProjectPermissions() {
    _classCallCheck(this, TeamProjectPermissions);

    TeamProjectPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamProjectPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TeamProjectPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamProjectPermissions} obj Optional instance to populate.
     * @return {module:model/TeamProjectPermissions} The populated <code>TeamProjectPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamProjectPermissions();

        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }

        if (data.hasOwnProperty('read')) {
          obj['read'] = _ApiClient["default"].convertToType(data['read'], 'Boolean');
        }

        if (data.hasOwnProperty('write')) {
          obj['write'] = _ApiClient["default"].convertToType(data['write'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TeamProjectPermissions;
}();
/**
 * @member {Boolean} admin
 */


TeamProjectPermissions.prototype['admin'] = undefined;
/**
 * @member {Boolean} read
 */

TeamProjectPermissions.prototype['read'] = undefined;
/**
 * @member {Boolean} write
 */

TeamProjectPermissions.prototype['write'] = undefined;
var _default = TeamProjectPermissions;
exports["default"] = _default;