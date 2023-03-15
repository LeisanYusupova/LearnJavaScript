// <!DOCTYPE HTML>
// <html>
// <body>

//   <ul>
//     <li>Животные
//       <ul>
//         <li>Млекопитающие
//           <ul>
//             <li>Коровы</li>
//             <li>Ослы</li>
//             <li>Собаки</li>
//             <li>Тигры</li>
//           </ul>
//         </li>
//         <li>Другие
//           <ul>
//             <li>Змеи</li>
//             <li>Птицы</li>
//             <li>Ящерицы</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li>Рыбы
//       <ul>
//         <li>Аквариумные
//           <ul>
//             <li>Гуппи</li>
//             <li>Скалярии</li>
//           </ul>
//         </li>
//         <li>Морские
//           <ul>
//             <li>Морская форель</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>
// </body>
// </html>



let items = document.getElementsByTagName('li');

for (let li of items) {
  let count = li.getElementsByTagName('li').length;
  if (!count) continue;
  li.firstChild.data += ' [' + count + ']';
}
