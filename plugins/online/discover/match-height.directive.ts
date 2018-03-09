namespace Online {

  export class MatchHeightDirective implements ng.IDirective {

    restrict : 'A';

    constructor(private $timeout: ng.ITimeoutService) {
      'ngInject';
    }

    link(scope: ng.IScope) {
      this.$timeout(() => {
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-items").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-info").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
      }, 0, false);
    };
  }
}
