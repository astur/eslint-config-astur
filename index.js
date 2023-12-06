module.exports = {

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        node: true,
        browser: true,
        es2022: true,
    },
    plugins: [
        'ava',
        'unicorn',
        'n',
        'no-use-extend-native',
        'eslint-comments',
        'sonarjs',
        'promise',
        'more',
    ],
    rules: {
        // unicorn:
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': ['off', {name: 'err'}],
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/custom-error-definition': 'error',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/expiring-todo-comments': 'off',
        'unicorn/explicit-length-check': 'error',
        'unicorn/filename-case': ['off', {case: 'kebabCase'}],
        'unicorn/import-style': 'off',
        'unicorn/new-for-builtins': 'warn',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'warn',
        'unicorn/no-array-method-this-argument': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-console-spaces': 'off',
        'unicorn/no-document-cookie': 'off',
        'unicorn/no-empty-file': 'off',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'off',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-invalid-remove-event-listener': 'off',
        'unicorn/no-keyword-prefix': 'off',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-new-array': 'off',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'warn',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-thenable': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-typeof-undefined': ['error', {checkGlobalVariables: true}],
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-unreadable-array-destructuring': 'off',
        'unicorn/no-unreadable-iife': 'off',
        'unicorn/no-unused-properties': 'off',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'off',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-useless-switch-case': 'error',
        'unicorn/no-useless-undefined': 'error',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/number-literal-case': 'error',
        'unicorn/numeric-separators-style': ['error', {onlyIfContainsSeparator: true}],
        'unicorn/prefer-add-event-listener': 'off',
        'unicorn/prefer-array-find': ['error', {checkFromLast: true}],
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-at': 'error',
        'unicorn/prefer-blob-reading-methods': 'off',
        'unicorn/prefer-code-point': 'off',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/prefer-dom-node-append': 'off',
        'unicorn/prefer-dom-node-dataset': 'off',
        'unicorn/prefer-dom-node-remove': 'off',
        'unicorn/prefer-dom-node-text-content': 'off',
        'unicorn/prefer-event-target': 'off',
        'unicorn/prefer-export-from': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-json-parse-buffer': 'off',
        'unicorn/prefer-keyboard-event-key': 'off',
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/prefer-math-trunc': 'off',
        'unicorn/prefer-modern-dom-apis': 'off',
        'unicorn/prefer-modern-math-apis': 'off',
        'unicorn/prefer-module': 'error',
        'unicorn/prefer-native-coercion-functions': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'warn',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-prototype-methods': 'error',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prefer-reflect-apply': 'error',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-set-size': 'off',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-switch': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-top-level-await': 'off', // future
        'unicorn/prefer-type-error': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/relative-url-style': 'error',
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'off',
        'unicorn/require-post-message-target-origin': 'off',
        'unicorn/string-content': 'off',
        'unicorn/switch-case-braces': 'off',
        'unicorn/template-indent': 'off',
        'unicorn/text-encoding-identifier-case': 'error',
        'unicorn/throw-new-error': 'error',

        // AVA:
        'ava/assertion-arguments': 'error',
        'ava/max-asserts': ['off', 5],
        'ava/no-async-fn-without-await': 'error',
        'ava/no-duplicate-modifiers': 'error',
        'ava/no-identical-title': 'error',
        'ava/no-ignored-test-files': 'error',
        'ava/no-import-test-files': 'error',
        'ava/no-nested-tests': 'error',
        'ava/no-only-test': 'warn',
        'ava/no-skip-assert': 'warn',
        'ava/no-skip-test': 'warn',
        'ava/no-todo-implementation': 'error',
        'ava/no-todo-test': 'warn',
        'ava/no-unknown-modifiers': 'error',
        'ava/prefer-async-await': 'warn',
        'ava/prefer-power-assert': 'off',
        'ava/test-title': 'error',
        'ava/use-t-well': 'error',
        'ava/use-t': 'error',
        'ava/use-test': 'error',
        'ava/use-true-false': 'off',
        'ava/hooks-order': 'off',
        'ava/no-incorrect-deep-equal': 'off',
        'ava/no-inline-assertions': 'off',
        'ava/prefer-t-regex': 'off',
        'ava/test-title-format': 'off',
        'ava/use-t-throws-async-well': 'off',

        // Node:
        'n/no-extraneous-import': 'error',
        'n/no-extraneous-require': 'error',
        'n/no-missing-import': 'error',
        'n/no-missing-require': 'error',
        'n/no-unpublished-bin': 'error',
        'n/no-unpublished-import': 'error',
        'n/no-unpublished-require': 'error',
        'n/no-unsupported-features/es-builtins': 'warn',
        'n/no-unsupported-features/es-syntax': 'warn',
        'n/no-unsupported-features/node-builtins': 'warn',
        'n/process-exit-as-throw': 'error',
        'n/shebang': 'error',
        'n/no-deprecated-api': 'warn',
        'n/exports-style': 'error',
        'n/prefer-global/buffer': 'error',
        'n/prefer-global/console': 'error',
        'n/prefer-global/process': 'error',
        'n/prefer-global/url-search-params': 'error',
        'n/prefer-global/url': 'error',
        'n/handle-callback-err': 'off',
        'n/no-callback-literal': 'off',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'off',
        'n/no-process-exit': 'off',
        'n/callback-return': 'off',
        'n/file-extension-in-import': 'off',
        'n/global-require': 'off',
        'n/no-mixed-requires': 'off',
        'n/no-process-env': 'off',
        'n/no-restricted-import': 'off',
        'n/no-restricted-require': 'off',
        'n/no-sync': 'off',
        'n/prefer-global/text-decoder': 'error',
        'n/prefer-global/text-encoder': 'error',
        'n/prefer-promises/dns': 'off',
        'n/prefer-promises/fs': 'off',

        // no-use-extend-native:
        'no-use-extend-native/no-use-extend-native': 'warn',

        // eslint-comments:
        'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-restricted-disable': 'off',
        'eslint-comments/no-use': 'off',
        'eslint-comments/require-description': 'off',

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
        'sonarjs/no-empty-collection': 'off',
        'sonarjs/no-ignored-return': 'off',
        'sonarjs/non-existent-operator': 'error',
        'sonarjs/elseif-without-else': 'off',
        'sonarjs/max-switch-cases': 'off',
        'sonarjs/no-collapsible-if': 'off',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-gratuitous-expressions': 'off',
        'sonarjs/no-inverted-boolean-check': 'off',
        'sonarjs/no-nested-switch': 'off',
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/no-redundant-jump': 'off',
        'sonarjs/no-same-line-conditional': 'error',
        'sonarjs/no-unused-collection': 'off',
        'sonarjs/no-useless-catch': 'off',
        'sonarjs/prefer-object-literal': 'off',

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
        'promise/no-multiple-resolved': 'off',

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
        'more/no-hardcoded-password': 'off',
        'more/no-hardcoded-configuration-data': 'off',

        // CORE Eslint rules:

        // Possible Problems
        'array-callback-return': ['error', {checkForEach: true}],
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-const-assign': 'error',
        'no-constant-binary-expression': 'error',
        'no-constant-condition': 'error',
        'no-constructor-return': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': ['error', {includeExports: true}],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-new-symbol': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-self-assign': ['error', {props: true}],
        'no-self-compare': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-undef': ['error', {typeof: true}],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': ['error', {enforceForOrderingRelations: true}],
        'no-unsafe-optional-chaining': 'error',
        'no-unused-private-class-members': 'error',
        'no-unused-vars': ['error', {ignoreRestSiblings: true, args: 'none', argsIgnorePattern: '^_$'}],
        'no-use-before-define': ['error', 'nofunc'],
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': ['error', {enforceForIndexOf: true}],
        'valid-typeof': ['error', {requireStringLiterals: true}],

        // Suggestions
        'accessor-pairs': 'off',
        'arrow-body-style': 'error',
        'block-scoped-var': 'error',
        camelcase: 'error',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'error',
        complexity: 'off',
        'consistent-return': 'error',
        'consistent-this': 'off',
        curly: ['error', 'multi-line'],
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'func-name-matching': 'error',
        'func-names': ['error', 'never'],
        'func-style': 'off',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'init-declarations': 'error',
        'logical-assignment-operators': 'off',
        'max-classes-per-file': 'off',
        'max-depth': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'new-cap': ['error', {capIsNew: false}],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-confusing-arrow': 'off',
        'no-console': 'warn',
        'no-continue': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty': ['error', {allowEmptyCatch: true}],
        'no-empty-function': 'warn',
        'no-empty-static-block': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': ['error', {enforceForLogicalOperands: true}],
        'no-extra-label': 'error',
        'no-extra-semi': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'off',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'off',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['warn', {props: true}],
        'no-plusplus': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-restricted-exports': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': ['error', {enforceForClassMembers: true}],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-destructuring': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
        'prefer-regex-literals': ['error', {disallowRedundantWrapping: true}],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        radix: 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'require-yield': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': 'off',
        strict: ['error', 'never'],
        'symbol-description': 'error',
        'vars-on-top': 'error',
        yoda: 'error',

        // Layout & Formatting
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-element-newline': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': ['error'],
        'computed-property-spacing': 'error',
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'function-call-argument-newline': 'off',
        'function-paren-newline': 'error',
        'generator-star-spacing': 'error',
        'implicit-arrow-linebreak': 'error',
        indent: 'error',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': ['error', {overrides: {catch: {after: false}, if: {after: false}, for: {after: false}, while: {after: false}}}],
        'line-comment-position': 'off',
        'linebreak-style': 'error',
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'max-len': 'off',
        'max-statements-per-line': 'off',
        'multiline-ternary': 'off',
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-extra-parens': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': ['error', {multiline: true}],
        'object-curly-spacing': 'error',
        'object-property-newline': 'off',
        'operator-linebreak': 'error',
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': 'off',
        quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': ['error', 'never'],
        'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'wrap-iife': ['error', 'inside', {functionPrototypeMethods: true}],
        'wrap-regex': 'off',
        'yield-star-spacing': ['error', 'both'],
    },
};
