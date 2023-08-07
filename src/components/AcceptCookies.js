import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import './AcceptCookies.css';

const AcceptCookies = () => {
  useEffect(() => {
    // Show the modal on every page refresh
    $('#myModal').modal('show');
  }, []);

  return (
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog" >
        {/* Change the maxWidth value above to your desired width */}
        <div className="modal-content">
          <div className="modal-body">
            <h3>Please Accept Cookies</h3>
            <h5>
              We use ‘cookies’ and related technologies to help identify you and your devices, to operate our site, enhance your experience and conduct advertising. You can read more about these uses in our <a href="#" style={{ color: 'blue' }}>Privacy Policy</a>.
            </h5>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Accept Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptCookies;

