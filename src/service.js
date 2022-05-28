export function semafaro (a){
    let msg='';
    if(a=='verde'){
        msg='Pode seguir'
    }
    else if(a=='amarelo'){
        msg='vá devagar'
    }
    else if(a=='vermelho'){
        msg='PARE!!'
    }
    else{
        msg='semafaro quebrado'
    }
    return msg
}

export function semana(a){
    let msg='';
    if(a=='0'){
        msg='Domingo'
    }
    else if(a=='1'){
        msg='Segunda'
    }
    else if(a=='2'){
        msg='terça'
    }
    else if(a=='3'){
        msg='quarta'
    }
    else if(a=='4'){
        msg='quinta'
    }
    else if(a=='5'){
        msg='sexta'
    }
    else if(a=='6'){
        msg='sabado'
    }
    else{
        msg='!!insira um dia da semana valido!!'
    }
    return msg
}
