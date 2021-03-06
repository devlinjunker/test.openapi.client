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
    instance = new GitHubV3RestApi.ScimUserList();
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

  describe('ScimUserList', function() {
    it('should create an instance of ScimUserList', function() {
      // uncomment below and update the code to test ScimUserList
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be.a(GitHubV3RestApi.ScimUserList);
    });

    it('should have the property resources (base name: "Resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property itemsPerPage (base name: "itemsPerPage")', function() {
      // uncomment below and update the code to test the property itemsPerPage
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property schemas (base name: "schemas")', function() {
      // uncomment below and update the code to test the property schemas
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be();
    });

    it('should have the property totalResults (base name: "totalResults")', function() {
      // uncomment below and update the code to test the property totalResults
      //var instane = new GitHubV3RestApi.ScimUserList();
      //expect(instance).to.be();
    });

  });

}));
