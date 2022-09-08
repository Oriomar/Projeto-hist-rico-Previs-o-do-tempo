function myFunction() {
    let hora = document.getElementById("hora");
    let data_americana = document.getElementById("data");
    let dataFormatada = formataData(data_americana.value);
    hora = hora.value + ":00"

    const valorEncontrado =
      dadosJson.find((item) => item.data == dataFormatada && item.hora == hora);
     
    document.getElementById("resultadoData").innerHTML = dataFormatada;
     document.getElementById("resultadoHora").innerHTML = valorEncontrado.hora;
     document.getElementById("resultadoTemperatura").innerHTML = valorEncontrado.temperatura;
     document.getElementById("resultadoUmidade").innerHTML = valorEncontrado.umidade;
     document.getElementById("resultadoChuva").innerHTML = valorEncontrado.chuva;
    //  document.getElementById('hora').value='';
    //  document.getElementById('data').value='';
  }
  
  function formataData(value) {
    let arr = value.split("-").reverse();
    const day = arr.shift(0);
    const month = arr.shift(0);
    const year = arr.shift(0);
  
    arr.push(month);
    arr.push(day);
    arr.push(year);
  
    return arr.join("/");
  }
  