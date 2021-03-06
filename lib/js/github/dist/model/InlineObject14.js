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
 * The InlineObject14 model module.
 * @module model/InlineObject14
 * @version 0.0.5
 */
var InlineObject14 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject14</code>.
   * @alias module:model/InlineObject14
   */
  function InlineObject14() {
    _classCallCheck(this, InlineObject14);

    InlineObject14.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject14, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject14} obj Optional instance to populate.
     * @return {module:model/InlineObject14} The populated <code>InlineObject14</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject14();

        if (data.hasOwnProperty('last_read_at')) {
          obj['last_read_at'] = _ApiClient["default"].convertToType(data['last_read_at'], 'Date');
        }

        if (data.hasOwnProperty('read')) {
          obj['read'] = _ApiClient["default"].convertToType(data['read'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject14;
}();
/**
 * Describes the last point that notifications were checked.
 * @member {Date} last_read_at
 */


InlineObject14.prototype['last_read_at'] = undefined;
/**
 * Whether the notification has been read.
 * @member {Boolean} read
 */

InlineObject14.prototype['read'] = undefined;
var _default = InlineObject14;
exports["default"] = _default;