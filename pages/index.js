import Head from 'next/head';
import Header from '../components/Header';
import Facilities from '../components/Facilities';
import Lawyers from '../components/Lawyers';
import Funds from '../components/funds';
import Report from '../components/Report';
import { useState } from 'react';






export default function Home() {

  //const [data, setData] = useState([empty, lawyers, facility, funds, report])
  
  const [state, setState] = useState(false)
  const [form1, setForm1] = useState(false)
  const [form2, setForm2] = useState(false)
  const [form3, setForm3] = useState(false)
  const [form4,setForm4] = useState(false)

  //const [showCurrent, setShowCurrent] = useState(false)

  //const toggleCurrent = () => {
    //if (!showCurrent) {
      //setShowCurrent(true);
      //return;
    //}
  //}

  const handleClick = (index) => {
    console.log(index)
    switch (index){
      case "lawyers":
        setForm1(true);
        setForm2(false);
        setForm3(false);
        setForm4(false);
        break;
      case "facility":
        setForm1(false);
        setForm2(true);
        setForm3(false);
        setForm4(false);
        break;
      case "funds":
        setForm1(false);
        setForm3(true);
        setForm2(false);
        setForm4(false);
        break;
        break;
      case "report":
        setForm1(false);
        setForm4(true);
        setForm3(false);
        setForm2(false);
        break;;
      default:
        null;
    }
    //toggleCurrent()
  }



  return (
    <div className="body">
      <Head>
        <title>Victoria Relief Requisition form</title>
        <meta name="description" content="VRF lawyers requistion form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  >
        <Header />
        <div className="btn">
        <button onClick={() => handleClick("lawyers")}  className="button">Lawyer Information</button>  
        <button onClick={() => handleClick("facility")} className="button">Lrc Detention Facilities</button>
        <button onClick={() => handleClick("funds")}  className="button">Global Giving Funds Requisition</button>
        <button onClick={() => handleClick("report")} className="button">Post Requistion Report</button>
        </div>
        <div> 
        {form1 && <Lawyers />}
        {form2 && <Facilities />}
        {form3 && <Funds />}
        {form4 && <Report />}

        </div>
      </main>
    </div>
  )
}
