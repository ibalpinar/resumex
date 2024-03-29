module.exports = {
   root: true,
   env: {
      node: true,
   },
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
   },
   "rules": {
      "semi": "error",
      'no-unused-vars': [
         "error",
         {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
         }
      ]
   },
   extends: ['eslint:recommended', 'plugin:prettier/recommended']
};
