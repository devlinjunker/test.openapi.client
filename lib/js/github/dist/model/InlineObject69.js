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
 * The InlineObject69 model module.
 * @module model/InlineObject69
 * @version 0.0.5
 */
var InlineObject69 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject69</code>.
   * @alias module:model/InlineObject69
   * @param sha {String} The SHA1 value to set this reference to
   */
  function InlineObject69(sha) {
    _classCallCheck(this, InlineObject69);

    InlineObject69.initialize(this, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject69, null, [{
    key: "initialize",
    value: function initialize(obj, sha) {
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>InlineObject69</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject69} obj Optional instance to populate.
     * @return {module:model/InlineObject69} The populated <code>InlineObject69</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject69();

        if (data.hasOwnProperty('force')) {
          obj['force'] = _ApiClient["default"].convertToType(data['force'], 'Boolean');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject69;
}();
/**
 * Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
 * @member {Boolean} force
 * @default false
 */


InlineObject69.prototype['force'] = false;
/**
 * The SHA1 value to set this reference to
 * @member {String} sha
 */

InlineObject69.prototype['sha'] = undefined;
var _default = InlineObject69;
exports["default"] = _default;