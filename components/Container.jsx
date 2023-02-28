import React from "react";
import './Container.css'; 
import Card from "./Card";

function Container(){
    return(
    <div>
    <table>
        <tbody>
        <tr>
            <Card name="Magic The Gathering" image="src/assets/magicTheGathering.png" date="02/23/23" />
            <td></td>
            <Card name="Pokemon" image="src/assets/pokemon.png" date="03/01/23" />
            <td></td>
            <Card name="Yu-Gi-Oh!" image="src/assets/yugioh.png"  date="03/08/23" />
        </tr>
        <tr>
            <Card name="WareHammer" image="src/assets/warhammer.png" date="03/15/23" />
            <td></td>
            <Card name="Final Fantasy" image="src/assets/finalFantasy.png" date="03/22/23" />
            <td></td>
            <Card name="Keyforge" image="src/assets/keyforge.png" date="03/29/23" />
        </tr>
        <tr>
            <Card name="Android: Netrunner" image="src/assets/netrunner.png" date="04/05/23" />
            <td></td>
            <Card name="Dice Throne" image="src/assets/diceThrone.png" date="04/12/23" />
            <td></td>
            <Card name="Riftforce" image="src/assets/riftforce.png" date="04/19/23" />
        </tr>
         <tr>
            <Card name="7 Wonder Duel" image="src/assets/buildingseven.png" date="04/26/23" />
            <td></td>
            <Card name=" Arkham Horror" image="src/assets/arkhamhorror.png" date="05/3/23" />
            <td></td>
            <Card name="Dominion" image="src/assets/dominion.png" date="05/10/23" />
        </tr>
      
        </tbody>
    </table>
    </div>
    )
}

export default Container; 