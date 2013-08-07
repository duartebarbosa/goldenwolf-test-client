var MobileReporter = function(baseReporterDecorator, formatError) {
  baseReporterDecorator(this);

  this.onRunStart = function(browsers) {

    var timestamp = (new Date()).toISOString().substr(0, 19);

    browsers.forEach(function(browser) {
      console.log(browser.name + " " + browser.id + " at " + timestamp + "\n")
    });
  };

  this.onBrowserComplete = function(browser) {
    var result = browser.lastResult;
    var timestamp = (new Date()).toISOString().substr(0, 19);
    browser.forEach(function(browser) {
      console.log(browser.name + " " + browser.id + " at " + timestamp + "\n")
      console.log('tests ' + result.total + "\n")
      console.log('errors ' + (result.disconnected || result.error ? 1 : 0) + "\n")
      console.log('failures ' + result.failed + "\n")
      console.log('time ' + ((result.netTime || 0) / 1000) + "\n")
    });
  };

  this.onRunComplete = function() {
    console.log("completed run of tests\n")
  };

  this.specSuccess = this.specSkipped = this.specFailure = function(browser, result) {

    if (result.skipped) {
      console.log('skipped');
    }

    if (!result.success) {
      result.log.forEach(function(err) {
        console.log('failure ' + formatError(err));
      });
    }
  };

};

MobileReporter.$inject = ['baseReporterDecorator', 'formatError'];

module.exports = {
  'reporter:mobile': ['type', MobileReporter]
};