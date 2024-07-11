/* MOSTAR - OCULTAR O CAMPO DE WI-FI */
function DesabilitarWiFi(){
    var btnWifi = document.getElementById('wifiDesabilitado')
    var boxWifi = document.getElementById('campo-wifi')
    if(btnWifi.checked){
        boxWifi.style.display = 'none'
    }else{
        boxWifi.style.display = 'flex'
    }
}
var checkboxWifi = document.getElementById('wifiDesabilitado');
checkboxWifi.addEventListener('change', DesabilitarWiFi);


/* MOSTRAR - OCULTAR OS CAMPOS REFERENTE AO MODO BRIDGE A SEREM PREENCHIDOS */
function modoBrigde(){
    const btnBridge = document.getElementById('modo-bridge')
    const boxWifi = document.getElementById('campo-wifi')
    const btnwifiDesabilitado = document.getElementById('box-check-wifi')
    const boxPppoe = document.getElementById('box-pppoe')
    if(btnBridge.checked){
        boxWifi.style.display = 'none'
        btnwifiDesabilitado.style.display = 'none'
        boxPppoe.style.display = 'none'
    }else{
        boxWifi.style.display = 'flex'
        btnwifiDesabilitado.style.display = 'block'
        boxPppoe.style.display = 'flex'
    }
}
var checkboxBrigde = document.getElementById('modo-bridge');
checkboxBrigde.addEventListener('change', modoBrigde);


/* MOSTAR - OCULTAR O CAMPO DE TELEFONIA */
function DesabilitarTelefonia() {
    var btnTelefonia = document.getElementById('habilitarTelefonia');
    var boxTelefonia = document.getElementById('campo-telefonia');
    if (btnTelefonia.checked) {
        boxTelefonia.style.display = 'flex';
    } else {
        boxTelefonia.style.display = 'none';
    }
}
var checkboxTelefonia = document.getElementById('habilitarTelefonia');
checkboxTelefonia.addEventListener('change', DesabilitarTelefonia);
DesabilitarTelefonia();


function removeSpacesRealTime(event) {
    event.target.value = event.target.value.replace(/\s+/g,'');
}

/* RESETAR PÁGINA */
document.addEventListener('DOMContentLoaded', function(){
    var boxOrientacoes = document.getElementById('orientacoes')
    var boxCodigoGerado = document.getElementById('codigo-gerado');
    var pCodigoGerado = document.getElementById('box-p-codigo-gerado')
    var pDadosWifi = document.getElementById('p-dados-wifi')
    var pDadosSenha = document.getElementById('p-senha-wifi')
    var pDadosTelefonia = document.getElementById('p-dados-telefonia')
    var pTodosDados = document.getElementById('p-todos-dados')
    var reset = document.getElementById('p-reset')
    reset.addEventListener('click', function(){
        document.getElementById("slot").value = "--"
        document.getElementById("porta").value = "--"
        document.getElementById("type-ont").value = "Selecione o modelo"
        document.getElementById("sn-ont").value = ""
        document.getElementById("usuario-pppoe").value = ""
        document.getElementById("senha-pppoe").value = ""
        document.getElementById("id-onu").value = ""
        document.getElementById("name-ont").value = ""
        document.getElementById("description-ont").value = ""
        document.getElementById("rede-wifi").value = ""
        document.getElementById("senha-wifi").value = ""
        document.getElementById("numero-sip").value = ""
        document.getElementById("senha-sip").value = ""
        boxOrientacoes.style.display = 'block'
        pCodigoGerado.style.display = 'none'
        pDadosWifi.style.display = 'none'
        pDadosSenha.style.display = 'none'
        pDadosTelefonia.style.display = 'none'
        pTodosDados.style.display = 'none'
        boxCodigoGerado.style.left = '30px'
    })
})

/* DEFINIDO O ID SEMPRE ENTRE 0 E 128 */
const inputNumero = document.getElementById("id-onu");
inputNumero.addEventListener("change", function() {
    let valor = parseInt(inputNumero.value);
    if (valor < 0 || isNaN(valor)) {
        valor = 0;
    }
    if (valor > 128) {
        valor = 128;
    }
    inputNumero.value = valor;
});


