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
    instance = new GitHubV3RestApi.InlineObject22();
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

  describe('InlineObject22', function() {
    it('should create an instance of InlineObject22', function() {
      // uncomment below and update the code to test InlineObject22
      //var instane = new GitHubV3RestApi.InlineObject22();
      //expect(instance).to.be.a(GitHubV3RestApi.InlineObject22);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new GitHubV3RestApi.InlineObject22();
      //expect(instance).to.be();
    });

    it('should have the property inviteeId (base name: "invitee_id")', function() {
      // uncomment below and update the code to test the property inviteeId
      //var instane = new GitHubV3RestApi.InlineObject22();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new GitHubV3RestApi.InlineObject22();
      //expect(instance).to.be();
    });

    it('should have the property teamIds (base name: "team_ids")', function() {
      // uncomment below and update the code to test the property teamIds
      //var instane = new GitHubV3RestApi.InlineObject22();
      //expect(instance).to.be();
    });

  });

}));
