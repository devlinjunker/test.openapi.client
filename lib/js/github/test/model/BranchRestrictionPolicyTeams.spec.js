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
    instance = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
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

  describe('BranchRestrictionPolicyTeams', function() {
    it('should create an instance of BranchRestrictionPolicyTeams', function() {
      // uncomment below and update the code to test BranchRestrictionPolicyTeams
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be.a(GitHubV3RestApi.BranchRestrictionPolicyTeams);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property membersUrl (base name: "members_url")', function() {
      // uncomment below and update the code to test the property membersUrl
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property nodeId (base name: "node_id")', function() {
      // uncomment below and update the code to test the property nodeId
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property privacy (base name: "privacy")', function() {
      // uncomment below and update the code to test the property privacy
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property repositoriesUrl (base name: "repositories_url")', function() {
      // uncomment below and update the code to test the property repositoriesUrl
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHubV3RestApi.BranchRestrictionPolicyTeams();
      //expect(instance).to.be();
    });

  });

}));