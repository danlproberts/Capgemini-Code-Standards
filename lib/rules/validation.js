/**
 * @fileoverview Checks whether the variable fits Hungarian Notation
 * @author danlproberts
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Checks whether the variable fits Hungarian Notation",
            category: "Code Standards",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        const NOT_VALID_NOTATION = "Please call variable as identifier + titilised variable name.";
const NOT_VALID_FLAG = "The identifier does not match the variable type.";

  return {
    Program(node) {
      const nodeBody = node.body;

      function hungarianIdChecker(dec, objectBool) {
        let isValid = false;
        
        if (objectBool) {
          	var flag = dec.flag;
            var varType = dec.valueType;
            var value = dec.value;
        } else {
        	var flag = dec.id.name[0];
            var varType = dec.init.type;
            var value = dec.init.value;
        }
        
        switch (varType) {
          case "Literal":
            switch (typeof value) {
              case "number":
                if (value % 1 === 0 && flag === "i") {
                  isValid = true;
                } else if (value % 1 !== 0 && flag !== "f") {
                  isValid = true;
                }
                break;
              case "boolean":
                if (flag === "b") {
                  isValid = true;
                }
                break;
              case "string":
                if (flag === "s") {
                  isValid = true;
                }
                break;
            }

            break;

          case "ArrayExpression":
            if (flag === "a") {
              isValid = true;
            }
            break;

          case "ObjectExpression":
            if (flag === "o") {
              isValid = true;
            }
            break;

          case "MemberExpression":
            isValid = objectKeyPairChecker(dec);
            break;
        }
        return isValid;
      }

      function objectKeyPairChecker(declaration) {
        let isValid = false
        let object = declaration.init.object.name;
        let property = declaration.init.property.name;
        let flag = declaration.id.name[0]
        let objectBundle = {'flag' : flag}

        nodeBody.forEach(item => {
          item.declarations.forEach(dec => {
            if (dec.id.name === object && dec.init.type === "ObjectExpression") {
            	dec.init.properties.forEach(prop => {
                	if (prop.key.value === property) {
                    	objectBundle.valueType = prop.value.type
                        objectBundle.value = prop.value.value
                      
                      	isValid = hungarianIdChecker(objectBundle, true)
                    }
                })
            }
          });
        });
        
        return isValid
      }

      nodeBody.forEach(item => {
        const itemDeclarations = item.declarations;

        if (item.type == "VariableDeclaration") {
          itemDeclarations.forEach(dec => {
            if (dec.id.name[1] !== dec.id.name[1].toUpperCase()) {
              context.report({
                node: dec,
                message: NOT_VALID_NOTATION,

                fix(fixer) {
                  return;
                }
              });
            } else if (dec.id.name[1] === dec.id.name[1].toUpperCase() && !hungarianIdChecker(dec, false)) {
              context.report({
                node: dec,
                message: NOT_VALID_FLAG,

                fix(fixer) {
                  return;
                }
              });
            }
          });
        }
      });
    }
  };

    }
};
