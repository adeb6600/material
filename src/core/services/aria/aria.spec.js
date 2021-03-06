describe('$mdAria service', function() {
  beforeEach(module('material.core'));

  describe('expecting attributes', function(){
    it('should warn if element is missing text', inject(function($compile, $rootScope, $log, $mdAria) {
      spyOn($log, 'warn');
      var button = $compile('<button><md-icon></md-icon></button>')($rootScope);

      $mdAria.expect(button, 'aria-label');

      expect($log.warn).toHaveBeenCalled();
    }));

    it('should not warn if child element has attribute', inject(function($compile, $rootScope, $log, $mdAria) {
      spyOn($log, 'warn');
      var button = $compile('<button><md-icon aria-label="text"></md-icon></button>')($rootScope);

      $mdAria.expect(button, 'aria-label');

      expect($log.warn).not.toHaveBeenCalled();
    }));

    it('should warn if child with attribute is hidden', inject(function($compile, $rootScope, $log, $mdAria) {
      spyOn($log, 'warn');
      var container = angular.element(document.body);
      var button = $compile('<button><md-icon aria-label="text" style="display:none;"></md-icon></button>')($rootScope);

      container.append(button);

      $mdAria.expect(button, 'aria-label');

      expect($log.warn).toHaveBeenCalled();

      button.remove();

    }));
  });

});
