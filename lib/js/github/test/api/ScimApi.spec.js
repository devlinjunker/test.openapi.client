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
    instance = new GitHubV3RestApi.ScimApi();
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

  describe('ScimApi', function() {
    describe('scimDeleteUserFromOrg', function() {
      it('should call scimDeleteUserFromOrg successfully', function(done) {
        //uncomment below and update the code to test scimDeleteUserFromOrg
        //instance.scimDeleteUserFromOrg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scimGetProvisioningInformationForUser', function() {
      it('should call scimGetProvisioningInformationForUser successfully', function(done) {
        //uncomment below and update the code to test scimGetProvisioningInformationForUser
        //instance.scimGetProvisioningInformationForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scimListProvisionedIdentities', function() {
      it('should call scimListProvisionedIdentities successfully', function(done) {
        //uncomment below and update the code to test scimListProvisionedIdentities
        //instance.scimListProvisionedIdentities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scimProvisionAndInviteUser', function() {
      it('should call scimProvisionAndInviteUser successfully', function(done) {
        //uncomment below and update the code to test scimProvisionAndInviteUser
        //instance.scimProvisionAndInviteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scimSetInformationForProvisionedUser', function() {
      it('should call scimSetInformationForProvisionedUser successfully', function(done) {
        //uncomment below and update the code to test scimSetInformationForProvisionedUser
        //instance.scimSetInformationForProvisionedUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scimUpdateAttributeForUser', function() {
      it('should call scimUpdateAttributeForUser successfully', function(done) {
        //uncomment below and update the code to test scimUpdateAttributeForUser
        //instance.scimUpdateAttributeForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
