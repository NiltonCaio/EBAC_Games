$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            jogo: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            jogo: 'Selecio um jogo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-jogos button').click(function() {
        const destino = $('.formulario')

        const jogoSelecionado = $(this).parent().find('h3').text()
        $('#jogo').val(jogoSelecionado)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})