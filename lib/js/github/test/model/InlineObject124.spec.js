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
    instance = new GitHubV3RestApi.InlineObject124();
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

  describe('InlineObject124', function() {
    it('should create an instance of InlineObject124', function() {
      // uncomment below and update the code to test InlineObject124
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be.a(GitHubV3RestApi.InlineObject124);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property emails (base name: "emails")', function() {
      // uncomment below and update the code to test the property emails
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property schemas (base name: "schemas")', function() {
      // uncomment below and update the code to test the property schemas
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new GitHubV3RestApi.InlineObject124();
      //expect(instance).to.be();
    });

  });

}));
