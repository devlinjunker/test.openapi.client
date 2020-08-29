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
 * The InlineObject111 model module.
 * @module model/InlineObject111
 * @version 0.0.5
 */
var InlineObject111 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject111</code>.
   * @alias module:model/InlineObject111
   * @param body {String} The body text of the pull request review.
   */
  function InlineObject111(body) {
    _classCallCheck(this, InlineObject111);

    InlineObject111.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject111, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>InlineObject111</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject111} obj Optional instance to populate.
     * @return {module:model/InlineObject111} The populated <code>InlineObject111</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject111();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject111;
}();
/**
 * The body text of the pull request review.
 * @member {String} body
 */


InlineObject111.prototype['body'] = undefined;
var _default = InlineObject111;
exports["default"] = _default;