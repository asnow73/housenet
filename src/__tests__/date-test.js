import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Date from '../components/date/date';

describe('root', function () {
    it("date should content date", function () {
        var dateEl = TestUtils.renderIntoDocument(
            <Date date="12.12.2012" />
        );

        var div = TestUtils.findRenderedDOMComponentWithClass(
            dateEl, 'date'
        );

        expect(div).toExist();
        expect(div.textContent).toEqual("Date: 12.12.2012");
    });
});

/*var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var ScatterPlot = require('../components/date/date.js');

describe('date', function () {

    it("date should content date", function () {
        var dateEl = TestUtils.renderIntoDocument(
            <Date date="12.12.2012" />
        );

        var div = TestUtils.findRenderedDOMComponentWithTag(
            content, 'div'
        );

        //expect(div.getDOMNode().textContent).toEqual("This is a random scatterplot");
        expect(5).toEqual(5);
    });
});*/