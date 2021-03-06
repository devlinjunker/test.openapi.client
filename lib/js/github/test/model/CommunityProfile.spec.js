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
    instance = new GitHubV3RestApi.CommunityProfile();
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

  describe('CommunityProfile', function() {
    it('should create an instance of CommunityProfile', function() {
      // uncomment below and update the code to test CommunityProfile
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be.a(GitHubV3RestApi.CommunityProfile);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be();
    });

    it('should have the property documentation (base name: "documentation")', function() {
      // uncomment below and update the code to test the property documentation
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be();
    });

    it('should have the property healthPercentage (base name: "health_percentage")', function() {
      // uncomment below and update the code to test the property healthPercentage
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHubV3RestApi.CommunityProfile();
      //expect(instance).to.be();
    });

  });

}));
