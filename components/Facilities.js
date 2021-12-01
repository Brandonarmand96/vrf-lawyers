

function Facilities() {
    return (
        <div className="flex items-center justify-center">
            <form className="form">
                <h1 className="title h-title"> Lrc Detention Facilities</h1>

                <div className="form-m">
                    <label className="title">Facility code</label><br />
                    <input type="text" id="facilityCode" name="facilityCode" value="Your answer" />
                </div>
                <div className="form-m">
                    <label className="title">Name of facility</label><br />
                    <input type="text" id="facilityName" name="facilityName" value="Your answer" />
                </div>
                <div className="form-m">
                    <label className="title"> Type of facility</label><br />
                    <input type="radio" id="penitentiary" name="facility_type" value="penitentiary" />
                    <label htmlFor="penitentiary" >Penitentiary</label><br />
                    <input type="radio" id="gendamarie" name="facility_type" value="gendarmarie" /> 
                    <label htmlFor="gendarmarie" >Gendamarie</label><br />
                    <input type="radio" id="police" name="facility_type" value="police" /> 
                    <label htmlFor="police" >Police</label> <br />
                    <input type="radio" id="military" name="facility_type" value="military" />
                    <label htmlFor="military" >Military</label><br />
                    <input type="radio" id="secret_service" name="facility_type" value="secret_service" />
                    <label htmlFor="secret_service" >Secret Service</label><br />
                    <input type="radio" id="other" name="facility_type" value="other" />
                    <label htmlFor="other" >Other</label><br />
                </div>
                <div className="form-m">
                    <label className="title">Region where facility is located</label><br />
                    <input type="radio" id="southwest" name="facility_region" value="southwest" />
                    <label htmlFor="southwest" >Southwest</label><br />
                    <input type="radio" id="northwest" name="facility_region" value="northwest" />
                    <label htmlFor="northwest" >Northwest</label><br />
                    <input type="radio" id="central" name="facility_region" value="central" />
                    <label htmlFor="central" >Central</label><br />
                    <input type="radio" id="littoral" name="facility_region" value="littoral" />
                    <label htmlFor="littoral" >Littoral</label><br />
                    <input type="radio" id="west" name="facility_region" value="west" />
                    <label htmlFor="west" >West</label><br />
                    <input type="radio" id="adamawa" name="facility-region" value="adamawa" />
                    <label htmlFor="adamawa" >Adamawa</label><br />
                    <input type="radio" id="east" name="facility_region" value="east" />
                    <label htmlFor="east" >East</label><br />
                    <input type="radio" id="south" name="facility_region" value="south" />
                    <label htmlFor="south" >South</label><br />
                    <input type="radio" id="north" name="facility_region" value="north" />
                    <label htmlFor="north" >North</label><br />
                    <input type="radio" id="farNorth" name="facilty_region" value="farNorth" />
                    <label htmlFor="farNorth">Far North </label><br />
                </div>
                <div className="form-m">
                    <label className="title">Town where facility is located</label><br />
                    <input type="radio" id="buea" name="facility_location" value="buea" />
                    <label htmlFor="buea" >Buea</label><br />
                    <input type="radio" id="bamenda" name="facility_location" value="bamenda" />
                    <label htmlFor="bamenda" >Bamenda</label><br />
                    <input type="radio" id="baffoussam" name="facility_location" value="baffoussam" />
                    <label htmlFor="baffoussam" >Baffoussam</label><br />
                    <input type="radio" id="douala" name="facility_location" value="douala" />
                    <label htmlFor="douala">Douala</label><br />
                    <input type="radio" id="yaounde" name="facility_location" value="yaounde" />
                    <label htmlFor="yaounde" >Yaounde</label><br />
                    <input type="radio" id="ebolowa" name="facility_location" value="ebolowa" />
                    <label htmlFor="ebolowa" >Ebolowa</label><br />
                    <input type="radio" id="bertoua" name="facility_location" value="bertoua" />
                    <label htmlFor="bertoua" >Bertoua</label><br />
                    <input type="radio" id="edea" name="facility_location" value="edea" />
                    <label htmlFor="edea" >Edea</label><br />
                    <input type="radio" id="other" name="facility_location" value="other" />
                    <label htmlFor="other">Other</label><br />
                    <input type="text" id="other_text" className="w"/>
                </div>
                <div className="form-m">
                    <label className="title">Address of facility</label><br />
                    <input type="file" id="facility_upload" name="facility_uploaded"/>
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

export default Facilities
