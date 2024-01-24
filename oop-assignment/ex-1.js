class EmailNotification {
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
        send() {
            let email = this.receiver
            console.log(`Notification has been sent to ${email}`)
        }
    }
    
 

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${phoneNumber}`)
    }
 }

 let email = new EmailNotification("tanakonintapat@gmail.com", "12.00", "Send to Email : Adress", "kondee@gmail.com")

 let sms = new SMSNotification("google@gmail.com", "13.00", "Send to Email : 2", "095-9979794" )

 console.log(email)
 console.log(sms)