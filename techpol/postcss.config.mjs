/*
================================================================================
File: postcss.config.js
Description: UPDATED - This file now explicitly requires the plugins to ensure
             they are loaded correctly, which is the most robust configuration
             method.
================================================================================
*/
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;