import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFish, faBrush } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
const Navigation = ({ userObj }) => {
    const [palette, setPalette] = useState(0);
    const [color, setColor] = useState(4);

    const showColor= () => {
        if(palette){
            setPalette(0);
        }
        else{
            setPalette(1);
        }
    };

    const ChangeColor1 = () => {
        setColor(1);
        document.body.style='background: white';
        var color = document.getElementsByClassName("color");
        for (var i=0; i<color.length; i++){
            color[i].style='color: #04AAFF';
        }
        var colorBor = document.getElementsByClassName("colorBor");
        for (var i=0; i<colorBor.length; i++){
            colorBor[i].style='border: 1px solid #04AAFF';
        }
        var colorBack = document.getElementsByClassName("colorBack");
        for (var i=0; i<colorBack.length; i++){
            colorBack[i].style='background: #04AAFF';
        }
        var colorBorCor = document.getElementsByClassName("colorBorCor");
        for (var i=0; i<colorBorCor.length; i++){
            colorBorCor[i].style='color: #04AAFF; border: 1px solid #04AAFF';
        }
    }
    const ChangeColor2 = () => {
        setColor(2);
        document.body.style='background: #FCD1D1';
        var color = document.getElementsByClassName("color");
        for (var i=0; i<color.length; i++){
            color[i].style='color: #6FB081';
        }
        var colorBor = document.getElementsByClassName("colorBor");
        for (var i=0; i<colorBor.length; i++){
            colorBor[i].style='border: 1px solid #6FB081';
        }
        var colorBack = document.getElementsByClassName("colorBack");
        for (var i=0; i<colorBack.length; i++){
            colorBack[i].style='background: #6FB081';
        }
        var colorBorCor = document.getElementsByClassName("colorBorCor");
        for (var i=0; i<colorBorCor.length; i++){
            colorBorCor[i].style='color: #6FB081; border: 1px solid #6FB081';
        }
    }
    const ChangeColor3 = () => {
        setColor(3);
        document.body.style='background: black';
        var color = document.getElementsByClassName("color");
        for (var i=0; i<color.length; i++){
            color[i].style='color: #892CDC';
        }
        var colorBor = document.getElementsByClassName("colorBor");
        for (var i=0; i<colorBor.length; i++){
            colorBor[i].style='border: 1px solid #892CDC';
        }
        var colorBack = document.getElementsByClassName("colorBack");
        for (var i=0; i<colorBack.length; i++){
            colorBack[i].style='background: #892CDC';
        }
        var colorBorCor = document.getElementsByClassName("colorBorCor");
        for (var i=0; i<colorBorCor.length; i++){
            colorBorCor[i].style='color: #892CDC; border: 1px solid #892CDC';
        }
    }
    const ChangeColor4 = () => {
        setColor(4);
        document.body.style='background: black';var color = document.getElementsByClassName("color");
        for (var i=0; i<color.length; i++){
            color[i].style='color: #04AAFF';
        }
        var colorBor = document.getElementsByClassName("colorBor");
        for (var i=0; i<colorBor.length; i++){
            colorBor[i].style='border: 1px solid #04AAFF';
        }
        var colorBack = document.getElementsByClassName("colorBack");
        for (var i=0; i<colorBack.length; i++){
            colorBack[i].style='background: #04AAFF';
        }
        var colorBorCor = document.getElementsByClassName("colorBorCor");
        for (var i=0; i<colorBorCor.length; i++){
            colorBorCor[i].style='color: #04AAFF; border: 1px solid #04AAFF';
        }
    }

    return (
        <nav style={{display:"flex", justifyContent:"center"}}>
            <ul style={{ display:"flex", justifyContent:"center", marginTop: 50}}>
                <li>
                    <Link to="/" style={{ marginRight: 10 }}>
                        {(color === 1 &&
                            <FontAwesomeIcon icon={faFish} color={"#04AAFF"} size="2x" />)
                           || (color === 2 &&
                            <FontAwesomeIcon icon={faFish} color={"#6FB081"} size="2x" />)
                            || (color === 3 &&
                                <FontAwesomeIcon icon={faFish} color={"#892CDC"} size="2x" />)
                            || <FontAwesomeIcon icon={faFish} color={"#04AAFF"} size="2x" />}                     
                    </Link>
                </li>
                <li>
                    <Link to="/profile" style={{ marginLeft: 10, display:"flex", flexDirection: "column",
                        alignItems:"center", fontSize:12, marginright:10 }}>
                            {(color === 1 &&
                            <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />)
                           || (color === 2 &&
                            <FontAwesomeIcon icon={faUser} color={"#6FB081"} size="2x" />)
                            || (color === 3 &&
                                <FontAwesomeIcon icon={faUser} color={"#892CDC"} size="2x" />)
                            || <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />}
                            <span className="color" style={{ marginTop: 10 }}>
                                {userObj.displayName ?
                                    `${userObj.displayName}의 Profile`
                                    : "Profile"}
                            </span>
                    </Link>
                </li>
                <li style={{ paddingleft: "100px", marginleft: "100px", marginright:10, display:"flex", flexDirection: "column",
                        alignItems:"center"}}>
                    <button onClick={showColor} className="transBack">
                    {(color === 1 &&
                            <FontAwesomeIcon icon={faBrush} color={"#04AAFF"} size="2x" />)
                           || (color === 2 &&
                            <FontAwesomeIcon icon={faBrush} color={"#6FB081"} size="2x" />)
                            || (color === 3 &&
                                <FontAwesomeIcon icon={faBrush} color={"#892CDC"} size="2x" />)
                            || <FontAwesomeIcon icon={faBrush} color={"#04AAFF"} size="2x" />}
                    </button>
                </li>
            </ul>
            <span>
            {palette? (
                <span style={{marginTop:50, display:"flex"}}>
                            <button className="palatte color1" onClick={ChangeColor1}></button>
                            <button className="palatte color2" onClick={ChangeColor2}></button>
                            <button className="palatte color3" onClick={ChangeColor3}></button>
                            <button className="palatte color4" onClick={ChangeColor4}></button>
                </span>
                ): (
                    <span className="nothing">

                    </span>
                )}
            </span>
        </nav>
    );
};

export default Navigation;