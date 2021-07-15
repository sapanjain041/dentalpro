import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAppointment } from "../../redux/action";

const AppoinmentForm = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const [appoinment_date, setAppoinment_date] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, appoinment_date);
    const newAppoinment = { name, email, message, appoinment_date };
    dispatch(postAppointment(newAppoinment));
    setName("");
    setemail("");
    setAppoinment_date("");
    setMessage("");
  };
  return (
    <div id="AppoinmentForm" className="col-md-4">
      <div className="border-3px p-30 pt-10 pb-20 border-theme-colored bg-theme-colored2">
        <h3 className="text-white">Request An Appointment!</h3>
        <p className="text-white mt-0">
          Just make an appointment to get help from our experts
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  id="form_name"
                  name="name"
                  className="form-control"
                  type="text"
                  required=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  id="form_email"
                  name="email"
                  className="form-control required email"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter Email"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group mb-10">
                <input
                  name="form_appontment_date"
                  className="form-control required datetime-picker"
                  type="date"
                  value={appoinment_date}
                  onChange={(e) => setAppoinment_date(e.target.value)}
                  placeholder="Appoinment Date & Time"
                  aria-required="true"
                />
              </div>
            </div>
          </div>
          <div className="form-group mb-10">
            <textarea
              name="message"
              className="form-control required"
              placeholder="Enter Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-required="true"
            ></textarea>
          </div>
          <div className="form-group mb-0 mt-20">
            <button
              className="btn btn-dark btn-theme-colored"
              data-loading-text="Please wait..."
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppoinmentForm;

{
  /* //
          <!-- Appointment Form Validation-->
          <script>
            $("#appointment_form_at_home").validate({
              submitHandler: function(form) {
                var form_btn = $(form).find('button[type="submit"]');
                var form_result_div = '#form-result';
                $(form_result_div).remove();
                form_btn.before('<div id="form-result" className="alert alert-success" role="alert" style="display: none;"></div>');
                var form_btn_old_msg = form_btn.html();
                form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                $(form).ajaxSubmit({
                  dataType:  'json',
                  success: function(data) {
                    if( data.status == 'true' ) {
                      $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                  }
                });
              }
            });
          </script>
          <!-- Appontment Form Ends --></div> */
}
