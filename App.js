angular
  .module("listaTelefonica", [])
  .controller("listaTelefonica", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
      { nome: "Tony", telefone: "99369-2843" },
      { nome: "Matheus", telefone: "99399-8843" },
      { nome: "Edna", telefone: "99369-8843" },
      { nome: "Paula", telefone: "988664-2843" },
      { nome: "Mara", telefone: "989990-2843" },
    ];
    $scope.adicionarContato = function (contato) {
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
    };
  });
