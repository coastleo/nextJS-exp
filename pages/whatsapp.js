import QrCode from '../components/qrCode'

function Home() {
    return (  
      <div>
          <div className="Header"></div>
          <div className="Body"></div>
          <div className="Container">
              <div>
                <p style={{top: '6.981981981981982vw', fontSize: '1.9973368841544608vw', color: '#2E2F37'}}>Conecte seu WhatsApp</p>
                <p style={{top: '12.612612612612613vw'}}>1. Abra o WhatsApp no seu celular</p>
                <p style={{top: '16.59159159159159vw'}}>2. Toque em Mais Opções ou Ajustes e selecione WhatsApp Web</p>
                <p style={{top: '22.67267267267267vw'}}>3. Aponta seu celular para essa tela para capturar o QR Code</p>
              </div>
              <div>
                  <div style={{position: 'absolute', width: '17.576564580559253vw', height: '16.245006657789613vw', background: '#E5E5E5', left:'43.07589880159787vw', top:'7.323568575233023vw'}}>
                      <QrCode></QrCode>
                  </div>
                  <div style={{position: 'absolute', left:'43.07589880159787vw', top:'23.96804260985353vw',
                  width: '12.68vw', height:'1.5978695073235685vw'}}>
                      <label className="Remember">Mantenha-me conectado
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>                  
              </div>
          </div>
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;1,300&display=swap');

            .QrCode {
                height: 200px;
                width: 200px;
              }
              

          .Body {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0px;
            top: 9.986684420772304vw;
        
            background: #E5E5E5;
          }
        
          .Header {
            position: absolute;
            width: 100%;
            height: 9.986684420772304vw;
            left: 0px;
            top: 0px;

            background: #2E2F37;
          }

          .Container {
            position: absolute;
            width: 66.57789613848202vw;
            height: 43.74167776298269vw;
            left: 16.7110519308vw;
            top: 7.057256990679095vw;
            
            /* mono00 */
            
            background: #FCFCFF;
            box-shadow: 0px 100.25px 125.313px rgba(110, 116, 134, 0.24);
            border-radius: 20px;
          }

          .Container p {
            position: absolute;
            width: 31.824234354194406vw;
            height: 2.1021021021021022vw;
            left: 5.405405405405405vw;

            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8018018018018018vw;
            line-height: 2.1021021021021022vw;
            /* identical to box height */

            text-align: left;

            color: #535867;
            }

            /* Customize the label (the Remember) */
            .Remember {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 0px;
            cursor: pointer;
            
            font-family: Ubuntu;
            width: 17.576564580559253vw;
            font-size: 20px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }

            /* Hide the browser's default checkbox */
            .Remember input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            }
            /* Create a custom checkbox */
            .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            }

            /* On mouse-over, add a grey background color */
            .Remember:hover input ~ .checkmark {
            background-color: #ccc;
            }

            /* When the checkbox is checked, add a blue background */
            .Remember input:checked ~ .checkmark {
            background-color: #2196F3;
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark:after {
            content: "";
            position: absolute;
            display: none;
            }

            /* Show the checkmark when checked */
            .Remember input:checked ~ .checkmark:after {
            display: block;
            }

            /* Style the checkmark/indicator */
            .Remember .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            }
          }
        `}</style>
      </div>
    )
  }
  
  export default Home