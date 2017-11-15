System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "Eonasdan/bootstrap-datetimepicker": "github:Eonasdan/bootstrap-datetimepicker@4.17.47",
    "jquery": "npm:jquery@3.2.1",
    "knockout": "github:knockout/knockout@3.4.2",
    "lodash": "npm:lodash@4.17.4",
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.7",
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    }
  }
});
