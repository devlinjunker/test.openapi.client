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
 * The InlineObject33 model module.
 * @module model/InlineObject33
 * @version 0.0.5
 */
var InlineObject33 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject33</code>.
   * @alias module:model/InlineObject33
   * @param content {module:model/InlineObject33.ContentEnum} The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.
   */
  function InlineObject33(content) {
    _classCallCheck(this, InlineObject33);

    InlineObject33.initialize(this, content);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject33, null, [{
    key: "initialize",
    value: function initialize(obj, content) {
      obj['content'] = content;
    }
    /**
     * Constructs a <code>InlineObject33</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject33} obj Optional instance to populate.
     * @return {module:model/InlineObject33} The populated <code>InlineObject33</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject33();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject33;
}();
/**
 * The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.
 * @member {module:model/InlineObject33.ContentEnum} content
 */


InlineObject33.prototype['content'] = undefined;
/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject33['ContentEnum'] = {
  /**
   * value: "+1"
   * @const
   */
  "+1": "+1",

  /**
   * value: "-1"
   * @const
   */
  "-1": "-1",

  /**
   * value: "laugh"
   * @const
   */
  "laugh": "laugh",

  /**
   * value: "confused"
   * @const
   */
  "confused": "confused",

  /**
   * value: "heart"
   * @const
   */
  "heart": "heart",

  /**
   * value: "hooray"
   * @const
   */
  "hooray": "hooray",

  /**
   * value: "rocket"
   * @const
   */
  "rocket": "rocket",

  /**
   * value: "eyes"
   * @const
   */
  "eyes": "eyes"
};
var _default = InlineObject33;
exports["default"] = _default;