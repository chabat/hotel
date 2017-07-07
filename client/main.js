//Collections
Customers = new Mongo.Collection('customers');
Feedbacks = new Mongo.Collection('feedbacks');

//Clean COllections
//Feedbacks.find().forEach(function(doc){ Feedbacks.remove({_id: doc._id}) })

//Database helpers
Template.Database.helpers({
  'customer': function(){
      return Customers.find();
  },
  'feedback': function(){
      return Feedbacks.find();
  }

});

//Contact Event
Template.ContactForm.events({
  'submit form': function(event){

    event.preventDefault();
    var varname = event.target.ContactName.value;
    var varemail = event.target.Email.value;
    var varmessage = event.target.Message.value;

    Feedbacks.insert({
        name: varname,
        email: varemail,
        message: varmessage
    });
    event.target.ContactName.value = "";
    event.target.Email.value = "";
    event.target.Message.value = "";

  }
});

//Signup Event
Template.SignupForm.events({
  'submit form': function(event){

    event.preventDefault();
    var varname = event.target.SignupName.value;
    var varemail = event.target.SignupEmail.value;
    var varphone = event.target.SignupPhone.value;
    var varpassw = event.target.SignupPassw.value;

    Customers.insert({
        name: varname,
        email: varemail,
        phone: varphone,
        passw: varpassw
    });
    event.target.SignupName.value = "";
    event.target.SignupEmail.value = "";
    event.target.SignupPhone.value = "";
    event.target.SignupPassw.value = "";

  }
});
