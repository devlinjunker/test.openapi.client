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
    instance = new GitHubV3RestApi.FeedLinks();
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

  describe('FeedLinks', function() {
    it('should create an instance of FeedLinks', function() {
      // uncomment below and update the code to test FeedLinks
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be.a(GitHubV3RestApi.FeedLinks);
    });

    it('should have the property currentUser (base name: "current_user")', function() {
      // uncomment below and update the code to test the property currentUser
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property currentUserActor (base name: "current_user_actor")', function() {
      // uncomment below and update the code to test the property currentUserActor
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property currentUserOrganization (base name: "current_user_organization")', function() {
      // uncomment below and update the code to test the property currentUserOrganization
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property currentUserOrganizations (base name: "current_user_organizations")', function() {
      // uncomment below and update the code to test the property currentUserOrganizations
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property currentUserPublic (base name: "current_user_public")', function() {
      // uncomment below and update the code to test the property currentUserPublic
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property securityAdvisories (base name: "security_advisories")', function() {
      // uncomment below and update the code to test the property securityAdvisories
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GitHubV3RestApi.FeedLinks();
      //expect(instance).to.be();
    });

  });

}));
