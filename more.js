export default {
    rules: {
        'no-void-map': {
            create(context){
                return {
                    ExpressionStatement(node){
                        if(
                            node.type === 'ExpressionStatement' &&
                            node.expression.type === 'CallExpression' &&
                            node.expression?.callee?.property?.name === 'map'
                        ){
                            context.report({
                                node,
                                message: 'Here you have to assign this expression to variable or add other function to map',
                            });
                        }
                    },
                };
            },
        },
        'no-c-like-loops': {
            create(context){
                return {
                    ForStatement(node){
                        if(node.update.operator === '++' || node.update.operator === '+='){
                            context.report({
                                node,
                                message: 'Do not use c-like loop with i++ or i +=1, instead use forEach, Map, or For of',
                            });
                        }
                    },
                };
            },
        },
        'prefer-includes': {
            create(context){
                return {
                    BinaryExpression(node){
                        if(node.left?.callee?.type !== 'MemberExpression' || node.left?.callee?.property?.name !== 'indexOf') return;

                        if(
                            node.right?.operator === '-' && node.right?.argument?.value === 1 ||
                            node.operator === '<' && node.right?.value === 0 ||
                            node.operator === '>=' && node.right?.value === 0
                        ){
                            context.report({
                                node,
                                message: 'Do not use indexOf, instead use includes',
                            });
                        }
                    },
                };
            },
        },
        'force-native-methods': {
            create(context){
                return {
                    CallExpression(node){
                        const objectName = node.callee?.name || node.callee?.object?.name;
                        const notAllowedMethods = [
                            'find', 'findIndex', 'indexOf', 'each', 'every', 'filter', 'includes', 'map',
                            'reduce', 'toLower', 'toUpper', 'trim', 'keys',
                        ];

                        if(['_', 'lodash', 'underscore'].includes(objectName) && notAllowedMethods.includes(node.callee?.property?.name)){
                            context.report({
                                node,
                                message: 'Do not use lodash methods, use native instead',
                            });
                        }
                    },
                };
            },
        },
        'no-duplicated-chains': {
            create(context){
                const longChains = [];
                let isInsideCallExpression = false;

                // to avoid subexpressions output
                let memberExpressionsDepth = 0;

                function startFunction(){
                    longChains.push({});
                }

                function endFunction(){
                    longChains.pop();
                }

                function incrementChainCount(chain){
                    if(longChains.length > 0){
                        if(longChains.at(-1)[chain]){
                            longChains.at(-1)[chain]++;
                        } else {
                            longChains.at(-1)[chain] = 1;
                        }

                        return longChains.at(-1)[chain];
                    }

                    return 0;
                }

                function pauseChecking(){
                    isInsideCallExpression = true;
                }

                function resumeChecking(){
                    isInsideCallExpression = false;
                }

                function checkLongChainForDuplication(node){
                    memberExpressionsDepth++;

                    if(
                        memberExpressionsDepth > 1 ||
                        isInsideCallExpression ||
                        node.object?.type !== 'MemberExpression' ||
                        node.computed
                    ){
                        return;
                    }

                    const pathParts = [];
                    let parent = node;
                    let depth = 0;

                    while(parent){
                        if(parent.computed){
                            break;
                        }

                        if(parent.type === 'ThisExpression'){
                            pathParts.push('this');
                        } else if(parent.type === 'MemberExpression'){
                            pathParts.push(parent.property.name);
                        } else if(parent.type === 'Identifier'){
                            pathParts.push(parent.name);
                        } else {
                            break;
                        }

                        depth++;
                        parent = parent.object;
                    }

                    if(depth <= 2){
                        return;
                    }

                    const path = pathParts.reverse().join('.');
                    const chainCount = incrementChainCount(path);

                    if(chainCount >= 2){
                        context.report({
                            node,
                            message: `Do not duplicate long chains. Assign "${path}" to a variable or destruct it.`,
                        });
                    }
                }

                return {
                    FunctionDeclaration: startFunction,
                    FunctionExpression: startFunction,
                    ArrowFunctionExpression: startFunction,
                    'FunctionDeclaration:exit': endFunction,
                    'FunctionExpression:exit': endFunction,
                    'ArrowFunctionExpression:exit': endFunction,
                    MemberExpression: checkLongChainForDuplication,
                    'MemberExpression:exit'(){
                        memberExpressionsDepth--;
                    },
                    CallExpression: pauseChecking,
                    'CallExpression:exit': resumeChecking,

                };
            },
        },
        'no-filter-instead-of-find': {
            create(context){
                return {
                    MemberExpression(node){
                        if(
                            node.property.type === 'Literal' &&
                            node.property.value === 0 &&
                            node.object.type === 'CallExpression' &&
                            node.object?.callee?.property?.name === 'filter'
                        ){
                            context.report({
                                node,
                                message: 'Do not use \'filter\' to find one element, use find method instead',
                            });
                        }
                    },
                };
            },
        },
    },
};
