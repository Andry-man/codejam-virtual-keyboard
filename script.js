let area = document.createElement('textarea'); //область вывода\ввода текста
area.id = 'area';
area.style.fontSize = '2em';
area.className = "area";
area.style.width = '906px';
area.style.display = 'flex';
area.style.margin = 'auto';
area.style.height = '227px';

document.body.append(area);

let input_area = document.createElement('div')//область клавиатуры
input_area.id = 'input_area';
input_area.className = "input_area"
input_area.style.width = '912px';
input_area.style.display = 'flex';
input_area.style.margin = 'auto';
input_area.style.height = '320px';
input_area.style.flexDirection = 'row';
input_area.style.flexWrap = 'wrap';
input_area.style.paddingLeft = '4.5%'
document.body.append(input_area);
document.body.style.backgroundColor = 'white'


let button = document.createElement('li');// кнопка (родитель)
button.id = 'button';
button.classList.add("button") 
button.innerText= 'ё'


input_area.append(button);

let buttonID = document.getElementById("button");
let button_1 = buttonID.cloneNode(true);
button_1.innerText= '1'
button_1.style.backgroundColor = 'rgb(47, 47, 47)'

let button_2 = buttonID.cloneNode(true);
button_2.innerText= '2'
button_2.style.backgroundColor = 'rgb(47, 47, 47)'

let button_3 = buttonID.cloneNode(true);
button_3.innerText= '3'
button_3.style.backgroundColor = 'rgb(47, 47, 47)'

let button_4 = buttonID.cloneNode(true);
button_4.innerText= '4'
button_4.style.backgroundColor = 'rgb(47, 47, 47)'

let button_5 = buttonID.cloneNode(true);
button_5.innerText= '5'
button_5.style.backgroundColor = 'rgb(47, 47, 47)'

let button_6 = buttonID.cloneNode(true);
button_6.innerText= '6'
button_6.style.backgroundColor = 'rgb(47, 47, 47)'

let button_7 = buttonID.cloneNode(true);
button_7.innerText= '7'
button_7.style.backgroundColor = 'rgb(47, 47, 47)'

let button_8 = buttonID.cloneNode(true);
button_8.innerText= '8'
button_8.style.backgroundColor = 'rgb(47, 47, 47)'

let button_9 = buttonID.cloneNode(true);
button_9.innerText= '9'
button_9.style.backgroundColor = 'rgb(47, 47, 47)'

let button_0 = buttonID.cloneNode(true);
button_0.innerText= '0'
button_0.style.backgroundColor = 'rgb(47, 47, 47)'

let button_ = buttonID.cloneNode(true);
button_.innerText= '-'
button_.style.backgroundColor = 'rgb(47, 47, 47)'

let button_plus = buttonID.cloneNode(true);
button_plus.innerText= '='
button_plus.style.backgroundColor = 'rgb(47, 47, 47)'

let buttonBackspace = buttonID.cloneNode(true);
buttonBackspace.innerText= 'Backspace'
buttonBackspace.style.width = '15%';
buttonBackspace.style.marginRight = '1%'

input_area.append(button_1);
input_area.append(button_2);
input_area.append(button_3);
input_area.append(button_4);
input_area.append(button_5);
input_area.append(button_6);
input_area.append(button_7);
input_area.append(button_8);
input_area.append(button_9);
input_area.append(button_0);
input_area.append(button_);
input_area.append(button_plus);
input_area.append(buttonBackspace);
let arrButtonFirstRow = [button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_0,button_,button_plus,buttonBackspace]


let button_TAB = buttonID.cloneNode(true);
button_TAB.innerText= 'Tab'
button_TAB.style.width = '6%'

let button_q = buttonID.cloneNode(true);
button_q.innerText= 'q'
button_q.style.backgroundColor = 'rgb(47, 47, 47)'

let button_w = buttonID.cloneNode(true);
button_w.innerText= 'w'
button_w.style.backgroundColor = 'rgb(47, 47, 47)'

