import { IQuiz } from '../../models/Quiz';

export const JS_TEST: IQuiz = {
    author: 'Alan Agnaev',
    passingScore: 7,
    createdDate: '24/07/2022',
    timer: 600,
    name: 'Javascript Test',
    description: `Темы тестирования:
    <ul style='list-style-position: inside;padding-left: 4px'><li>Тестирование</li><li>Регулярные выражения</li><li>Синтаксис javascript</li><li>Асинхронные запросы</li><li>Работа с dom</li><li>Объекты в javascript</li><li>Работа с массивами</li><li>ООП в javascript</li></ul>`,
    questions: [
        {
            options: [
                '<scripting>',
                '<script>',
                '<javascript>',
                '<js>'
            ],
            title: 'Внутри какого HTML-элемента мы помещаем JavaScript?',
            answer: 1,
            point: 1
        },
        {
            title: 'Каков правильный синтаксис JavaScript для изменения содержимого элемента HTML ниже?<p id="demo">Это демонстрация.</p>',
            options: [
                'document.getElementById("demo").innerHTML = "Hello World!";',
                '#demo.innerHTML = "Hello World!"',
                'document.getElement("p").innerHTML = "Hello World!"',
                'document.getElementByName("p").innerHTML = "Hello World!"'
            ],
            answer: 0,
            point: 1
        },
        {
            title: 'Где корректное место для вставки JavaScript?',
            options: [
                'В <body> секции',
                'Как в разделе <head>, так и разделе <body>',
                'Раздел <head>'
            ],
            answer: 0,
            point: 1
        },
        {
            title: 'Укажите корректную запись',
            options: [
                '<script src="xxx.js">',
                '<script href="xxx.js">',
                '<script name="xxx.js">'
            ],
            answer: 0,
            point: 1
        },
        {
            title: 'Как вы пишете \'Hello world\' в окне оповещения?',
            options: [
                'msgBox("Hello World");',
                'alertBox("Hello World");',
                'msg("Hello World");',
                'alert("Hello World");'
            ],
            answer: 3,
            point: 1
        },
        {
            title: 'Как создать функцию в JavaScript?',
            options: [
                'function = myFuncName()',
                'function:myFuncName()',
                'function myFuncName()'
            ],
            answer: 2,
            point: 1
        },
        {
            title: 'Как вы вызываете функцию с именем "myFuncName"?',
            options: [
                'myFuncName()',
                'call function myFuncName()',
                'call myFuncName()'
            ],
            answer: 0,
            point: 1
        },
        {
            title: 'Как написать оператор IF в JavaScript?',
            options: [
                'if i = 5 then',
                'if i = 5',
                'if i == 5 then',
                'if (i == 5)'
            ],
            answer: 3,
            point: 1
        }
    ],
}