function Report() {
    return (
        <div className="flex items-center justify-center">
            <form className="form">
                <h1 className="title h-title">Post Requistion Report</h1>
                <div className="form-m">    
                <label className="title">Email</label><br />
                <input className="odd" type="email" id="email" />
                </div>
                <div className="form-m">
                    <label className="title">Requisition Date</label><br />
                    <input className="odd" type="date" id="date" />
                </div>
                <div className="form-m">
                    <label className="title">Requisition Number</label><br />
                    <input className="odd" type="number" id="RequisitionNumber" />
                </div>
                <div className="form-m">
                <label className="title">Reason for requisition</label><br />
                <input type="radio" id="prison" name="reason" value="prison" />
                <label for="prison">Prison Visit</label><br />
                <input type="radio" id="court" name="reason" value="court" /> 
                <label for="court">Court Appearance</label><br />
                <input type="radio" id="filing" name="reason" value="filing" /> 
                <label for="filing">Court Filing</label> <br />
                <input type="radio" id="other" name="contact" value="other" />
                <label for="other">Other</label>
                <input type="text" id="otherText" />
                </div>
                <div className="form-m">
                    <label className="title">Report on Event</label><br />
                    <input className="" type="text" id="Report" />
                </div>
                <div className="form-m">
                    <label className="title">Attach photographs if available</label><br />
                    <input type="file" id="report_upload" name="report_uploaded"/>
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

export default Report
