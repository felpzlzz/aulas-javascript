function anosBissextos(anoFInal) {
    for(let ano = 2000; ano <= anoFInal; ano++) {
        if (ano % 4 === 0){
            console.log(ano);
        }
    }
}
anosBissextos(2020);