import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, area }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" style={{position:"fixed",top:0,left:0,backgroundColor:"#000d",width:"200vw",height:"200vh",zIndex:"1040",opacity:"0.5"}}/>
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>{area.region}</p>
            </div>
            <style jsx>{`
                   .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1040;
                    width: 100vw;
                    height: 100vh;
                    background-color: #000;
                    opacity: 0.5;
                  }

              .modal-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1050;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                outline: 0;
                
              
              }

              .modal {
                z-index: 100;
                background: white;
                position: relative;
                margin: 1.75rem auto;
                border-radius: 3px;
                max-width: 500px;
                padding: 2rem;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                top: 30%;
              }

              .modal-header {
                display: flex;
                justify-content: flex-end;
              }

              .modal-close-button {
                font-size: 1.4rem;
                font-weight: 700;
                line-height: 1;
                color: #000;
                opacity: 0.3;
                cursor: pointer;
                border: none;
              }

              button {
                font-size: 0.9rem;
                font-weight: 700;
                border: none;
                border-radius: 3px;
                padding: 0.3rem 1rem;
                margin-left: 0.5rem;
              }

              .button-default {
                background: #247ba0;
                color: #fff;
              }
            `}</style>

            {/* <style jsx>{` 
         `}</style> */}
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
