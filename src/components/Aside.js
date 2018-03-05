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