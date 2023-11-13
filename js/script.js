function task1(str) {  
    let re = /^(http):[/][/]/;
    let flag = re.test(str);
    if (flag)
    alert ("Адрес введен правильно!");
    else
    alert ("Адрес не верный!");}