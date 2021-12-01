function Lawyers() {
    return (
        <div className="flex items-center justify-center">
            <form className="form">
            <h1 className="title h-title">Lawyers Information</h1>
            <div className="form-m">
                <label className="title">Name of Law Firm or Chambers</label><br />
                <input className="" type="text" id="lawFirm" name="lawFirm" />
            </div>
            <div className="form-m">
                <label className="title">Full Names of Barrister</label><br />
                <input className="" type="text" id="lawyerName" name="lawyerName" />
            </div>
            <div className="form-m">
                <label className="title">Contact Phone Number</label><br />
                <input className="odd" type="number" id="lawyerNumber" name="lawyerNumber" />
            </div>
            <div className="form-m">
                <label className="title">Contact Email Address</label><br />
                <input className="odd" type="email" id="lawyerEmail" name="lawyerEmail" />
            </div>
            <div className="form-m">
                <label className="title">Preferred means of contact</label><br />
                <input type="radio" id="email" name="contact" value="email" />
                <label htmlFor="email" >Email</label><br />
                <input type="radio" id="phone" name="contact" value="phone" /> 
                <label htmlFor="phone">Phone</label><br />
                <input type="radio" id="whatsapp" name="contact" value="whatsapp" /> 
                <label htmlFor="whatsapp" >Whatsapp</label> <br />
                <input type="radio" id="other" name="contact" value="other" />
                <label htmlFor="other" >Other</label>
                <input type="text" id="otherText" />
            </div>
            <div className="form-m">
                <label className="title">Gender</label><br />
                <input type="radio" id="male" name="gender" value="gender" />
                <label htmlFor="male" >Male</label><br />
                <input type="radio" id="female" name="gender" value="female" /> 
                <label htmlFor="female" >Female</label><br />
                <input type="radio" id="other" name="contact" value="other" />
                <label htmlFor="other" >Other</label>
                <input type="text" id="otherText" />
            </div>
            <div className="form-m">
                <label className="title">Age</label><br />
                <input className="odd" type="number" id="age" name="age" />
            </div>
            <div className="form-m">
                <label className="title">Location of Law Firm or Chambers</label><br />
                <input type="radio" id="buea" name="firm_location" value="buea" />
                <label htmlFor="buea">Buea</label><br />
                <input type="radio" id="bamenda" name="firm_location" value="bamenda" />
                <label htmlFor="bamenda" >Bamenda</label><br />
                <input type="radio" id="kumba" name="firm_location" value="kumba" />
                <label htmlFor="kumba">Kumba</label><br />
                <input type="radio" id="douala" name="firm_location" value="douala" />
                <label htmlFor="douala" >Douala</label><br />
                <input type="radio" id="yaounde" name="firm_location" value="yaounde" />
                <label htmlFor="yaounde" >Yaounde</label><br />
                <input type="radio" id="victoria" name="firm_location" value="victoria" />
                <label htmlFor="victoria" >Victoria</label><br />
                <input type="radio" id="mamfe" name="firm_location" value="mamfe" />
                <label htmlFor="mamfe" >Mamfe</label><br />
                <input type="radio" id="kumbo" name="firm_location" value="kumbo" />
                <label htmlFor="kumbo" >Kumbo</label><br />
                <input type="radio" id="other" name="firm_location" value="other" />
                <label htmlFor="other">Other</label><br />
                <input type="text" id="other_text" className=""/>
            </div>
            <div className="form-m">
                <label className="title">Where are you normally based</label><br />
                <input type="radio" id="buea" name="lawyer_location" value="buea" />
                <label htmlFor="buea" >Buea</label><br />
                <input type="radio" id="bamenda" name="lawyer_location" value="bamenda" />
                <label htmlFor="bamenda" >Bamenda</label><br />
                <input type="radio" id="kumba" name="lawyer_location" value="kumba" />
                <label htmlFor="kumba" >Kumba</label><br />
                <input type="radio" id="douala" name="lawyer_location" value="douala" />
                <label htmlFor="douala" >Douala</label><br />
                <input type="radio" id="yaounde" name="lawyer_location" value="yaounde" />
                <label htmlFor="yaounde">Yaounde</label><br />
                <input type="radio" id="victoria" name="lawyer_location" value="victoria" />
                <label htmlFor="victoria" >Victoria</label><br />
                <input type="radio" id="mamfe" name="lawyer_location" value="mamfe" />
                <label htmlFor="mamfe">Mamfe</label><br />
                <input type="radio" id="kumbo" name="lawyer_location" value="kumbo" />
                <label htmlFor="kumbo" >Kumbo</label><br />
                <input type="radio" id="other" name="lawyer_location" value="other" />
                <label htmlFor="other">Other</label><br />
                <input type="text" id="other_text" className=""/>
            </div>
            <div className="form-m">
                    <label className="title">Upload a passport photo</label><br />
                    <input type="file" id="pic_upload" name="pic_uploaded"/>
                </div>
                <div className="form-m">
                <button className="submit focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default Lawyers
