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
    instance = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
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

  describe('MarketplacePurchaseMarketplacePendingChange', function() {
    it('should create an instance of MarketplacePurchaseMarketplacePendingChange', function() {
      // uncomment below and update the code to test MarketplacePurchaseMarketplacePendingChange
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be.a(GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange);
    });

    it('should have the property effectiveDate (base name: "effective_date")', function() {
      // uncomment below and update the code to test the property effectiveDate
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be();
    });

    it('should have the property isInstalled (base name: "is_installed")', function() {
      // uncomment below and update the code to test the property isInstalled
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be();
    });

    it('should have the property plan (base name: "plan")', function() {
      // uncomment below and update the code to test the property plan
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be();
    });

    it('should have the property unitCount (base name: "unit_count")', function() {
      // uncomment below and update the code to test the property unitCount
      //var instane = new GitHubV3RestApi.MarketplacePurchaseMarketplacePendingChange();
      //expect(instance).to.be();
    });

  });

}));