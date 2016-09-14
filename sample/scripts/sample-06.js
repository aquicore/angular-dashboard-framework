/**
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';

angular.module('sample-06', ['adf.core', 'LocalStorageModule'])
  .controller('sample06Ctrl', function ($scope, localStorageService) {
    var name = 'sample-06.1';

    var model = localStorageService.get(name);
    if (!model) {
      // set default model for demo purposes
      model = {
        title: "Sample 06",
        editable: false,
        structure: "6-6",
        rows: [{
          columns: [{
            flex: "30",
            widgets: [{
              flex: "30",
              fullScreen: false,
              modalSize: 'lg',
              type: "markdown",
              config: {
                content: "# angular-dashboard-framework\n\n> Dashboard framework with Angular.js and Twitter Bootstrap.\n\nThe api of angular-dashboard-framework (adf) is documented [here](http://angular-dashboard-framework.github.io/angular-dashboard-framework/docs/). A getting\nstarted guide can be found [here](https://github.com/angular-dashboard-framework/angular-dashboard-framework/wiki/Getting-started).\nFollow me ([@ssdorra](https://twitter.com/ssdorra)) on twitter for latest updates and news about adf.\n\n## Demo\n\nA live demo of the adf can be viewed [here](http://angular-dashboard-framework.github.io/angular-dashboard-framework/). The demo uses html5 localStorage to store the state of the dashboard. The source of the demo can be found [here](https://github.com/angular-dashboard-framework/angular-dashboard-framework/tree/master/sample).\n\nA more dynamic example can be found [here](https://github.com/angular-dashboard-framework/adf-dynamic-example).\n\n## Build from source\n\nInstall bower and gulp:\n\n```bash\nnpm install -g bower\nnpm install -g gulp\n```\n\nClone the repository:\n\n```bash\ngit clone https://github.com/angular-dashboard-framework/angular-dashboard-framework\ncd angular-dashboard-framework\n```\n\nInstall npm and bower dependencies:\n\n```bash\nnpm install\nbower install\n```\n\nCheckout git submodule widgets:\n\n```bash\ngit submodule init\ngit submodule update\n```\n\nYou can start the sample dashboard, by using the serve gulp task:\n\n```bash\ngulp serve\n```\n\nNow you open the sample in your browser at http://localhost:9001/sample\n\nOr you can create a release build of angular-dashboard-framework and the samples:\n\n```bash\ngulp all\n```\nThe sample and the final build of angular-dashboard-framework are now in the dist directory."
              },
              title: "Markdown"
            }]
          }, {
            flex: "30",
            widgets: [{
              fullScreen: false,
              modalSize: 'lg',
              type: "markdown",
              config: {
                content: "# angular-dashboard-framework\n\n> Dashboard framework with Angular.js and Twitter Bootstrap.\n\nThe api of angular-dashboard-framework (adf) is documented [here](http://angular-dashboard-framework.github.io/angular-dashboard-framework/docs/). A getting\nstarted guide can be found [here](https://github.com/angular-dashboard-framework/angular-dashboard-framework/wiki/Getting-started).\nFollow me ([@ssdorra](https://twitter.com/ssdorra)) on twitter for latest updates and news about adf.\n\n## Demo\n\nA live demo of the adf can be viewed [here](http://angular-dashboard-framework.github.io/angular-dashboard-framework/). The demo uses html5 localStorage to store the state of the dashboard. The source of the demo can be found [here](https://github.com/angular-dashboard-framework/angular-dashboard-framework/tree/master/sample).\n\nA more dynamic example can be found [here](https://github.com/angular-dashboard-framework/adf-dynamic-example).\n\n## Build from source\n\nInstall bower and gulp:\n\n```bash\nnpm install -g bower\nnpm install -g gulp\n```\n\nClone the repository:\n\n```bash\ngit clone https://github.com/angular-dashboard-framework/angular-dashboard-framework\ncd angular-dashboard-framework\n```\n\nInstall npm and bower dependencies:\n\n```bash\nnpm install\nbower install\n```\n\nCheckout git submodule widgets:\n\n```bash\ngit submodule init\ngit submodule update\n```\n\nYou can start the sample dashboard, by using the serve gulp task:\n\n```bash\ngulp serve\n```\n\nNow you open the sample in your browser at http://localhost:9001/sample\n\nOr you can create a release build of angular-dashboard-framework and the samples:\n\n```bash\ngulp all\n```\nThe sample and the final build of angular-dashboard-framework are now in the dist directory."
              },
              title: "Markdown"
            }]
          }]
        }]
      };
    }

    $scope.name = name;
    $scope.model = model;
    $scope.collapsible = false;
    $scope.maximizable = false;
    $scope.categories = false;
    $scope.eventsFired = [];

    var eventFired = function (event, name, model) {
        $scope.eventsFired.push(event);
        localStorageService.set(name, model);
    };

    $scope.$on('adfDashboardChanged', eventFired);
    $scope.$on('adfWidgetAdded', eventFired);
    $scope.$on('adfWidgetMoved', eventFired);
    $scope.$on('adfWidgetAddedToColumn', eventFired);
    $scope.$on('adfWidgetRemovedFromColumn', eventFired);
    $scope.$on('adfWidgetMovedInColumn', eventFired);
  });
