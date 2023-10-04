function category(c) {
   var item = document.getElementById('item-' + c).innerHTML;
   document.getElementsByTagName('input')[2].value = item;
}

function dropdown(p) {
   var e = document.getElementsByClassName('dropdown')[1];
   var d = ['block', 'none'];
   e.style.display = d[p];

   var t = ['0px', '0px', '-10px'];
   setTimeout(function () {
      e.style.transform = 'translate(' + t[p] + ')';
   }, 0);
}

function opcao(c) {
   var item = document.getElementById('massa-' + c).innerHTML;
   document.getElementsByTagName('input')[1].value = item;
}

function drop(p) {
   var e = document.getElementsByClassName('dropdown')[0];
   var d = ['block', 'none'];
   e.style.display = d[p];

   var t = ['0px', '0px', '-10px'];
   setTimeout(function () {
      e.style.transform = 'translate(' + t[p] + ')';
   }, 0);
}

function calcularValor() {
   var kg = parseFloat(document.getElementById("quantidade").value);
   var valorPorKg = 70;
   var valorTotal = kg * valorPorKg;

   var valorTotalElement = document.getElementById("valor_total");
   if (valorTotalElement) {
      valorTotalElement.innerHTML = "Valor: R$" + valorTotal.toFixed(2) + "<br> + taxa de entrega.";
   }
}

// Função para obter o texto do checkbox
function getCheckboxText() {
   var checkbox = document.getElementById('checkbox-topo');
   return checkbox.checked ? "Sim" : "Não";
}

// Função para formatar as informações do formulário como texto
function formatPedidoText() {
   var quantidade = document.getElementById('quantidade').value;
   var massa = document.getElementById('massa').value;
   var recheio = document.getElementById('recheio').value;
   var nome = document.getElementById('nome').value;
   var telefone = document.getElementById('telefone').value;
   var data = document.getElementById('data').value;
   var time = document.getElementById('time').value;
   var endereco = document.getElementById('endereco').value;
   var valorTotal = document.getElementById('valor_total').innerText;

   var checkboxText = getCheckboxText();

   var pedidoText =
      "\u{1F382} Pedido Sweet Cacau!\n" +
      "- - - - - - - - - - - -\n" +
      "Peso: " + quantidade + " kg\n" +
      "Massa: " + massa + "\n" +
      "Recheio: " + recheio + "\n" +
      "Topo do bolo: " + checkboxText + "\n" +
      "- - - - - - - - - - - -\n" +
      "Nome: " + nome + "\n" +
      "Telefone: " + telefone + "\n" +
      "Data: " + data + "\n" +
      "Horário: " + time + "\n" +
      "_________________________\n" +
      "Endereço de entrega: " + endereco + "\n" +
      "_________________________\n" +
      "" + valorTotal;

   return encodeURIComponent(pedidoText); // Codifica o texto para ser usado na URL
}

// Adiciona um evento ao botão de envio do formulário
document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('btn-enviar-pedido').addEventListener('click', function (event) {
         event.preventDefault(); // Impede o envio do formulário neste ponto

         // Obtém o texto formatado do pedido
         var pedidoText = formatPedidoText();

         // Redireciona para o WhatsApp com as informações do pedido pré-preenchidas
         window.location.href = "https://wa.me/+558399468033/?text=" + pedidoText;
      });
    });




