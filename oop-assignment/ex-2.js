class Notification {
  constructor(notificationId, createdTime, content, receiver){
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;

  }
  send(){
    console.log(`Notification has been sent to ${this.receiver}`)
  }

 }

class EmailNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver){
     super(notificationId, createdTime, content, receiver)
    }
    
}

class SMSNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, content, receiver)
       }
}

let email = new EmailNotification("tanakonintapat@gmail.com", "12.00", "Send to Email : Adress", "kondee@gmail.com")

let sms = new SMSNotification("google@gmail.com", "13.00", "Send to Email : 2", "095-9979794" )

console.log(email)
 console.log(sms)