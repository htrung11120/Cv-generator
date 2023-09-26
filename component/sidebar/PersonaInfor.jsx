

export default function PersonalInfor() {

    return (
        <form action="submit">

            <div className="form-item">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="name" id="name" name="name" />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input type="text" className="email" id="email" name="email" />
            </div>
            <div className="form-item">
                <label htmlFor="phone-number">Phone Numbers</label>
                <input type="text" className="phone-number" id="name" name="phone-number" />
            </div>
            <div className="form-item">
                <label htmlFor="address">Address</label>
                <input type="text" className="address" id="address" name="address" />
            </div>

        </form>
    )

}