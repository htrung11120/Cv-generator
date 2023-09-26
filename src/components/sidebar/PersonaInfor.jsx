

export default function PersonalInfor() {

    return (
        <form action="submit" className="applicant-form-infor">
            <h2 className="form-infor-header">Personal Details</h2>
            <div className="form-item">
                <label htmlFor="applicant-name">Full Name</label>
                <input type="text" className="applicant-name input" id="applicant-name" name="applicant-name" value="John smith"/>
            </div>
            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input type="text" className="email input" id="email" name="email" value="123@gmail.com" />
            </div>
            <div className="form-item">
                <label htmlFor="phone-number">Phone Numbers</label>
                <input type="text" className="phone-number input" id="name" name="phone-number" value="+123546789"/>
            </div>
            <div className="form-item">
                <label htmlFor="address">Address</label>
                <input type="text" className="address input" id="address" name="address" value="abcddadadasdas" />
            </div>

        </form>
    )

}