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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitHubV3RestApi);
  }
}(this, function(expect, GitHubV3RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitHubV3RestApi.InlineObject14();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineObject14', function() {
    it('should create an instance of InlineObject14', function() {
      // uncomment below and update the code to test InlineObject14
      //var instane = new GitHubV3RestApi.InlineObject14();
      //expect(instance).to.be.a(GitHubV3RestApi.InlineObject14);
    });

    it('should have the property lastReadAt (base name: "last_read_at")', function() {
      // uncomment below and update the code to test the property lastReadAt
      //var instane = new GitHubV3RestApi.InlineObject14();
      //expect(instance).to.be();
    });

    it('should have the property read (base name: "read")', function() {
      // uncomment below and update the code to test the property read
      //var instane = new GitHubV3RestApi.InlineObject14();
      //expect(instance).to.be();
    });

  });

}));
