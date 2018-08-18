module.exports = {

    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: [
        'ava',
        'unicorn',
        'node',
        'no-use-extend-native',
        'eslint-comments',
        'no-loops',
        'sonarjs',
        'promise',
        'more',
    ],
    rules: {
        // unicorn:
        'unicorn/catch-error-name': ['off', {name: 'err'}],
        'unicorn/explicit-length-check': 'error',
        'unicorn/filename-case': ['off', {case: 'kebabCase'}],
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/throw-new-error': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-new-buffer': 'off',
        'unicorn/no-hex-escape': 'off',
        'unicorn/custom-error-definition': 'off',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/import-index': 'error',
        'unicorn/new-for-builtins': 'off',
        'unicorn/regex-shorthand': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/error-message': 'error',
        'unicorn/no-unsafe-regex': 'off',
        'unicorn/prefer-add-event-listener': 'off',

        // AVA:
        'ava/assertion-arguments': 'error',
        'ava/max-asserts': ['off', 5],
        'ava/no-async-fn-without-await': 'error',
        'ava/no-cb-test': 'off',
        'ava/no-duplicate-modifiers': 'error',
        'ava/no-identical-title': 'error',
        'ava/no-ignored-test-files': 'error',
        'ava/no-import-test-files': 'error',
        'ava/no-invalid-end': 'error',
        'ava/no-nested-tests': 'error',
        'ava/no-only-test': 'warn',
        'ava/no-skip-assert': 'warn',
        'ava/no-skip-test': 'warn',
        'ava/no-statement-after-end': 'error',
        'ava/no-todo-implementation': 'error',
        'ava/no-todo-test': 'warn',
        'ava/no-unknown-modifiers': 'error',
        'ava/prefer-async-await': 'warn',
        'ava/prefer-power-assert': 'off',
        'ava/test-ended': 'error',
        'ava/test-title': ['error', 'always'],
        'ava/use-t-well': 'error',
        'ava/use-t': 'error',
        'ava/use-test': 'error',
        'ava/use-true-false': 'off',

        // Node:
        'node/no-extraneous-import': 'error',
        'node/no-extraneous-require': 'error',
        'node/no-missing-import': 'error',
        'node/no-missing-require': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'error',
        'node/no-unpublished-require': 'off',
        'node/no-unsupported-features/es-builtins': 'warn',
        'node/no-unsupported-features/es-syntax': 'warn',
        'node/no-unsupported-features/node-builtins': 'warn',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
        'node/no-deprecated-api': 'warn',
        'node/exports-style': 'error',
        'node/prefer-global/buffer': 'error',
        'node/prefer-global/console': 'error',
        'node/prefer-global/process': 'error',
        'node/prefer-global/url-search-params': 'error',
        'node/prefer-global/url': 'error',

        // no-use-extend-native:
        'no-use-extend-native/no-use-extend-native': 'warn',

        //eslint-comments:
        'eslint-comments/disable-enable-pair': [
            'error',
            {allowWholeFile: true},
        ],
        'eslint-comments/no-aggregating-enable': 'off',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-restricted-disable': 'off',
        'eslint-comments/no-use': 'off',

        // no-loops:
        'no-loops/no-loops': 'off',

        // sonarjs:
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-extra-arguments': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-identical-expressions': 'error',
        'sonarjs/no-one-iteration-loop': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',
        'sonarjs/prefer-while': 'error',

        // promise:
        'promise/catch-or-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/always-return': 'warn',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',

        // more:
        'more/no-void-map': 'error',
        'more/no-c-like-loops': 'warn',
        'more/prefer-includes': 'error',
        'more/no-then': 'off',
        'more/no-window': 'error',
        'more/no-numeric-endings-for-variables': 'off',
        'more/no-filter-instead-of-find': 'error',
        'more/force-native-methods': 'warn',
        'more/no-duplicated-chains': 'off',
        'more/classbody-starts-with-newline': 'off',

        // CORE Eslint rules:

        // Possible Errors:
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': [
            'error',
            {allowEmptyCatch: true},
        ],
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': [
            'error',
            {requireStringLiterals: true},
        ],

        // Best Practices:
        'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'class-methods-use-this': 'error',
        complexity: 'off',
        'consistent-return': 'error',
        curly: [
            'error',
            'multi-line',
        ],
        'default-case': 'error',
        'dot-location': [
            'error',
            'property',
        ],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'warn',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'off',
        'no-return-assign': [
            'error',
            'always',
        ],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': [
            'error',
            {props: true},
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': [
            'error',
            {allowEmptyReject: true},
        ],
        radix: 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'vars-on-top': 'error',
        'wrap-iife': [
            'error',
            'inside',
            {functionPrototypeMethods: true},
        ],
        yoda: 'error',

        // Strict Mode:
        strict: [
            'error',
            'never',
        ],

        // Variables:
        'init-declarations': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': [
            'error',
            'event',
        ],
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-undef': [
            'error',
            {typeof: true},
        ],
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                args: 'none',
                argsIgnorePattern: '^_$',
            },
        ],
        'no-use-before-define': [
            'error',
            'nofunc',
        ],

        // Node.js and CommonJS:
        'callback-return': [
            'warn',
            [
                'cb',
                'callback',
                'next',
                'done',
            ],
        ],
        'global-require': 'warn',
        'handle-callback-err': 'warn',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'off',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': [
            'error',
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors',
        ],
        'no-sync': 'off',

        // Stylistic Issues:
        'array-bracket-newline': [
            'error',
            {multiline: true},
        ],
        'array-bracket-spacing': [
            'error',
            'never',
        ],
        'array-element-newline': 'off',
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs',
            {allowSingleLine: true},
        ],
        camelcase: [
            'error',
            {properties: 'always'},
        ],
        'capitalized-comments': 'off',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'comma-style': [
            'error',
            'last',
        ],
        'computed-property-spacing': [
            'error',
            'never',
        ],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-call-spacing': [
            'error',
            'never',
        ],
        'func-name-matching': 'error',
        'func-names': [
            'error',
            'never',
        ],
        'func-style': 'off',
        'function-paren-newline': [
            'error',
            'multiline',
        ],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent: [
            'error',
            4,
        ],
        'jsx-quotes': 'error',
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                overrides: {
                    catch: {after: false},
                    if: {after: false},
                    for: {after: false},
                    while: {after: false},
                },
            },
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix',
        ],
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true,
            },
        ],
        'new-parens': 'error',
        'newline-per-chained-call': [
            'error',
            {ignoreChainWithDepth: 3},
        ],
        'no-array-constructor': 'error',
        'no-bitwise': 'warn',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error',
            {max: 1},
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'off',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': ['error', 'beside'],
        'object-curly-newline': [
            'error',
            {multiline: true},
        ],
        'object-curly-spacing': [
            'error',
            'never',
        ],
        'object-property-newline': 'off',
        'one-var': [
            'error',
            'never',
        ],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'error',
            'always',
        ],
        'operator-linebreak': [
            'error',
            'after',
        ],
        'padded-blocks': [
            'error',
            'never',
        ],
        'padding-line-between-statements': 'off',
        'prefer-object-spread': 'off',
        'quote-props': [
            'error',
            'as-needed',
        ],
        quotes: [
            'error',
            'single',
            {allowTemplateLiterals: true},
        ],
        'require-jsdoc': 'off',
        semi: [
            'error',
            'always',
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': [
            'error',
            'last',
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': [
            'error',
            'never',
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'off',
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'template-tag-spacing': [
            'error',
            'never',
        ],
        'unicode-bom': [
            'error',
            'never',
        ],
        'wrap-regex': 'off',

        // ECMAScript 6:
        'arrow-body-style': 'error',
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'constructor-super': 'error',
        'generator-star-spacing': [
            'error',
            'both',
        ],
        'no-class-assign': 'error',
        'no-confusing-arrow': 'off',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': [
            'error',
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors',
        ],
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': [
            'error',
            'never',
        ],
        'sort-imports': 'off',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': [
            'error',
            'both',
        ],
    },
};
