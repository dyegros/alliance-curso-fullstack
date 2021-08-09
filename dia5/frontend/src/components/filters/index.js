module.exports = {
    monetary: function(value) {
        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return formatter.format(value)
    }
}