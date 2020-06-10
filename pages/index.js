import React, { useEffect, useState } from "react";

import dataFile from "../components/data/data.json";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Grid from "../components/Grid";

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

export default function Home() {
  const [data, setData] = useState(dataFile);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

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

  const handleChange = (event) => {
    setSearching(true);
    if (event.target.value.trim() == "") {
      setSearching(false);
    }
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = data.filter((area) =>
      area.region.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  var subtitle;
  return (
    <div id="container" className="container">
      <p className="warning">
        {" "}
        موقع غير رسمي المعطيات مأخوذة من{" "}
        <a
          className="link"
          target="_blank"
          href="http://covid19.interieur.gov.ma/actualites.aspx"
        >
          الموقع الخاص بالبلاغات المتعلقة بفيروس كورونا المستجد لوزارة الداخلية{" "}
        </a>
        <br />
        سيتم إعادة تصنيف العمالات والأقاليم، أسبوعيا، حسب منطقتي التخفيف، على
        أساس المعايير المحددة من طرف السلطات الصحية
      </p>
      <Header />

      <main>


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

        <h1 className="title">
          مناطق التخفيف من تدابير الحجر الصحي بالمملكة المغربية
        </h1>

        <p className="description">
          تقسيم عمالات وأقاليم المملكة، وفق المعايير المحددة من طرف السلطات
          الصحية، إلى منطقتين
        </p>

        <div className="searchContainer">
          <input
            type="text"
            placeholder="بحث"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        {searching ? (
          <div className="gridContainer">
            <p className="gridTitle"> نتائج البحث </p>
            {searchResults.length == 0 ? (
              <p style={{ textAlign: "center" }}>لا توجد نتائج</p>
            ) : (
              searchResults.map((area) => {
                // onClick={() => { showModal(area) }}
                return (
                  <div
                    onClick={() => {
                      showModal(area);
                    }}
                    className="card"
                  >
                    {area.area == 1 ? (
                      <span
                        style={{ backgroundColor: "green" }}
                        className="dot Blink"
                      ></span>
                    ) : (
                      <span
                        style={{ backgroundColor: "red" }}
                        className="dot Blink"
                      ></span>
                    )}

                    <h3>{area.region}</h3>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className="dataContainer">
            <div className="gridContainer">
              <p className="gridTitle">منطقة التخفيف رقم 1 وتضم </p>
              <Grid data={data} area={1} />
            </div>

            <div className="gridContainer">
              <p className="gridTitle">منطقة التخفيف رقم 2 وتضم </p>
              <Grid data={data} area={2} />
            </div>
          </div>
        )}
      </main>

      <footer>
        <a target="_blank" href="https://facebook.com/medhamime">
          {" "}
          Made with 💖 by Mehdi HAMIME
        </a>{" "}
        &nbsp; | &nbsp;{" "}
        <a
          href="https://vercel.com?utm_source=mehdihamime.com&utm_medium=mehdihamime.com&utm_campaign=mehdihamime.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        input::placeholder {
          font-family: "Cairo", sans-serif;
        }
        input {
          width: 500px;
          margin: 10px auto;
          display: block;
          padding: 10px;
          text-align: center;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .link:hover {
          color: black;
        }
        .warning {
          background-color: red;
          color: white;
          text-align: center;
          padding: 10px;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description,
        .gridTitle {
          text-align: center;
        }

        .description,
        .gridTitle {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
            width: 170vw;
          }
          .description {
            padding-left: 10vm;
            padding-right: 10vm;
          }
          .container {
            width: 200vw;
          }
        }

        .Blink {
          animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
        }
        @keyframes blinker {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
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
      `}</style>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Cairo", sans-serif;
        }
        button{
          font-family: "Cairo", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
