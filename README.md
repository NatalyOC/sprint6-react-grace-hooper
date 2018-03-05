# Clase Practica
* **Track:** _Front-end_
* **Curso:** _React_
* **Unidad:** _JSX-Componentes_

---

#### Enunciado

Crear la página de Grace Hooper desarrollada en el Sprint 2 con React.

**Grace Hooper React**
![](https://ibb.co/gYZDXn)


Desarrollo:

Hemos creado la carpeta llamada components dentro de src donde tendremos los 3 componentes creados:
![](https://ibb.co/keUu57)
**1. App.js Es el componente principal que contendrá a todos nuestros componentes: header,main y aside.**
### `Header.js`
```js
import React, { Component } from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header>
    <h1>Grace Hooper</h1>
    <hr />
  </header>
  );
};

export default Header;    
```

**2.**
### `Header.js`
```js
import React, { Component } from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header>
    <h1>Grace Hooper</h1>
    <hr />
  </header>
  );
};

export default Header;    
```
    
**3.**
### `Main.js`
```js
import React, { Component } from 'react';
import './css/Main.css';

const Main = () => {
  const options = {
    style: {
      width: '78%',
      display: 'inline-block',
      fontSize: '14px',
      lineHeight: '1.3',
    },
    id: 'section-main'
  };
  return (    
      <main {...options}>
        <p><strong>Grace Brewster Murray Hopper</strong> (née <strong> Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">computer scientist</a>  and <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="_blank"> United States Navy </a> rear admiral.[1]<mark> One of the first programmers of the Harvard Mark I computer </mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of <a href="https://en.wikipedia.org/wiki/COBOL" target="_blank"> COBOL</a> , an early <a href="https://en.wikipedia.org/wiki/High-level_programming_language" target="_blank"> high-level programming language</a> still in use today.</p>
        <p>Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="_blank"> World War II </a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by <a href="https://en.wikipedia.org/wiki/Howard_H._Aiken" target="_blank">Howard H. Aiken</a> . In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.[2][3][4][5]</p>
        <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like FLOW-MATIC. In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the <a href="https://en.wikipedia.org/wiki/COBOL" target="_blank"> COBOL</a> language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.</p>
        <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy Arleigh Burke-class guided-missile destroyer USS Hopper was named for her, as was the Cray XE6 "Hopper" supercomputer at <a href="https://en.wikipedia.org/wiki/NERSC" target="_blank">NERSC.[8]</a> During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991, she received the National Medal of Technology. On November 22, 2016, she was posthumously awarded the <a href="https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom" target="_blank">Presidential Medal of Freedom </a>by President <a href="https://en.wikipedia.org/wiki/Barack_Obama" target="_blank">Barack Obama.[9]</a></p>
        <h3>Carrer</h3>
        <hr/>
        <ol>
          <li>World War II</li>
          <li>UNIVAC</li>
          <li>COBOL</li>
          <li>Standards</li>
        </ol>
        <h2>Phrase</h2>
        <blockquote cite="http://www.azquotes.com/quote/553883">Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.</blockquote>
        <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">See more</a>
      </main>     
  );
};


export default Main;
    ```
** 4.**
### `Aside.js`
```js
import React, { Component } from 'react';
import images from './images/grace-hopper.jpg';
import './css/Aside.css';

const Aside = () => {
  const options = {
    style: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '20%',
      marginTop: '15px',    
      float: 'right'
    }
  };

  return (
    
    <aside {...options}>
      <table className="summary-table">
        <thead>
          <tr>
            <th colSpan={2}>Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td colSpan={2}>
              <img src={images} alt="" />
              <p>Rear Admiral Grace M. Hopper, 1984</p>
              <hr/>
            </td>
          </tr>
              <tr>
                <th>Nickname(s)</th>
                <td>"Amazing Grace"</td>
              </tr>
              <tr>
                <th>Born</th>
                <td>December 9, 1906</td>
              </tr>
              <tr>
                <th>Died</th>
                <td>January 1, 1992 (aged 85)</td>
              </tr>
              <tr>
                <th>Allegiance</th>
                <td> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png"/>United States of America</td>
              </tr>
              <tr>
                <th>Service/<wbr/>branch</th>
                <td><span><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_the_United_States_Navy_%28official%29.svg/23px-Flag_of_the_United_States_Navy_%28official%29.svg.png" />&nbsp;</span><a href="/wiki/United_States_Navy" title="United States Navy">United States Navy</a></td>
              </tr>
              <tr>
                <th>Years&nbsp;of service</th>
                <td>1943–1966, 1967–1971, 1972–1986</td>
              </tr>
              <tr>
                <th >Rank</th>
                <td><a href="/wiki/File:US-O7_insignia.svg"><img alt="US-O7 insignia.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/2/23/US-O7_insignia.svg/24px-US-O7_insignia.svg.png"/></a> <a href="/wiki/Rear_admiral_(United_States)" title="Rear admiral (United States)">Rear admiral</a> (lower half)</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>
                  <a href="/wiki/File:Defense_Distinguished_Service_Medal_ribbon.svg"><img alt="Defense Distinguished Service Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Defense_Distinguished_Service_Medal_ribbon.svg/22px-Defense_Distinguished_Service_Medal_ribbon.svg.png"/></a> <a href="/wiki/Defense_Distinguished_Service_Medal" title="Defense Distinguished Service Medal">Defense Distinguished Service Medal</a><br/>
                  <a href="/wiki/File:Legion_of_Merit_ribbon.svg"><img alt="Legion of Merit ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Legion_of_Merit_ribbon.svg/22px-Legion_of_Merit_ribbon.svg.png" /></a> <a href="/wiki/Legion_of_Merit" title="Legion of Merit">Legion of Merit</a><br/>
                  <a href="/wiki/File:Meritorious_Service_Medal_ribbon.svg" ><img alt="Meritorious Service Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Meritorious_Service_Medal_ribbon.svg/22px-Meritorious_Service_Medal_ribbon.svg.png" width="22" height="6" /></a> <a href="/wiki/Meritorious_Service_Medal_(USA)"title="Meritorious Service Medal (USA)">Meritorious Service Medal</a><br/>
                  <a href="/wiki/File:American_Campaign_Medal_ribbon.svg"><img alt="American Campaign Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/American_Campaign_Medal_ribbon.svg/22px-American_Campaign_Medal_ribbon.svg.png" /></a> <a href="/wiki/American_Campaign_Medal" title="American Campaign Medal">American Campaign Medal</a><br/>
                  <a href="/wiki/File:World_War_II_Victory_Medal_ribbon.svg" ><img alt="World War II Victory Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/06/World_War_II_Victory_Medal_ribbon.svg/22px-World_War_II_Victory_Medal_ribbon.svg.png" /></a> <a href="/wiki/World_War_II_Victory_Medal" title="World War II Victory Medal">World War II Victory Medal</a><br/>
                  <a href="/wiki/File:National_Defense_Service_Medal_ribbon.svg"><img alt="National Defense Service Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/National_Defense_Service_Medal_ribbon.svg/22px-National_Defense_Service_Medal_ribbon.svg.png" /></a> <a href="/wiki/National_Defense_Service_Medal" title="National Defense Service Medal">National Defense Service Medal</a><br/>
                  <a href="/wiki/File:AFRM_with_Hourglass_Device_(Silver).jpg" ><img alt="AFRM with Hourglass Device (Silver).jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/AFRM_with_Hourglass_Device_%28Silver%29.jpg/22px-AFRM_with_Hourglass_Device_%28Silver%29.jpg" /></a> <a href="/wiki/Armed_Forces_Reserve_Medal" title="Armed Forces Reserve Medal">Armed Forces Reserve Medal</a> with two <a href="/wiki/Hourglass_Device" title="Hourglass Device">Hourglass Devices</a><br/>
                  <a href="/wiki/File:U.S._Naval_Reserve_Medal_ribbon.svg"><img alt="U.S. Naval Reserve Medal ribbon.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/U.S._Naval_Reserve_Medal_ribbon.svg/22px-U.S._Naval_Reserve_Medal_ribbon.svg.png" /></a> <a href="/wiki/Naval_Reserve_Medal" title="Naval Reserve Medal">Naval Reserve Medal</a><br/>
                  <a href="/wiki/File:Presidential_Medal_of_Freedom_(ribbon).png"><img alt="Presidential Medal of Freedom (ribbon).png" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/54/Presidential_Medal_of_Freedom_%28ribbon%29.png/22px-Presidential_Medal_of_Freedom_%28ribbon%29.png" /></a><a href="/wiki/Presidential_Medal_of_Freedom" title="Presidential Medal of Freedom">Presidential Medal of Freedom</a>
                  </td>
              </tr>
        </tbody>
      </table>
    </aside>
  );
};

export default Aside;   
```
**Observaciones:**
Asi mismo se crearon las carpetas images y css, que tendra las hojas de estilos por cada componente.
