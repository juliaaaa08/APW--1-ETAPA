

function pedido (preco, escolha){

    let final = total.value;
    
    if(escolha){
        final = Number(final) + Number(preco);
    } else{
        final = Number(final) - Number(preco);
    }

    total.value = final.toFixed(2);

    return final;
}


function resultado(){

    let preco = 0;
    let escolha = true;

    alert(`Seu pedido foi anotado!`)
    let valorfinal = pedido(preco, escolha);
    
    let desconto = valorfinal * 0.15;
    let valordesc = valorfinal - desconto;
    
    pronto.innerHTML = `Compra realizada!`;
    resp.innerHTML = `<p>Valor final da compra <strong>R$ ${total.value}</strong><p>`;
    resp1.innerHTML = `<p>Desconto de primeira compra: <strong>R$ ${desconto.toFixed(2)}(15% para cada)</p>`;
    resp2.innerHTML = `<p>Valor final caso seja sua primeira compra: <strong>R$ ${valordesc.toFixed(2)}</strong> </p>`;


    
    
}



