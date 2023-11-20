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
      function task3(str) {  
        let re = /^[^\W_]*$/;
        let flag = re.test(str);
        if (flag)
          alert("Значение верно!");
        else
          alert("Значение неверно!");
      }
      function task5(str) {
          let letters = str.match(/[a-zA-Z]/g);
          let digits = str.match(/\d/g);
      
          console.log("Буквы:", letters.length);
          console.log("Цифры:", digits.length);
      }
//