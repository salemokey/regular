function task1(str) {  
    let re = /^(http):[/][/]/;
    let flag = re.test(str);
    if (flag)
    alert ("Адрес введен правильно!");
    else
    alert ("Адрес не верный!");}
    
    function task2(str) {  
        let re = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        let flag = re.test(str);
        if (flag)
          alert("Переменная объявлена верно!");
        else
          alert("Переменная объявлена неверно!");
      }