let button_e = buttonID.cloneNode(true);
button_e.innerText= 'e'
button_e.style.backgroundColor = 'rgb(47, 47, 47)'

let button_r = buttonID.cloneNode(true);
button_r.innerText= 'r'
button_r.style.backgroundColor = 'rgb(47, 47, 47)'

let button_t = buttonID.cloneNode(true);
button_t.innerText= 't'
button_t.style.backgroundColor = 'rgb(47, 47, 47)'

let button_y = buttonID.cloneNode(true);
button_y.innerText= 'y'
button_y.style.backgroundColor = 'rgb(47, 47, 47)'

let button_u = buttonID.cloneNode(true);
button_u.innerText= 'u'
button_u.style.backgroundColor = 'rgb(47, 47, 47)'

let button_i = buttonID.cloneNode(true);
button_i.innerText= 'i'
button_i.style.backgroundColor = 'rgb(47, 47, 47)'

let button_o = buttonID.cloneNode(true);
button_o.innerText= 'o'
button_o.style.backgroundColor = 'rgb(47, 47, 47)'

let button_p = buttonID.cloneNode(true);
button_p.innerText= 'p'
button_p.style.backgroundColor = 'rgb(47, 47, 47)'

let button_bracket = buttonID.cloneNode(true);
button_bracket.innerText= '['
button_bracket.style.backgroundColor = 'rgb(47, 47, 47)'

let button_bracket2= buttonID.cloneNode(true);
button_bracket2.innerText= ']'
button_bracket2.style.width = '5%';
button_bracket2.style.backgroundColor = 'rgb(47, 47, 47)'

let button_slash = buttonID.cloneNode(true);
button_slash.innerText= '\\'
button_slash.style.backgroundColor = 'rgb(47, 47, 47)'

let button_del = buttonID.cloneNode(true);
button_del.innerText= 'del'
button_del.style.width = '8%';
button_del.style.marginRight = '5%'

input_area.append(button_TAB);
input_area.append(button_q);
input_area.append(button_w);
input_area.append(button_e);
input_area.append(button_r);
input_area.append(button_t);
input_area.append(button_y);
input_area.append(button_u);
input_area.append(button_i);
input_area.append(button_o);
input_area.append(button_p);
input_area.append(button_bracket);
input_area.append(button_bracket2);
input_area.append(button_slash);
input_area.append(button_del);
let arrButtonSecondRow = [button_TAB,button_q,button_w,button_e,button_r,button_t,button_y,button_u,button_i,button_o,button_p,button_bracket,button_bracket2,button_slash,button_del]

let button_capsLock = buttonID.cloneNode(true);
button_capsLock.innerText= 'CapsLock';
button_capsLock.style.width = '11%';
button_capsLock.id = 'button_capsLock';
let button_a = buttonID.cloneNode(true);
button_a.innerText= 'a'
button_a.style.backgroundColor = 'rgb(47, 47, 47)'
let button_s = buttonID.cloneNode(true);
button_s.innerText= 's'
button_s.style.backgroundColor = 'rgb(47, 47, 47)'

let button_d = buttonID.cloneNode(true);
button_d.innerText= 'd'
button_d.style.backgroundColor = 'rgb(47, 47, 47)'

let button_f = buttonID.cloneNode(true);
button_f.innerText= 'f'
button_f.style.backgroundColor = 'rgb(47, 47, 47)'

let button_g = buttonID.cloneNode(true);
button_g.innerText= 'g'
button_g.style.backgroundColor = 'rgb(47, 47, 47)'

let button_h = buttonID.cloneNode(true);
button_h.innerText= 'h'
button_h.style.backgroundColor = 'rgb(47, 47, 47)'

let button_j = buttonID.cloneNode(true);
button_j.innerText= 'j'
button_j.style.backgroundColor = 'rgb(47, 47, 47)'

