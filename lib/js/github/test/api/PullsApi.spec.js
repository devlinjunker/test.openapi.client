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
    instance = new GitHubV3RestApi.PullsApi();
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

  describe('PullsApi', function() {
    describe('pullsCheckIfMerged', function() {
      it('should call pullsCheckIfMerged successfully', function(done) {
        //uncomment below and update the code to test pullsCheckIfMerged
        //instance.pullsCheckIfMerged(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsCreate', function() {
      it('should call pullsCreate successfully', function(done) {
        //uncomment below and update the code to test pullsCreate
        //instance.pullsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsCreateReplyForReviewComment', function() {
      it('should call pullsCreateReplyForReviewComment successfully', function(done) {
        //uncomment below and update the code to test pullsCreateReplyForReviewComment
        //instance.pullsCreateReplyForReviewComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsCreateReview', function() {
      it('should call pullsCreateReview successfully', function(done) {
        //uncomment below and update the code to test pullsCreateReview
        //instance.pullsCreateReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsCreateReviewComment', function() {
      it('should call pullsCreateReviewComment successfully', function(done) {
        //uncomment below and update the code to test pullsCreateReviewComment
        //instance.pullsCreateReviewComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsDeletePendingReview', function() {
      it('should call pullsDeletePendingReview successfully', function(done) {
        //uncomment below and update the code to test pullsDeletePendingReview
        //instance.pullsDeletePendingReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsDeleteReviewComment', function() {
      it('should call pullsDeleteReviewComment successfully', function(done) {
        //uncomment below and update the code to test pullsDeleteReviewComment
        //instance.pullsDeleteReviewComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsDismissReview', function() {
      it('should call pullsDismissReview successfully', function(done) {
        //uncomment below and update the code to test pullsDismissReview
        //instance.pullsDismissReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsGet', function() {
      it('should call pullsGet successfully', function(done) {
        //uncomment below and update the code to test pullsGet
        //instance.pullsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsGetReview', function() {
      it('should call pullsGetReview successfully', function(done) {
        //uncomment below and update the code to test pullsGetReview
        //instance.pullsGetReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsGetReviewComment', function() {
      it('should call pullsGetReviewComment successfully', function(done) {
        //uncomment below and update the code to test pullsGetReviewComment
        //instance.pullsGetReviewComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsList', function() {
      it('should call pullsList successfully', function(done) {
        //uncomment below and update the code to test pullsList
        //instance.pullsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListCommentsForReview', function() {
      it('should call pullsListCommentsForReview successfully', function(done) {
        //uncomment below and update the code to test pullsListCommentsForReview
        //instance.pullsListCommentsForReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListCommits', function() {
      it('should call pullsListCommits successfully', function(done) {
        //uncomment below and update the code to test pullsListCommits
        //instance.pullsListCommits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListFiles', function() {
      it('should call pullsListFiles successfully', function(done) {
        //uncomment below and update the code to test pullsListFiles
        //instance.pullsListFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListRequestedReviewers', function() {
      it('should call pullsListRequestedReviewers successfully', function(done) {
        //uncomment below and update the code to test pullsListRequestedReviewers
        //instance.pullsListRequestedReviewers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListReviewComments', function() {
      it('should call pullsListReviewComments successfully', function(done) {
        //uncomment below and update the code to test pullsListReviewComments
        //instance.pullsListReviewComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListReviewCommentsForRepo', function() {
      it('should call pullsListReviewCommentsForRepo successfully', function(done) {
        //uncomment below and update the code to test pullsListReviewCommentsForRepo
        //instance.pullsListReviewCommentsForRepo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsListReviews', function() {
      it('should call pullsListReviews successfully', function(done) {
        //uncomment below and update the code to test pullsListReviews
        //instance.pullsListReviews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsMerge', function() {
      it('should call pullsMerge successfully', function(done) {
        //uncomment below and update the code to test pullsMerge
        //instance.pullsMerge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsRemoveRequestedReviewers', function() {
      it('should call pullsRemoveRequestedReviewers successfully', function(done) {
        //uncomment below and update the code to test pullsRemoveRequestedReviewers
        //instance.pullsRemoveRequestedReviewers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsRequestReviewers', function() {
      it('should call pullsRequestReviewers successfully', function(done) {
        //uncomment below and update the code to test pullsRequestReviewers
        //instance.pullsRequestReviewers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsSubmitReview', function() {
      it('should call pullsSubmitReview successfully', function(done) {
        //uncomment below and update the code to test pullsSubmitReview
        //instance.pullsSubmitReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsUpdate', function() {
      it('should call pullsUpdate successfully', function(done) {
        //uncomment below and update the code to test pullsUpdate
        //instance.pullsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsUpdateBranch', function() {
      it('should call pullsUpdateBranch successfully', function(done) {
        //uncomment below and update the code to test pullsUpdateBranch
        //instance.pullsUpdateBranch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsUpdateReview', function() {
      it('should call pullsUpdateReview successfully', function(done) {
        //uncomment below and update the code to test pullsUpdateReview
        //instance.pullsUpdateReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullsUpdateReviewComment', function() {
      it('should call pullsUpdateReviewComment successfully', function(done) {
        //uncomment below and update the code to test pullsUpdateReviewComment
        //instance.pullsUpdateReviewComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));