#!/usr/bin/env node

process.chdir(__dirname);

var YUITest = require('yuitest'),
    path = require('path'),
    fs = require('fs'),
    dir = path.join(__dirname, '../../../../build-npm/'),
    YUI = require(dir).YUI,
    json;


YUI({useSync: true }).use('test', function(Y) {
    Y.Test.Runner = YUITest.TestRunner;
    Y.Test.Case = YUITest.TestCase;
    Y.Test.Suite = YUITest.TestSuite;
    Y.Assert = YUITest.Assert;

    Y.applyConfig({
        modules: {
            'arraysort-tests': {
                fullpath: path.join(__dirname, '../unit/assets/arraysort-tests.js'),
                requires: [ 'test', 'dump', 'arraysort' ]
            }
        }
    });

    Y.use('arraysort-tests');

    Y.Test.Runner._ignoreEmpty = true; //ArrayAssert's don't count
    
    Y.Test.Runner.setName('arraysort cli tests');
    
});

