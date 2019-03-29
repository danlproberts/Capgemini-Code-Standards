/**
 * @fileoverview Checks whether the variable fits Hungarian Notation
 * @author danlproberts
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const NOT_VALID_NOTATION = "Please call variable as identifier + titilised variable name.";
const NOT_VALID_FLAG = "The identifier does not match the variable type.";

var rule = require("../../../lib/rules/validation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("validation", rule, {

    valid: [
        {
        code: "var oObject = {}"
        }
    ],

    invalid: [
        {
            code: "var object = {}",
            errors: [{
                message: NOT_VALID_NOTATION,
                type: "VariableDeclarator"
            }]
        }, {

        code: "var iObject = {}",
            errors: [{
                message: NOT_VALID_FLAG,
                type: "VariableDeclarator"
            }]
        }]
});
