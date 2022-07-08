# AngularTinymce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# TinyMCE Angular Editor

For Angular 14, use integration version to the latest:

`npm install --save tinymce @tinymce/tinymce-angular`

* For the TinyMCE Angular Quick Start, see: [TinyMCE Documentation - Angular Integration](https://www.tiny.cloud/docs/tinymce/6/angular-cloud/).
* For the TinyMCE Angular Technical Reference, see: [TinyMCE Documentation - TinyMCE Angular Technical Reference](https://www.tiny.cloud/docs/tinymce/6/angular-ref/).

after installing the tinymce.
`go to src/app/app.module.ts` and add the following imports.

`import { EditorModule } from '@tinymce/tinymce-angular';`

then for the html to have the editor we need we have to add the necessary lines to /src/app/app.component.html.

`<h1>TinyMCE Angular </h1>
<editor
  [init]="{ base_url: '/tinymce', // Root for resources
  suffix: '.min'        // Suffix to use when loading resources
  plugins: 'lists link image table code help wordcount' }"
></editor>`
we then add the Tinymce assest to angular.json 
`"assets": [
  { "glob": "**/*", "input": "node_modules/tinymce", "output": "/tinymce/" }
]`
To load the tinymce we added we have to add a dependency provider to the module using the TINYMCE_SCRIPT_SRC token in `src/app/app.module.ts`.
`providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]`
which will have been using the scripts that are necessary to use.
`"scripts": [
  "node_modules/tinymce/tinymce.min.js"
]`
