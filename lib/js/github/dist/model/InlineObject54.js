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
 * The InlineObject54 model module.
 * @module model/InlineObject54
 * @version 0.0.5
 */
var InlineObject54 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject54</code>.
   * @alias module:model/InlineObject54
   * @param headSha {String} The sha of the head commit.
   */
  function InlineObject54(headSha) {
    _classCallCheck(this, InlineObject54);

    InlineObject54.initialize(this, headSha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject54, null, [{
    key: "initialize",
    value: function initialize(obj, headSha) {
      obj['head_sha'] = headSha;
    }
    /**
     * Constructs a <code>InlineObject54</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject54} obj Optional instance to populate.
     * @return {module:model/InlineObject54} The populated <code>InlineObject54</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject54();

        if (data.hasOwnProperty('head_sha')) {
          obj['head_sha'] = _ApiClient["default"].convertToType(data['head_sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject54;
}();
/**
 * The sha of the head commit.
 * @member {String} head_sha
 */


InlineObject54.prototype['head_sha'] = undefined;
var _default = InlineObject54;
exports["default"] = _default;