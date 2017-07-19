export class DialogController{

  hide = function() {
    $mdDialog.hide();
  };

 cancel = function() {
    $mdDialog.cancel();
  };

  answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
