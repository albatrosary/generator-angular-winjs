'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('generator-angular-winjs') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('index.html'), this.destinationPath('index.html'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('app'), this.destinationPath('app'));
    this.fs.copy(this.templatePath('scripts'), this.destinationPath('scripts'));
    this.fs.copy(this.templatePath('styles'), this.destinationPath('styles'));
  },

  install: function () {
    this.installDependencies({npm: true, bower: false});
  }
});