let button_k = buttonID.cloneNode(true);
button_k.innerText= 'k'
button_k.style.backgroundColor = 'rgb(47, 47, 47)'

let button_l = buttonID.cloneNode(true);
button_l.innerText= 'l'
button_l.style.backgroundColor = 'rgb(47, 47, 47)'

let button_colon = buttonID.cloneNode(true);
button_colon.innerText= ';'
button_colon.style.backgroundColor = 'rgb(47, 47, 47)'

let button_quotes = buttonID.cloneNode(true);
button_quotes.innerText= "'"
button_quotes.style.backgroundColor = 'rgb(47, 47, 47)'

let button_enter= buttonID.cloneNode(true);
button_enter.innerText= 'enter'
button_enter.style.width = '15%';

input_area.append(button_capsLock);
input_area.append(button_a);
input_area.append(button_s);
input_area.append(button_d);
input_area.append(button_f);
input_area.append(button_g);
input_area.append(button_h);
input_area.append(button_j);
input_area.append(button_k);
input_area.append(button_l);
input_area.append(button_colon);
input_area.append(button_quotes);
input_area.append(button_enter);
let arrButtonTreeRow = [button_capsLock,button_a,button_s,button_d,button_f,button_g,button_h,button_j,button_k,button_l,button_colon,button_quotes,button_enter]

let button_shift = buttonID.cloneNode(true);
button_shift.innerText= 'Shift'
button_shift.style.width = '19%'

let button_z = buttonID.cloneNode(true);
button_z.innerText= 'z'
button_z.style.backgroundColor = 'rgb(47, 47, 47)'

let button_x = buttonID.cloneNode(true);
button_x.innerText= 'x'
button_x.style.backgroundColor = 'rgb(47, 47, 47)'

let button_c = buttonID.cloneNode(true);
button_c.innerText= 'c'
button_c.style.backgroundColor = 'rgb(47, 47, 47)'

let button_v = buttonID.cloneNode(true);
button_v.innerText= 'v'
button_v.style.backgroundColor = 'rgb(47, 47, 47)'

let button_b = buttonID.cloneNode(true);
button_b.innerText= 'b'
button_b.style.backgroundColor = 'rgb(47, 47, 47)'

let button_n = buttonID.cloneNode(true);
button_n.innerText= 'n'
button_n.style.backgroundColor = 'rgb(47, 47, 47)'

let button_m = buttonID.cloneNode(true);
button_m.innerText= 'm'
button_m.style.backgroundColor = 'rgb(47, 47, 47)'

let button_comma = buttonID.cloneNode(true);
button_comma.innerText= ','
button_comma.style.backgroundColor = 'rgb(47, 47, 47)'

let button_point = buttonID.cloneNode(true);
button_point.innerText= '.'
button_point.style.backgroundColor = 'rgb(47, 47, 47)'

let button_slash2 = buttonID.cloneNode(true);
button_slash2.innerText= '/'
button_slash2.style.backgroundColor = 'rgb(47, 47, 47)'

let button_up = buttonID.cloneNode(true);
button_up.innerText= "↑"

let button_shift2= buttonID.cloneNode(true);
button_shift2.innerText= 'Shift'
button_shift2.style.width = '7%'
button_shift2.style.marginRight = '5%'

input_area.append(button_shift);
input_area.append(button_z);
input_area.append(button_x);
input_area.append(button_c);
input_area.append(button_v);
input_area.append(button_b);
input_area.append(button_n);
input_area.append(button_m);
input_area.append(button_comma);
input_area.append(button_point);
input_area.append(button_slash2);
input_area.append(button_up);
input_area.append(button_shift2);
let arrButtonFourthRow = [button_shift,button_z,button_x,button_c,button_v,button_b,button_n,button_m,button_comma,button_point,button_slash2,button_up,button_shift2]

