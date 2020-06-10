import React, { useEffect, useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#container");
const Grid = (props) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [areaSelected, setAreaSelected] = useState({
    id: 1,
    region: " undefind",
    area: 1,
  });


  function showModal(area) {
    console.log(area);
    setAreaSelected(area);
    openModal();
  }
  const [data, setData] = useState(props.data);
  const [zone, setZone] = useState(props.area);

  return (
    <div className="grid">
       <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={areaSelected.region}
        >
          <button
            className="modal-close-button"
            aria-label="إغلاق"
            onClick={closeModal}
          >
            إغلاق
          </button>
          <h3 style={{ textAlign: "center" }}>{areaSelected.region}</h3>
    
          {areaSelected.area == 1 ? (
            <div style={{ direction: "rtl" }}>
              <h5 style={{ fontSize: "20px" }}>
                <u> تخفيف القيود بالمنطقة رقم 1:</u>
              </h5>
              <ul>
                <li>
                  الخروج دون حاجة لرخصة استثنائية للتنقل داخل المجال الترابي
                  للعمالة أو الإقليم؛
                </li>
                <li>
                  استئناف النقل العمومي الحضري مع استغلال نسبة لا تتجاوز 50% من
                  الطاقة الاستيعابية
                </li>
                <li>
                  التنقل داخل المجال الترابي لجهة الإقامة، بدون إلزامية التوفر
                  على ترخيص (الاقتصار فقط على الإدلاء بالبطاقة الوطنية للتعريف
                  الإلكترونية)؛
                </li>
                <li>
                  إعادة فتح قاعات الحلاقة والتجميل، مع استغلال نسبة لا تتجاوز
                  50% من الطاقة الاستيعابية؛
                </li>
                <li>
                  إعادة فتح الفضاءات العمومية بالهواء الطلق (منتزهات، حدائق،
                  أماكن عامة، إلخ ...)؛
                </li>
                <li>
                  استئناف الأنشطة الرياضية الفردية بالهواء الطلق (المشي،
                  الدراجات، إلخ...)؛
                </li>
                <li>
                  الإبقاء على جميع القيود الأخرى التي تم إقرارها في حالة الطوارئ
                  الصحية (منع التجمعات، الاجتماعات، الأفراح، حفلات الزواج،
                  الجنائز، إلخ، ...).
                </li>
              </ul>
            </div>
          ) : (
            <div style={{ direction: "rtl" }}>
              <h5 style={{ fontSize: "20px" }}>
                <u> تخفيف القيود بالمنطقة رقم 2:</u>
              </h5>
              <ul>
                <li>الخروج يقتضي التوفر على رخصة استثنائية للتنقل؛</li>
                <li>إغلاق المتاجر على الساعة 8 مساء؛</li>
                <li>
                  استئناف النقل العمومي الحضري مع استغلال نسبة لا تتجاوز 50% من
                  الطاقة الاستيعابية؛
                </li>
                <li>
                  الإبقاء على جميع القيود الأخرى التي تم إقرارها في حالة الطوارئ
                  الصحية (منع التجمعات، الاجتماعات، الأفراح، حفلات الزواج،
                  الجنائز، إلخ، ...).
                </li>
              </ul>
            </div>
          )}
        </Modal>

      {data.map((area) => {
       return zone == area.area ?  <div onClick={() => {
        showModal(area);
      }} className="card">
            {
                zone == 1 ?  <span style={{  backgroundColor: "green" }} className="dot Blink"></span> :  <span style={{  backgroundColor: "red" }} className="dot Blink"></span>
            }
           
            <h3>{area.region}</h3> 
          </div>
        : <span></span>
      })}
     

      <style jsx>{`
          .modal-close-button {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1;
            color: #000;
            opacity: 0.3;
            cursor: pointer;
            border: none;
          }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1200px;
          margin-top: 3rem;
        }
        .dot {
            height: 25px;
            width: 25px;
           
            border-radius: 50%;
            display: inline-block;
          }

        .card {
          margin: 1rem;
          flex-basis: 20%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          //   margin: 0 0 1rem 0;
          font-size: 1rem;
          margin: 0;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .card {
            width: 95vh;
          }
        }

        .Blink {
            animation: blinker 1.5s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
          }
          @keyframes blinker {  
            from { opacity: 1; }
            to { opacity: 0; }
          }
      `}</style>
    </div>
  );
};

export default Grid;
