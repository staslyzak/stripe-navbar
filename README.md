# Use alias without ejection

https://github.com/oklas/react-app-rewire-alias

// config-overrides.js

<!--
const {alias, configPaths} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias(configPaths())(config)

  return config
}
 -->

// jsconfig.json

<!--
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@hooks/*": ["src/hooks/*"],
      "@assets/*": ["src/assets/*"],
      "@layouts/*": ["src/layouts/*"],
      "@components/*": ["src/components/*"],
      "@containers/*": ["src/containers/*"],
      "@pages/*": ["src/pages/*"],
      "@scss/*": ["src/scss/*"]
    }
  }
}
 -->


// package.json

<!-- 
    "start": "react-scripts start" -> "react-app-rewired start", 
 -->
