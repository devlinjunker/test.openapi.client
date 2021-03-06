"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoPagesSource = _interopRequireDefault(require("./ReposOwnerRepoPagesSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject99 model module.
 * @module model/InlineObject99
 * @version 0.0.5
 */
var InlineObject99 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject99</code>.
   * @alias module:model/InlineObject99
   */
  function InlineObject99() {
    _classCallCheck(this, InlineObject99);

    InlineObject99.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject99, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject99</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject99} obj Optional instance to populate.
     * @return {module:model/InlineObject99} The populated <code>InlineObject99</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject99();

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ReposOwnerRepoPagesSource["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject99;
}();
/**
 * @member {module:model/ReposOwnerRepoPagesSource} source
 */


InlineObject99.prototype['source'] = undefined;
var _default = InlineObject99;
exports["default"] = _default;