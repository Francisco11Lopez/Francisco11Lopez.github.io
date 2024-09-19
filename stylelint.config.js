/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  plugins: [],
  rules: {
    'block-no-empty': true,
    'alpha-value-notation': 'number',
    'color-no-invalid-hex': true,
    'color-function-notation': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', 'deg'],
    'keyframe-selector-notation': null,
    'rule-empty-line-before': null,
    'value-keyword-case': null
  }
}