let button_ctrl = buttonID.cloneNode(true);
button_ctrl.innerText= 'ctrl'
button_ctrl.style.width = '7%'
button_ctrl.style.marginLeft = '3%'

let button_win = buttonID.cloneNode(true);
button_win.innerText= 'win'
button_win.style.width = '12%'

let button_alt = buttonID.cloneNode(true);
button_alt.innerText= 'alt'

let button_space = buttonID.cloneNode(true);
button_space.innerText= ''
button_space.style.width = '31%'
button_space.style.backgroundColor = 'rgb(47, 47, 47)'

let button_alt2 = buttonID.cloneNode(true);
button_alt2.innerText= 'alt'

let button_ctrl2 = buttonID.cloneNode(true);
button_ctrl2.innerText= 'ctrl'

let button_left = buttonID.cloneNode(true);
button_left.innerText= '←'

let button_down = buttonID.cloneNode(true);
button_down.innerText= '↓'

let button_right = buttonID.cloneNode(true);
button_right.innerText= '→'



input_area.append(button_ctrl);
input_area.append(button_win);
input_area.append(button_alt);
input_area.append(button_space);
input_area.append(button_alt2);
input_area.append(button_ctrl2);
input_area.append(button_left);
input_area.append(button_down);
input_area.append(button_right);
let arrButtonFiveRow = [button_ctrl,button_win,button_alt,button_space,button_alt,button_ctrl2,button_left,button_down,button_right]
const arrButtonLetters = [ 
    button_q.id = 'button_lett',
    button_w.id = 'button_lett',
    button_e.id = 'button_lett',
    button_r.id = 'button_lett',
    button_t.id = 'button_lett',
    button_y.id = 'button_lett',
    button_u.id = 'button_lett',
    button_i.id = 'button_lett',
    button_o.id = 'button_lett',
    button_p.id = 'button_lett',
    button_a.id = 'button_lett',
    button_s.id = 'button_lett',
    button_d.id = 'button_lett',
    button_f.id = 'button_lett',
    button_g.id = 'button_lett',
    button_h.id = 'button_lett',
    button_j.id = 'button_lett',
    button_k.id = 'button_lett',
    button_l.id = 'button_lett',
    button_z.id = 'button_lett',
    button_x.id = 'button_lett',
    button_c.id = 'button_lett',
    button_v.id = 'button_lett',
    button_b.id = 'button_lett',
    button_n.id = 'button_lett',
    button_m.id = 'button_lett']
let style  = document.createElement('style'); // стили для кнопок
const styleClass = document.createTextNode('.button:active {border-radius: 26px !important; transition:border-radius 0.1s;}\n .button_lett:active {border-radius:26px; transition:border-radius 0.1s;}\n .button_lett:hover {background-color:red !important;}\n .button:hover {background-color:red !important;}\n.button {width: 5%;display: block;height: 55px;margin-right: 1%;margin-left: 0%;color: rgb(255, 141, 0);border-radius: 7px;box-shadow: rgba(0, 0, 0, 0.75) 0px 2px 5px 0px;cursor: pointer;font-family: Play;text-align: center;background-color: rgb(74, 74, 74)}')
style.appendChild(styleClass)
document.body.append(style);

let counter = 0;
input_area.addEventListener('click',(event)=>{ //меняется цвет кнопок при нажатии
    input_area.querySelectorAll('li').forEach(el=>el.classList.remove('button:active'));
    if (event.target.className == "input_area" ) {
        event.target.className != 'button:active'
    }
    event.target.classList.add('button:active')
    if (event.target.id == 'button_capsLock' ) {
        counter++
    }
    if (input_area.classList.length == 2 ) {
        input_area.classList.remove('button:active')
    }
  if (event.target.id == 'button_lett' && counter%2 != true ) {
    area.innerHTML+=event.target.innerText
  }
    if (event.target.id == 'button_lett' && counter%2 == true ) { 
        area.innerHTML+=event.target.innerText.toUpperCase()
    }
  
})




