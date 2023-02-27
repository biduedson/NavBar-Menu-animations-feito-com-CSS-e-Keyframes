
# Menu responsivo  feito  em HTML, CSS e @Keyframes

Menu com animações feitas usando Html, CSS, @Keiframes e Javascript'


## Funcionalidades

- Menu responsivo. 
- Menu com animações ativadas automaticamente  em dispositivos mobile.
- De fácil implementação em seus projetos.



# Demonstração

## Exemplo 1 (Desktop)

![animação_1](https://github.com/biduedson/NavBar-Menu-animations-feito-com-CSS-e-Keyframes/blob/main/assets/to_readme/Desktop_menu.gif?raw=true)


## Exemplo 2 (Mobile)

![animação_1](https://github.com/biduedson/NavBar-Menu-animations-feito-com-CSS-e-Keyframes/blob/main/assets/to_readme/menu1.gif?raw=true)


## Exemplo 3 (Mobile)

![animação_2](https://github.com/biduedson/NavBar-Menu-animations-feito-com-CSS-e-Keyframes/blob/main/assets/to_readme/menu_2.gif?raw=true)

## Exemplo 4 (Mobile)

![animação_3](https://github.com/biduedson/NavBar-Menu-animations-feito-com-CSS-e-Keyframes/blob/main/assets/to_readme/menu_3.gif?raw=true)

## Exemplo 5 (Mobile)

![animação_4](https://github.com/biduedson/NavBar-Menu-animations-feito-com-CSS-e-Keyframes/blob/main/assets/to_readme/menu_4.gif?raw=true)
## Stack utilizada

  * HTML, CSS, Javascript




## Uso/Exemplos

#### CSS da  animação do exemplo 4:

```css
.nav_links li {
    transform: rotate(-90deg) rotateY(90deg); 
    transform-origin: top right;
    animation: animation1 1s ease forwards;
    opacity: 0;
  }

  .nav_links li:nth-child(2) {
    animation-delay: 300ms;
    transform-origin: top left;
    transform: rotateZ(90deg) rotateY(-90deg);
  }

  .nav_links li:nth-child(3) {
    animation-delay: 600ms;
  }

  .nav_links li:nth-child(4) {
    animation-delay: 900ms;
    transform-origin: top left;
    transform: rotateZ(90deg) rotateY(-90deg);
  }

  .nav_links li:nth-child(5) {
    animation-delay: 1.2s;
  }

  @keyframes animation1 {
    to {
      transform: rotate(0);
      opacity: 1;
    }
  }
}
```


## Aprendizados

Neste projeto foi adquirido os seguintes conhecimentos:
* Animações usando o CSS
* Responsividade usando Media Queries
* Manipulação do DOM  usando o Javascript


## Autores

- [@bidu.edson](https://github.com/biduedson)