/* FUNÇÃO PARA COPIAR E COLAR */
document.addEventListener("DOMContentLoaded", function(){
    var boxCodigo = document.getElementById('codigo');
    var btnCopiarCodigo = document.getElementById('btn-copiar-codigo');
    var pCodigoCopiado = document.getElementById('box-p-codigo-copiado')
    
    btnCopiarCodigo.addEventListener('click', function(){
        var input = document.createElement("textarea");
        input.value = boxCodigo.innerText;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        pCodigoCopiado.style.display = 'flex'
    });
});

/* MOSTAR O CAMPO DO CÓDIGO GERADO */
document.addEventListener('DOMContentLoaded', function () {
    var boxOrientacoes = document.getElementById('orientacoes')
    var btnGerarCodigo = document.getElementById('gerar-codigo');
    var boxCodigoGerado = document.getElementById('codigo-gerado');
    var boxCodigo = document.getElementById('codigo');
    var btnTelefonia = document.getElementById('habilitarTelefonia');
    var btnWifi = document.getElementById('wifiDesabilitado')
    var pCodigoGerado = document.getElementById('box-p-codigo-gerado')
    var pCodigoCopiado = document.getElementById('box-p-codigo-copiado')
    var pDadosWifi = document.getElementById('p-dados-wifi')
    var pDadosSenha = document.getElementById('p-senha-wifi')
    var pDadosTelefonia = document.getElementById('p-dados-telefonia')
    var pTodosDados = document.getElementById('p-todos-dados')


    btnGerarCodigo.addEventListener('click', function () {
        var frame = document.getElementById('frame').value
        var slot = document.getElementById('slot').value
        var porta = document.getElementById('porta').value
        var typeOnu = document.getElementById('type-ont').value
        var snOnu = document.getElementById('sn-ont').value
        var userPppoe = document.getElementById('usuario-pppoe').value
        var senhaPppoe = document.getElementById('senha-pppoe').value
        var idOnu = document.getElementById('id-onu').value;
        var nomeCliente = document.getElementById('name-ont').value.toUpperCase()
        var descONU = document.getElementById('description-ont').value;
        var redeWifi = document.getElementById('rede-wifi').value;
        var senhaWifi = document.getElementById('senha-wifi').value;
        var numTelefone = document.getElementById('numero-sip').value;
        var senhaTelefone = document.getElementById('senha-sip').value;
        var btnBridge = document.getElementById('modo-bridge')

        // MODO BRIDGE
        // MODO BRIDGE SEM TELEFONIA
        if(btnBridge.checked || frame === '--' || slot === '--' || porta === '--' || idOnu === '' || typeOnu === 'Selecione o modelo' || snOnu === ''|| nomeCliente === '' || descONU === ''){
            pTodosDados.style.display = 'flex'
            boxCodigoGerado.style.left = '30px'
            boxOrientacoes.style.display = 'block'
            pCodigoGerado.style.display = 'none'
        }
        else{
            boxOrientacoes.style.opacity = '0'
            pCodigoCopiado.style.display = 'none'
            boxCodigoGerado.style.left = '580px'
            pDadosTelefonia.style.display = 'none'
            boxCodigo.innerHTML = 
            "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
            "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
            "exit<br><br>"+
            "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
            "name " + nomeCliente + "<br>" +
            "description " + descONU + "<br>" +
            "vport-mode manual <br>" +
            "tcont 1 name Internet profile 1GB<br>" +
            "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
            "vport-map 1 1 vlan 100<br>" +
            "exit<br><br>" +
            "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
            "security-mgmt 1 state enable mode forward protocol web https <br>" +
            "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
            "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
            "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
            "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
            "service 1 gemport 1 vlan 100<br>" +
            "wifi disable<br>"+
            "exit<br><br>" +
            "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
            "service-port 1 user-vlan 100 vlan 2300<br>" +
            "service-port 1 description Internet<br>" +
            "exit <br><br>"

        }
        
        // MODO BRIDGE COM TELEFONIA
        if(btnBridge.checked && btnTelefonia.checked){
            if(numTelefone === '' || senhaTelefone === ''){
                boxCodigoGerado.style.left = '30px'
                boxOrientacoes.style.display = 'block'
                pCodigoGerado.style.display = 'none'
                pDadosTelefonia.style.display = 'flex'
                return
            }
            else{
                boxOrientacoes.style.opacity = '0'
                pCodigoCopiado.style.display = 'none'
                boxCodigoGerado.style.left = '580px'
                pDadosTelefonia.style.display = 'none'
                boxCodigo.innerHTML = 
                "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
                "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
                "exit<br><br>"+
                "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
                "name " + nomeCliente + "<br>" +
                "description " + descONU + "<br>" +
                "vport-mode manual <br>" +
                "tcont 1 name Internet profile 1GB<br>" +
                "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
                "vport-map 1 1 vlan 100<br>" +
                "exit<br><br>" +
                "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
                "security-mgmt 1 state enable mode forward protocol web https <br>" +
                "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
                "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
                "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
                "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
                "service 1 gemport 1 vlan 100<br>" +
                "wifi disable<br>"+
                "exit<br><br>" +
                "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
                "service-port 1 user-vlan 100 vlan 2300<br>" +
                "service-port 1 description Internet<br>" +
                "exit <br><br>"
            }
        }

        //MODO ROUTER
        else if(frame === '--' || slot === '--' || porta === '--' || idOnu === '' || typeOnu === 'Selecione o modelo' || snOnu === '' || userPppoe === '' || senhaPppoe === '' || nomeCliente === '' || descONU === ''){
                pTodosDados.style.display = 'flex'
                boxCodigoGerado.style.left = '30px'
                boxOrientacoes.style.display = 'block'
                pCodigoGerado.style.display = 'none'
            }
            else{
                boxCodigoGerado.style.display = 'flex';
                pCodigoGerado.style.display = 'flex';
                pTodosDados.style.display = 'none'
    
                /* WIFI DESABILITADO COM TELEFONIA */
                if(btnWifi.checked && btnTelefonia.checked){ 
                    if(numTelefone === '' || senhaTelefone === ''){
                        pDadosTelefonia.style.display = 'flex'
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        pCodigoGerado.style.display = 'none'
                        return
                     }else
                        boxOrientacoes.style.opacity = '0'
                        pCodigoCopiado.style.display = 'none'
                        boxCodigoGerado.style.left = '580px'
                        pDadosTelefonia.style.display = 'none'
                        boxCodigo.innerHTML =
                        "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
                        "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
                        "exit<br><br>"+
                        "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
                        "name " + nomeCliente + "<br>" +
                        "description " + descONU + "<br>" +
                        "vport-mode manual <br>" +
                        "tcont 1 name Internet profile 1GB<br>" +
                        "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
                        "vport-map 1 1 vlan 100<br>" +
                        "tcont 2 name Voip profile VOIP<br>" +
                        "gemport 2 name Voip tcont 2<br>" +
                        "vport 2 name Voip map-type vlan<br>" +
                        "vport-map 2 2 vlan 200<br>" +
                        "exit<br><br>" +
                        "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
                        "dhcp-ip ethuni eth_0/1 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/2 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/3 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/4 from-onu<br>" +
                        "security-mgmt 1 state enable mode forward protocol web https <br>" +
                        "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
                        "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
                        "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
                        "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
                        "service 1 gemport 1 vlan 100<br>" +
                        "wifi disable<br>"+
                        "wan-ip ipv4 mode pppoe username "+userPppoe+" password "+senhaPppoe+ " vlan-profile INTERNET host 1<br>" +
                        "service Voip gemport 2 vlan 200<br>" +
                        "voip protocol sip<br>" +
                        "voip-ip ipv4 mode dhcp vlan-profile VOIP host 2<br>" +
                        "voip-ip ipv4 ping-response enable traceroute-response enable<br>" +
                        "sip-service pots_0/1 profile SIP-Telefonia-POA07 userid " + numTelefone + " username " + numTelefone + " password " + senhaTelefone + "<br>" +
                        "exit<br><br>" +
                        "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
                        "service-port 1 user-vlan 100 vlan 2300<br>" +
                        "service-port 1 description Internet<br>" +
                        "exit <br><br>" +
                        "interface vport-1/"+slot+"/"+porta+"."+idOnu+":2<br>" +
                        "service-port 2 user-vlan 200 vlan 4063<br>" +
                        "service-port 2 description Voip<br>" +
                        "exit <br>";
                }
                /* WIFI DESABILITADO SEM TELEFONIA */
                else if(btnWifi.checked){ 
                    boxOrientacoes.style.display = 'none'
                    pCodigoCopiado.style.display = 'none'
                    boxCodigoGerado.style.left = '580px'
                    boxCodigo.innerHTML =
                    "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
                    "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
                    "exit<br><br>"+
                    "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
                    "name " + nomeCliente + "<br>" +
                    "description " + descONU + "<br>" +
                    "vport-mode manual <br>" +
                    "tcont 1 name Internet profile 1GB<br>" +
                    "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
                    "vport-map 1 1 vlan 100<br>" +
                    "exit<br><br>" +
                    "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
                    "dhcp-ip ethuni eth_0/1 from-onu<br>" +
                    "dhcp-ip ethuni eth_0/2 from-onu<br>" +
                    "dhcp-ip ethuni eth_0/3 from-onu<br>" +
                    "dhcp-ip ethuni eth_0/4 from-onu<br>" +
                    "security-mgmt 1 state enable mode forward protocol web https <br>" +
                    "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
                    "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
                    "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
                    "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
                    "service 1 gemport 1 vlan 100<br>" +
                    "wan-ip ipv4 mode pppoe username "+userPppoe+" password "+senhaPppoe+ " vlan-profile INTERNET host 1<br>" +
                    "wifi disable<br>"+
                    "exit<br><br>" +
                    "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
                    "service-port 1 user-vlan 100 vlan 2300<br>" +
                    "service-port 1 description Internet<br>" +
                    "exit<br><br>"
                }
                /* WIFI HABILITADO COM TELEFONIA*/
                else if(btnTelefonia.checked){
                    if(redeWifi === '' ||senhaWifi === ''){
                        pDadosWifi.style.display = 'flex'
                        pCodigoGerado.style.display = 'none'
                        pDadosTelefonia.style.display = 'none'
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        return
                    }
                    if(numTelefone === '' || senhaTelefone === ''){
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        pCodigoGerado.style.display = 'none'
                        pDadosTelefonia.style.display = 'flex'
                        return
                    }
                    else if(senhaWifi.length < 8){
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        pDadosSenha.style.display = 'flex'
                        pCodigoGerado.style.display = 'none'
                        pDadosWifi.style.display = 'none'
                        pDadosTelefonia.style.display = 'none'
                        return
                    }    
                    else
                        boxOrientacoes.style.display = 'none'
                        pCodigoCopiado.style.display = 'none'
                        boxCodigoGerado.style.left = '580px'
                        pDadosSenha.style.display = 'none'
                        pTodosDados.style.display = 'none'
                        pDadosWifi.style.display = 'none'
                        pDadosTelefonia.style.display = 'none'
                        boxCodigo.innerHTML =
                            "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
                            "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
                            "exit<br><br>"+
                            "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
                            "name " + nomeCliente + "<br>" +
                            "description " + descONU + "<br>" +
                            "vport-mode manual <br>" +
                            "tcont 1 name Internet profile 1GB<br>" +
                            "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
                            "vport-map 1 1 vlan 100<br>" +
                            "tcont 2 name Voip profile VOIP<br>" +
                            "gemport 2 name Voip tcont 2<br>" +
                            "vport 2 name Voip map-type vlan<br>" +
                            "vport-map 2 2 vlan 200<br>" +
                            "exit<br><br>" +
                            "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
                            "dhcp-ip ethuni eth_0/1 from-onu<br>" +
                            "dhcp-ip ethuni eth_0/2 from-onu<br>" +
                            "dhcp-ip ethuni eth_0/3 from-onu<br>" +
                            "dhcp-ip ethuni eth_0/4 from-onu<br>" +
                            "security-mgmt 1 state enable mode forward protocol web https <br>" +
                            "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
                            "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
                            "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
                            "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
                            "service 1 gemport 1 vlan 100<br>" +
                            "wan-ip ipv4 mode pppoe username "+userPppoe+" password "+senhaPppoe+ " vlan-profile INTERNET host 1<br>" +
                            "ssid auth wpa wifi_0/1 auth-algrithm wpa2-psk encrypt aes key " + senhaWifi + "<br>" +
                            "ssid auth wpa wifi_0/5 auth-algrithm wpa2-psk encrypt aes key " + senhaWifi + "<br>" +
                            "ssid ctrl wifi_0/1 name " + redeWifi + " user-isolation disable<br>" +
                            "ssid ctrl wifi_0/5 name " + redeWifi + "-5G user-isolation disable<br>" +
                            "service Voip gemport 2 vlan 200<br>" +
                            "voip protocol sip<br>" +
                            "voip-ip ipv4 mode dhcp vlan-profile VOIP host 2<br>" +
                            "voip-ip ipv4 ping-response enable traceroute-response enable<br>" +
                            "sip-service pots_0/1 profile SIP-Telefonia-POA07 userid " + numTelefone + " username " + numTelefone + " password " + senhaTelefone + "<br>" +
                            "exit<br><br>" +
                            "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
                            "service-port 1 user-vlan 100 vlan 2300<br>" +
                            "service-port 1 description Internet<br>" +
                            "exit <br><br>" +
                            "interface vport-1/"+slot+"/"+porta+"."+idOnu+":2<br>" +
                            "service-port 2 user-vlan 200 vlan 4063<br>" +
                            "service-port 2 description Voip<br>" +
                            "exit <br>"
                }
                // WIFI HABILITADO SEM TELEFONIA
                else{
                    if(redeWifi === ''){ 
                        pDadosWifi.style.display = 'flex'
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        pCodigoGerado.style.display = 'none'
                        pDadosSenha.style.display = 'none'
                        return
                    }
                    if(senhaWifi.length < 8){
                        pDadosSenha.style.display = 'flex'
                        boxCodigoGerado.style.left = '30px'
                        boxOrientacoes.style.display = 'block'
                        pCodigoGerado.style.display = 'none'
                        pDadosWifi.style.display = 'none'
                        return
                    }
                    else
                        pDadosWifi.style.display = 'none'
                        pDadosSenha.style.display = 'none'
                        boxOrientacoes.style.display = 'none'
                        pCodigoCopiado.style.display = 'none'
                        boxCodigoGerado.style.left = '580px'
                        boxCodigo.innerHTML =
                        "interface gpon_olt-"+frame+"/"+slot+"/"+porta+"<br>"+
                        "onu "+ idOnu + " type " + typeOnu +" sn " + snOnu +"<br>"+
                        "exit<br><br>"+
                        "interface gpon_onu-1/"+slot+"/"+porta+":"+idOnu+"<br>"+
                        "name " + nomeCliente + "<br>" +
                        "description " + descONU + "<br>" +
                        "vport-mode manual <br>" +
                        "tcont 1 name Internet profile 1GB<br>" +
                        "vport 1 name Internet map-type vlan<br>" + "gemport 1 name Internet tcont 1<br>" +
                        "vport-map 1 1 vlan 100<br>" +
                        "exit<br><br>" +
                        "pon-onu-mng gpon_onu-"+frame+"/"+slot+"/"+porta+":"+idOnu+"<br>" +
                        "dhcp-ip ethuni eth_0/1 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/2 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/3 from-onu<br>" +
                        "dhcp-ip ethuni eth_0/4 from-onu<br>" +
                        "security-mgmt 1 state enable mode forward protocol web https <br>" +
                        "security-mgmt 1 start-src-ip 45.231.140.0 end-src-ip 45.231.140.255 <br>" +
                        "security-mgmt 198 state enable mode forward ingress-type lan protocol web https <br>" +
                        "security-mgmt 199 state enable ingress-type lan protocol ftp telnet ssh snmp tr069 <br>" +
                        "tr069-mgmt 1 state unlock acs https://acs.rs.sim.digital:7547 <br>" +
                        "service 1 gemport 1 vlan 100<br>" +
                        "wan-ip ipv4 mode pppoe username "+userPppoe+" password "+senhaPppoe+ " vlan-profile INTERNET host 1<br>" +
                        "ssid auth wpa wifi_0/1 auth-algrithm wpa2-psk encrypt aes key " + senhaWifi + "<br>" +
                        "ssid auth wpa wifi_0/5 auth-algrithm wpa2-psk encrypt aes key " + senhaWifi + "<br>" +
                        "ssid ctrl wifi_0/1 name " + redeWifi + " user-isolation disable<br>" +
                        "ssid ctrl wifi_0/5 name " + redeWifi + "-5G user-isolation disable<br>" +
                        "exit<br><br>" +
                        "interface vport-1/"+slot+"/"+porta+"."+idOnu+":1<br>" +
                        "service-port 1 user-vlan 100 vlan 2300<br>" +
                        "service-port 1 description Internet<br>" +
                        "exit <br><br>"
                }
            }
        })
    });


