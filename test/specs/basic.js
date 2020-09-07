describe('Reserve a Tennis Court', () => {
    it('should reserve a court seven days in the future at the correct time', () => {
        //get date 7 days in the future
        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
        // So you can see the date we have created
        const selectDate = targetDate.getDate();  

        //sign in
        browser.url('https://www.avalonaccess.com/UserProfile/LogOn')
        const username = $('#UserName')
        username.setValue('YOURUSERNAME')
        const password = $('#password')
        password.setValue('YOURPASSWORD')
        const signInButton = $('#submit-sign-in')
        signInButton.click()

        //check if day is weekday or weekend
        if (targetDate.getDay() == 0||6){
            browser.url('https://www.avalonaccess.com/Information/Information/AmenityReservation?amenityKey=cdb8c04b-1a29-46fd-a943-7e200428f52b')
        }
        else {
            browser.url('https://www.avalonaccess.com/Information/Information/AmenityReservation?amenityKey=40af5c05-9c86-463f-94d3-0e3d3c9a4965')
        }
        
        
       
    
        const calendar = $('#resv-date')
        calendar.click()
        const calDate = $('='+ selectDate)
        calDate.click()

        const resTimes = $('#SelStartTime')
        resTimes.click()
        const sixPM = $('=6:00 PM - 7:00 PM (1 spot available)')
        const nineAM = $('=9:00 AM - 10:00 AM (1 spot available)')
        const sevenPM = $('=7:00 PM - 8:00 PM (1 spot available)')

        if ((nineAM).isExisting()) {
            nineAM.click()
        }
        else if ((sixPM).isExisting()){
            sixPM.click()
        }
        else if ((sevenPM).isExisting()){
            sevenPM.click()
        }

        const numberPeople = $('#NumberOfPeople')
        numberPeople.setValue('1')

        const resNames = $('#ReservationNames')
        resNames.setValue('Eduardo Arenas')

        const reserveButton = $('#submit-new-reservation')
        reserveButton.click()

        expect(browser).toHaveUrl('https://www.avalonaccess.com/Information/Information/Amenities')
    })
});
